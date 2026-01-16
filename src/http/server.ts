import fastify from "fastify";
import { createBookroute } from "./routes/create-book";

const app = fastify();

app.register(createBookroute);

app.listen({ port: 3000 }).then(() => {
  console.log("Server is running on ");
});
