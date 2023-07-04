import dotenv from "dotenv";
import express from "express";  
import storageCampus from "./routers/campus.js";

dotenv.config();        
const appExpress = express();   

appExpress.use(express.json());
appExpress.use("/campus", storageCampus);



const config = JSON.parse(process.env.MY_CONFIG)    //*Asi se accede a la variable de entorno
appExpress.listen(config, ()=>console.log(`http://${config.hostname}:${config.port}`)); //*Se monta el servidor