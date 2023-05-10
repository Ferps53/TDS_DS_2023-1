const repo = require("../Repository/professores.repository");

module.exports = {

    buscar: (req, res) => {
        repo.select().then((result) => {

            res.send(result);
        }).catch((error) => {
            res.send(error);
        });
    },
    buscarComID: (req, res) => {
        repo.selectComId(req.params.id).then((result) => {

            res.send(result);
        }).catch((error) => {

            res.send(error);
        });
    },
    insert: (req, res) => {
        repo.insert(req.body).then((result) => {

            res.send({
                text: " professor inserido com sucesso!",
                object: req.body
            })
        }).catch((error) => {
            res.send(error);
        });
    },
    deletar: (req, res) => {

        repo.delete(req.params.id).then((result) => {

            res.send({
                text: "dados deletados com sucesso"
            });
        }).catch((error) => {
            res.send(error);
        });
    },
    atualizar: async (req, res) => {

        const professor = await repo.selectComId(req.params.id).
        then((result) => result).catch((error) => {
            res.send(error);
        });

        repo.update(req.params.id, req.body).then((result) => {



            res.send({

                text: "professor atualizado com sucesso!",
                professor
            });
        }).catch((error) => {
            res.send(error);
        });
    }
}