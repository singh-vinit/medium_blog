import z from "zod";

export const signupSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
});

export const signinSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const createBlogSchema = z.object({
  title: z.string(),
  content: z.string(),
});

export const updateBlogSchema = z.object({
  id: z.string(),
  title: z.string().optional(),
  content: z.string().optional(),
});

export type signupSchema = z.infer<typeof signupSchema>;
export type signinSchema = z.infer<typeof signinSchema>;
export type createBlogSchema = z.infer<typeof createBlogSchema>;
export type updateBlogSchema = z.infer<typeof updateBlogSchema>;
