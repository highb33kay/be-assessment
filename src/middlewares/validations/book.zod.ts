import { z } from "zod";

const BookSchema = z.object({
  title: z.string(),
  author: z.number().int(),
  authorId: z.number().int(),
  publication_year: z.date().optional(),
  isbn: z.number().int(),
  categoryId: z.number().int(),
});

export { BookSchema };