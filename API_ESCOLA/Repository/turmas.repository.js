const knex = require("../mysql-connection");

module.exports={

    select: ()=>{
        return knex.select().from("turmas")
    },
    selectComId: (paramsId)=>{
        
        return knex.select().from("turmas").where("ID",paramsId);
    },
    selectJoin: ()=>{

        return knex("turmas")
        .innerJoin("professores","turmas.PROFESSOR_ID","professores.ID")
        .innerJoin("alunos","turmas.ALUNO_ID","ALUNOS.ID")
        .select("turmas.ID","turmas.NRO_SALA","turmas.PROFESSOR_ID","turmas.ALUNO_ID")

    },
    selectJoinPorId: (paramsId)=>{

        return knex("turmas")
        .innerJoin("professores","turmas.PROFESSOR_ID","professores.ID")
        .innerJoin("alunos","turmas.ALUNO_ID","ALUNOS.ID")
        .select("turmas.ID","turmas.NRO_SALA","turmas.PROFESSOR_ID","turmas.ALUNO_ID")
        .where("turmas.ID",paramsId);

    },
    insert: (body)=>{
        return knex.insert(body).from("turmas");
    },
    delete: (paramsId)=>{
        return knex("turmas").where("ID",paramsId).del();
    },
    update: (paramsId,body)=>{
        return knex("turmas").update(body).where("ID",paramsId);
    }
}