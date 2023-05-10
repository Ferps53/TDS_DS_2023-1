const repo = require("../Repository/alunos.repository");

module.exports={

    bunscar: (req,res)=>{

        repo.select().then((result) => {

            res.send(result);
        }).catch((error) => {
            
            res.send(error);
        });
    },
    bunscarComId: (req,res)=>{

        repo.selectComId(req.params.id).then((result) => {

            res.send(result);
        }).catch((error) => {
            
            res.send(error);
        });
    },
    inserir: (req,res)=>{
        repo.insert(req.body).then((result) => {
            
            res.send({
                text: "dados inserios com sucesso",
                object: req.body
            });
        }).catch((error) => {
            res.send(error);
        });

    },
    deletar: (req,res)=>{

        repo.delete(req.params.id).then((result) => {
            
            res.send({
                text: "aluno deletado com sucesso!"
            });
        }).catch((error) => {
            res.send(error);
        });
    },
    atualizar: (req,res)=>{
        repo.atualizar(req.params.id,req.body).then((result) => {
            
            res.send({
                text: "aluno atualizado com sucesso!",
                object: req.body
            });
        }).catch((error) => {
            res.send(error);            
        });
    }
}
