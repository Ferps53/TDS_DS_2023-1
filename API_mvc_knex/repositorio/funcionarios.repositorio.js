const knex = require("../mysql-conection");

module.exports =  {

    pesquisar: (params)=>{
        
        return knex.select().from("funcionarios").where({ ID: params});
    },

    pesquisaTotal: ()=>{

        return knex.select().from("funcionarios");
    },

    Inserir: (body)=>{

        return knex('funcionarios').insert({
            ID: body.ID,
            NOME: body.NOME,
            CPF: body.CPF,
            SEXO: body.SEXO,
            TELEFONE: body.TELEFONE,
            STATUS: body.STATUS,
            DATA_NSC: body.DATA_NSC,
            SALARIO: body.SALARIO
             });
    },

    atualizar: (body,paramsId)=>{

       return knex('funcionarios')
        .where({'ID': paramsId})
        .update(body)
    },

    deletar:(paramsId)=>{

        return knex('funcionarios')
        .where('ID', paramsId)
        .del()
    },

    BuscarVendas_ComFuncionarios: ()=>{
                                    
        return knex("funcionarios")
        .join("vendas","venda.id_funcionarios","funcionarios.id")
        .select(vendas.id_venda,funcionarios.nome,funcionarios.CPF,vendas.data_venda,vendas.valor_total);
    }
} 