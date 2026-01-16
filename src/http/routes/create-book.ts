import { FastifyInstance } from "fastify";
import { z } from "zod";
import { Prisma } from "../lib/prisma";

export async function createBookroute(app: FastifyInstance) {
  app.post("/books", async (request, reply) => {
    const createBoockBody = z.object({
      title: z.string(),
      author: z.string(),
      description: z.string(),
    });

    const { title, author, description } = createBoockBody.parse(request.body);

    const book = await Prisma.book.create({
      data: {
        title,
        author,
        description,
      },
    });
    if (book) {
      return reply.status(201).send({ bookId: book.id });
    } else {
      return reply.status(500).send({ error: "Failed to create book" });
    }
  });
}
