const repo = require("../repositorio/funcionarios.repositorio");

module.exports = {

    pesquisarTudo: (req,res)=>{
            
        repo.pesquisaTotal().then((result) => {
            res.send(result);

        }).catch((error) => {
            res.send(error)
        });
    
},

     pesquisa: (req,res)=>{
            
            repo.pesquisar(req.params.id).then((result) => {
                res.send(result);

            }).catch((error) => {
                res.send(error)
            });
    
    },

    Inseri: (req,res)=>{

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

        repo.atualizar(req.body,req.params.id).then((result) => {

            res.send({
                Message: "update feito com sucesso",
                Message2 :req.body
            });

        }).catch((error) => {
            res.send(error)
        });
    },

    delete: (req,res)=>{
        repo.deletar(req.params.id).then((result) => {
            
            res.send({
                 Message: "delete feito com sucesso",
        
        });    
        }).catch((error) => {
            res.send(error)
        });
    }
}

