const express = require("express");
const router  = express.Router();
const alunos = require("../Controller/alunos.Controller")

router.get("/",alunos.bunscar);
router.get("/:id([0-9]+)",alunos.bunscarComId);
router.post("/",alunos.inserir);
router.delete("/:id([0-9]+)",alunos.deletar);
router.put("/:id([0-9]+)",alunos.atualizar)

module.exports = router;