import { server } from "./server";

const port = 3333;

async function start() {
  await server()
    .listen({ port: port })
    .then((address) => {
      console.log(`Server listening on ${address} || http://localhost:${port}`);
    });
}

start();
