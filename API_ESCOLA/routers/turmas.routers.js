const express = require("express");
const router = express.Router();
const turma = require("../Controller/turmas.Controller");

router.get("/",turma.buscar);
router.get("/:id([0-9]+)",turma.buscarComID);
router.get("/join",turma.buscarComJoin);
router.get("/join/:id([0-9]+)",turma.buscarComJoinPorId);
router.post("/",turma.insert);
router.delete("/:id([0-9]+)",turma.deletar);
router.put("/:id([0-9]+)",turma.atualizar);


module.exports = router;


