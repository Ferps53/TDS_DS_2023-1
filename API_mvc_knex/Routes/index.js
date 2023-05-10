const express = require("express");
const funcionariosRoutes = require("./funcionarios.router");
const vendasRoutes = require("./vendas.router");

 const routes = express.Router();

 routes.use("/funcionarios", funcionariosRoutes);
routes.use("/vendas",vendasRoutes);

 module.exports = routes;