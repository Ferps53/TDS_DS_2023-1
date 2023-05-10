const knex = require("../mysql-connection");
const { param } = require("../routers");

module.exports ={

    select: ()=>{

        return knex.select().from("alunos");
    },
    selectComId: (paramsId)=>{

        return knex.select().from("alunos").where('ID',paramsId);
    },
    insert: (body)=>{
        return knex("alunos").insert(body);
    },
    delete: (paramsId)=>{
        return knex('alunos').del().where("ID",paramsId);
    },
    atualizar: (paramsId,body)=>{
        return knex('alunos').where("ID",paramsId).update(body);
    }
}