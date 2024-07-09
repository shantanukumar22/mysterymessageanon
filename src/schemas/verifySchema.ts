import { z } from "zod";

export const verifySchema = z.object({
  code: z.string().length(6, "character should be exactly of six digits"),
});
