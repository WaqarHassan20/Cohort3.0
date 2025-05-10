import { z } from "zod";

export const CreateUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3).max(20),
  name: z.string().min(3),
});

export const SignInSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const CreateRoomSchema = z.object({
  name: z.string().min(3).max(20),
});
