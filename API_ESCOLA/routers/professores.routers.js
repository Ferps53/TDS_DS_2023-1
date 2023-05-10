const express = require("express");
const router = express.Router();
const professores = require("../Controller/professores.Controller");

router.get("/",professores.buscar);
router.get("/:id([0-9]+)",professores.buscarComID);
router.post("/",professores.insert);
router.delete("/:id([0-9]+)",professores.deletar);
router.put("/:id([0-9]+)",professores.atualizar);

module.exports = router;


