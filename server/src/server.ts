import fastify from "fastify";
import Cors from "@fastify/cors";
import {PrismaClient} from '@prisma/client'

const app = fastify();
const prisma = new PrismaClient()

app.register(Cors)

app.get('/hello', async () => {
    const habits = await prisma.habit.findMany()
    return habits
})

app.listen({
    port: 3003
}).then(() => {
    console.log('HTTP Server Running!\nAccess: http://localhost:3003/hello')
})