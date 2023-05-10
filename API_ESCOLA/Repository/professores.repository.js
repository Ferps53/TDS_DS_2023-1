const knex = require("../mysql-connection");

module.exports={

    select: ()=>{
        return knex.select().from("professores")
    },
    selectComId: (paramsId)=>{
        console.log("2");
        return knex.select().from("professores").where("ID",paramsId);
    },
    insert: (body)=>{
        return knex.insert(body).from("professores");
    },
    delete: (paramsId)=>{
        return knex("professores").where("ID",paramsId).del();
    },
    update: (paramsId,body)=>{
        return knex("professores").update(body).where("ID",paramsId);
    }
}