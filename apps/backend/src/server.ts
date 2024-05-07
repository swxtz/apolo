import fastify from "fastify";
import { scoreRoutes } from "./routes/score";
import { usersRoutes } from "./routes/users";
import fastifyCors from "@fastify/cors";

export function server() {
    const app = fastify();
    
    app.register(fastifyCors, { origin: "*" })

    app.register(scoreRoutes);
    app.register(usersRoutes);

    return app;
}