import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import { signinSchema, signupSchema } from "@vinit4/medium-common";

type Bindings = {
  DATABASE_URL: string;
  JWT_SECRET: string;
};

export const userRouter = new Hono<{ Bindings: Bindings }>();

userRouter.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success } = signupSchema.safeParse(body);
  if (!success) {
    return c.json({ message: "wrong inputs" }, 400);
  }

  const userExist = await prisma.user.findUnique({
    where: { email: body.email },
  });
  if (userExist) {
    return c.json({ message: "user already exist" }, 400);
  } else {
    const user = await prisma.user.create({
      data: { name: body.name, email: body.email, password: body.password },
    });
    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ jwt: token, name: user.name }, 201);
  }
});

userRouter.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success } = signinSchema.safeParse(body);
  if (!success) {
    return c.json({ message: "wrong inputs" }, 400);
  }

  const user = await prisma.user.findUnique({ where: { email: body.email } });
  if (!user) {
    return c.json({ message: "wrong credentials" }, 403);
  }
  if (user.password === body.password) {
    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ jwt: token, name: user.name }, 200);
  } else {
    return c.json({ message: "wrong credentials" }, 403);
  }
});
