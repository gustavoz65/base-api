import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma.js";

export function createBookroute(app: FastifyInstance) {
  app.post("/books", async (request, reply) => {});
}
