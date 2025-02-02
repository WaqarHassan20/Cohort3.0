import express from "express";
import { z } from "zod";
const app = express();

const userProfileSchema = z.object({
  name: z.string().min(4, { message: "Cannot be empty" }),
  email: z.string().email({ message: "Cannot be empty" }),
  age: z
    .number()
    .min(18, { message: "Must be atlest 18 years old" })
    .optional(),
});

// type FinalUserSchema = {
//   name: string;
//   email: string;
//   age?: number;
// };
// This is a compile time zod object we have created
// Rather than doing the above writing code again for schema we do write the given line of code from zod library.

type FinalUserSchema = z.infer<typeof userProfileSchema>;
// This is a run time zod object we have created

app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
  const UpdatedBody: FinalUserSchema = req.body; // To rather tell the manually schema of updation for user,
  // ust use the zod infer and extract types from above defined zod achema for user to avoid data redundency

  if (!success) {
    res.status(411).json({
      message: "Some Error",
    });
  } else
    res.json({
      message: "Updated Successfully",
    });
});
