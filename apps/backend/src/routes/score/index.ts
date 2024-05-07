import { prisma } from "@/lib/prisma";
import type { FastifyInstance, FastifyReply } from "fastify";

export async function scoreRoutes(app: FastifyInstance) {
    app.get("/max-score", async (_, reply: FastifyReply) => {
        try {
            const scores = await prisma.score.findMany({
                orderBy: {
                    score: "desc"
                }
            });

            return reply.code(200).send({ data: { ...scores } });
        } catch (e) {
            return reply.code(500).send({ message: "deu pau no servidor" })
        }
    });
}