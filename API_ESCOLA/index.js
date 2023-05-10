const express = require("express");
const app = express();
const routers = require("./routers/index");

app.use(express.json())
app.use(routers);

app.listen(6657,(error) =>{

    if(error){

        console.log("erro de conexão :(")
       
    }else{

        console.log("programa rodando na porta 6657")
    }

})