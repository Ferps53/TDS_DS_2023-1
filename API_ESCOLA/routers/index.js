const express = require("express");
const router = express.Router();
const alunoRouter = require("./alunos.routers");
const professoresRouter = require("./professores.routers");
const turma = require("./turmas.routers");

router.use("/alunos",alunoRouter);
router.use("/professores",professoresRouter);
router.use("/turmas",turma);

module.exports = router;