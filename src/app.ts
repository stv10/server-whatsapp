import router from "./routes/router";
import Server from "./server/server";
import express from 'express';
import bodyParser from "body-parser";
import cors from 'cors';

const server:Server = Server.init(3000);
server.app.use(bodyParser.json());
server.app.use(router);
server.app.use(cors({
    origin: ['https://www.geo-dev.tcer.gob.ar','https://www.geo.tcer.gob.ar']
}))



server.start(() => {
    console.log(`Running on port ${server.port}`);
});