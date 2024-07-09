import { z } from "zod";

export const messageSchema = z.object({
  content: z
    .string()
    .min(10, { message: "message should be atleast 10 characters" })
    .max(300, { message: "cant exceed more than 300 words of message" }),
});
