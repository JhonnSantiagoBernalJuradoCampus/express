import {Router} from "express";
//* Llamar una variable como el archivo

const storageCampus = Router();

storageCampus.get("/", (req,res)=>{
    res.send("Soy get");
})
storageCampus.post("/", (req,res)=>{
    res.send("Soy el post")
})

export default storageCampus;