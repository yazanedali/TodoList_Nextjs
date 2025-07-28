import { z } from "zod"
export const formSchema = z.object({
  title: z.string().min(5, {
    message: "Title must be at least 5 characters.",
  })
  .max(50, {
    message: "Title must not be longer than 50 characters.",
  }),
  body: z.string()
  .max(80, {
    message: "Body must not be longer than 80 characters.",
  })
  .optional(),
  
})

