import 'reflect-metadata'
import express from "express";
import { route } from "./routes"
import createConnection from './database'

createConnection();
const server = express();


server.use(express.json())
server.use(route)

server.listen(5000, () => {
    console.log("servidor esta ativo em http://localhost:5000")
})