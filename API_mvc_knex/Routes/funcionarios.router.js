const express = require("express");
const funcionariosController = require("../Controller/funcionarios.controller");

const routes = new express.Router();

routes.get("/", funcionariosController.pesquisarTudo);
routes.get("/:id([0-9]+)", funcionariosController.pesquisa);
routes.post("/", funcionariosController.Inseri);
routes.put("/:id",funcionariosController.update);
routes.delete("/:id",funcionariosController.delete);

module.exports = routes;