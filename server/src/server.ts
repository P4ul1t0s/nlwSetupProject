import fastify from "fastify";
import cors from '@fastify/cors';
import { appRoutes } from "./routes";

const app = fastify();

app.register(cors)
app.register(appRoutes)

app.listen({
    port: 3003,
    host: '0.0.0.0'
}).then(() => {
    console.log('HTTP Server Running!\nAccess: http://localhost:3003/')
})