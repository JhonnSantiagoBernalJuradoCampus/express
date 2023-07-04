//? Variables de entorno asi se traen
//? Importar express
import dotenv from "dotenv";    //?Variables de entorno
import express from "express";  //?traemos express

dotenv.config();                //*Para utilizar variables de entorno
const appExpress = express();   //*Para utilizar express

appExpress.use(express.json());
appExpress.use(express.text());


appExpress.get("/campus/:id", (req,res)=>{    //*Ruta con express
/*     console.log(req.params);               //*Parametros son el /:id y el /:user
    console.log(req.query);                   //*Lo que se pasa con ? en la url */
    console.log(req.body);


    res.send("Revise la consola")   //?Asi se pasa el end en node
})

const config = JSON.parse(process.env.MY_CONFIG)    //*Asi se accede a la variable de entorno
appExpress.listen(config, ()=>console.log(`http://${config.hostname}:${config.port}`)); //*Se monta el servidor