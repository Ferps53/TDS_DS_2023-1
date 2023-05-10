const express = require("express");
const vendasController = require("../Controller/vendas.controller");

const routes = new express.Router();

routes.get("/dados",vendasController.BuscaVendas_ComFuncionarios_Total);
routes.get("/dados/:ID_VENDAS([0-9]+)",vendasController.BuscaVendas_ComFuncionarios);
routes.get("/", vendasController.selectTotal);
routes.get("/:ID_VENDAS([0-9]+)", vendasController.select);
routes.post("/", vendasController.Insert);
routes.put("/:ID_VENDAS([0-9]+)",vendasController.update);
routes.delete("/:ID_VENDAS([0-9]+)",vendasController.delete);

module.exports = routes;