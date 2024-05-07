import fastify from "fastify";
import { scoreRoutes } from "./routes/score";
import { usersRoutes } from "./routes/users";
import fastifyCors from "@fastify/cors";
import { pingRoutes } from "./routes/ping";

export function server() {
    const app = fastify();
    
    app.register(fastifyCors, { origin: "*" })

    app.register(scoreRoutes, { prefix: "/score" });
    app.register(usersRoutes, { prefix: "/users" });
    app.register(pingRoutes, { prefix: "/ping" })

    return app;
}