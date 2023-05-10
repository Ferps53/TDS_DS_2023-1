const knex = require("../mysql-conection");

module.exports =  {

    BuscarVendas_ComFuncionarios: (paramsId)=>{
                                    
        return knex("funcionarios")
        .innerJoin("vendas","funcionarios.ID","vendas.ID_FUNCIONARIO")
        .select('VENDAS.ID_VENDAS','FUNCIONARIOS.NOME','FUNCIONARIOS.CPF','VENDAS.DATA_VENDA','VENDAS.VALOR_TOTAL')
        .where('ID_VENDAS', paramsId);
    },
    BuscarVendas_ComFuncionarios_Total: ()=>{
                                    
        return knex("funcionarios")
        .innerJoin("vendas","funcionarios.ID","vendas.ID_FUNCIONARIO")
        .select('VENDAS.ID_VENDAS','FUNCIONARIOS.NOME','FUNCIONARIOS.CPF','VENDAS.DATA_VENDA','VENDAS.VALOR_TOTAL');
    },
    pesquisar: (params)=>{
        
        return knex.select().from("vendas").where('ID_VENDAS','=',params);
    },

    pesquisaTotal: ()=>{

        return knex.select().from("vendas");
    },

    Inserir: (body)=>{

        return knex('vendas').insert(body);
    },

    atualizar: (body,paramsId)=>{

       return knex('vendas')
        .where({'ID_VENDAS': paramsId})
        .update(body)
    },

    deletar:(paramsId)=>{

        return knex('vendas')
        .del()
        .where('ID_VENDAS',paramsId);
    
    }
} 