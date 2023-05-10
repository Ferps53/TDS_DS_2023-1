const repo = require("../repositorio/vendas.repositorio");

module.exports = {

    BuscaVendas_ComFuncionarios: (req,res)=>{

        repo.BuscarVendas_ComFuncionarios(req.params.ID_VENDAS).then((result) =>{

            res.send(result);
        }).catch((error) => {

            res.send(error);
        })
    },
    BuscaVendas_ComFuncionarios_Total: (req,res)=>{

        repo.BuscarVendas_ComFuncionarios_Total().then((result) =>{

            res.send(result);
        }).catch((error) => {

            res.send(error);
        })
    },

    selectTotal: (req,res)=>{
            
        repo.pesquisaTotal().then((result) => {
            res.send(result);

        }).catch((error) => {
            res.send(error)
        });
    },    
    
    select: (req,res)=>{
            
        repo.pesquisar(req.params.ID_VENDAS).then((result) => {
            res.send(result);

        }).catch((error) => {
            res.send(error)
        });
    },

Insert: (req,res)=>{

    repo.Inserir(req.body).then((result) => {

        res.send({
            Message :"dados inseridos com sucesso",
            Meassage2 :req.body
        });

    }).catch((error) => {
        res.send(error)
    });
},

update: (req,res)=>{

    repo.atualizar(req.body,req.params.ID_VENDAS).then((result) => {

        res.send({
            Message: "update feito com sucesso",
            Message2 :req.body
        });

    }).catch((error) => {
        res.send(error)
    });
},

delete: (req,res)=>{
    repo.deletar(req.params.ID_VENDAS).then((result) => {
        
        res.send({
             Message: "delete feito com sucesso",
    
    });    
    }).catch((error) => {
        res.send(error)
    });
}
}

