import { fastify } from "fastify";

const app = fastify();

app.get("/", () => {
  return "teste !!!!!!";
});

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server running!!!!!");
});
