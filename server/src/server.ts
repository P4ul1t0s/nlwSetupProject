import fastify from "fastify";
import Cors from "@fastify/cors";
import { appRoutes } from "./routes";

const app = fastify();

app.register(Cors)
app.register(appRoutes)

app.listen({
    port: 3003
}).then(() => {
    console.log('HTTP Server Running!\nAccess: http://localhost:3003/')
})