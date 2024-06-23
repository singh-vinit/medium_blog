import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from "hono/jwt";
import { createBlogSchema, updateBlogSchema } from "@vinit4/medium-common";

type Bindings = {
  DATABASE_URL: string;
  JWT_SECRET: string;
};

export const blogRouter = new Hono<{
  Bindings: Bindings;
}>();

blogRouter.use("/*", async (c, next) => {
  const authHeader = c.req.header("authorization");
  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.split(" ")[1];
    try {
      const decoded = await verify(token, c.env.JWT_SECRET);
      c.set("jwtPayload", decoded.id);
      await next();
    } catch (error) {
      return c.json({ message: "Invalid or expired token" }, 401);
    }
  } else {
    return c.json({ message: "you are not logged in" }, 401);
  }
});

blogRouter.post("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success } = createBlogSchema.safeParse(body);
  if (!success) {
    return c.json({ message: "wrong inputs" }, 400);
  }

  try {
    await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: c.get("jwtPayload"),
      },
    });
    return c.json({ message: "post created!" }, 201);
  } catch (error) {
    return c.json({ message: "internal server error" }, 500);
  }
});

blogRouter.put("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success } = updateBlogSchema.safeParse(body);
  if (!success) {
    return c.json({ message: "wrong inputs" }, 400);
  }

  try {
    await prisma.post.update({
      where: { id: body.id },
      data: { title: body.title, content: body.content },
    });
    return c.json({ message: "post updated!" }, 200);
  } catch (error) {
    return c.json({ message: "internal server error" }, 500);
  }
});

blogRouter.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const posts = await prisma.post.findMany();
    return c.json({ posts }, 200);
  } catch (error) {
    return c.json({ message: "internal server error" }, 500);
  }
});

blogRouter.get("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const id = c.req.param("id");
  try {
    const post = await prisma.post.findUnique({
      where: { id },
    });
    return c.json({ post }, 200);
  } catch (error) {
    return c.json({ message: "internal server error" }, 500);
  }
});
