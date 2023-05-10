const express = require("express");
const app = express();
const routes = require("./Routes/index")

app.use(express.json());
app.use(routes);

app.listen(8080, (error) =>{

    if(error){

        console.error("erro!!!");
    }else{

        console.log("programa em execução na porta 8080!");
    }
});