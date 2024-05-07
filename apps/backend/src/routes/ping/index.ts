import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

export async function pingRoutes(app:FastifyInstance) {
    app.get("", async (req: FastifyRequest, reply: FastifyReply) => {
        return reply.code(200).send({ message: "ping" })
    })
}