const repo = require("../Repository/turmas.repository");

module.exports = {

    buscar: (req,res)=>{
        repo.select().then((result) => {
            
            res.send(result);
        }).catch((error) => {
            res.send(error);
        });       
    },
    buscarComID: (req,res)=>{
        repo.selectComId(req.params.id).then((result) => {
            
            res.send(result);
        }).catch((error) => {
            
            res.send(error);
        });     
    },
    buscarComJoin: (req,res)=>{
        repo.selectJoin().then((result) => {
            
            res.send(result);
        }).catch((error) => {
            
            res.send(error);
        }); 
    },
    buscarComJoinPorId: (req,res)=>{
        repo.selectJoinPorId(req.params.id).then((result) => {
            
            res.send(result);
        }).catch((error) => {
            
            res.send(error);
        }); 
    },
    insert: (req,res)=>{
        repo.insert(req.body).then((result) => {
            
            res.send({
                text: " turma inserido com sucesso!",
                object: req.body 
            })
        }).catch((error) => {
            res.send(error);
        });
    },
    deletar: (req,res)=>{

        repo.delete(req.params.id).then((result) => {
            
            res.send({
                text: "dados deletados com sucesso"
            });
        }).catch((error) => {
            res.send(error);
        });
    },
    atualizar: (req,res)=>{

        repo.update(req.params.id,req.body).then((result) => {
            
            res.send({
                
            text: "turma atualizado com sucesso!",
            object: repo.selectComId(req.params.id)
        });
        }).catch((error) => {
            res.send(error);           
        });
    }
}