import fastify from "fastify";
import { createBookroute } from "./routes/create-book";

const app = fastify();

app.register(createBookroute);

try {
  await app.listen({ port: 3000 });
  console.log("Server is running on ");
} catch (err) {
  console.error("Error starting server:", err);
  process.exit(1);
}
