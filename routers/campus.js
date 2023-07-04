import {Router, express} from "express";
//* Llamar una variable como el archivo

const appExpress = express();
const storageCampus = Router();

storageCampus.get("/", (req,res)=>{
    res.send("Soy get");
})
storageCampus.post("/", (req,res)=>{
    res.send("Soy el post")
})
storageCampus.put("/", (req,res)=>{
    res.send("Soy el put")
})

export default storageCampus;