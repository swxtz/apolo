import { prisma } from "@/lib/prisma";
import { randomUUID } from "crypto";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function usersRoutes(app: FastifyInstance) {
    app.post("/", async (req: FastifyRequest, reply: FastifyReply) => {

        const userSchema = z.object({
            username: z.string(),
            score: z.number(),
        });

        try {
            const { username, score } = userSchema.parse(req.body);

            const user = await prisma.user.findFirst({ where: { name: username } });

            if (user) {
                if(user.maxScore < score) {
                    await prisma.user.update({ where: { name: username }, data: { maxScore: score } });
                    await prisma.score.create({ data: { owner: username, score } });
                    return reply.code(200).send({ message: "Pontual maxima atualizada" });
                } 
                
                return reply.code(200).send({ message: "Usuario não alcancou a pontuação maxima" });
            } else {
                await prisma.user.create({ data: { name: username, maxScore: score } });
                await prisma.score.create({ data: { owner: username, score } });
                return reply.code(201).send({ message: "Usuario criado com sucesso" });
            }
        
        } catch (e) {
            return reply.code(400).send({ message: e });
        }
    })
}