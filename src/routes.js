const express = require('express');
const routes = express.Router();
const TarefaController = require("./controller/TarefaController");

routes.get("/",(requ, res) =>{
    return res.send("Tarefas service app");
});


routes.get("/tarefas", TarefaController.buscarTodos);
/*routes.get("/tarefas/buscarPorData", TarefaController.buscarPorData);
routes.get('/tarefas/:id', TarefaController.detalharEvento);
routes.post("/tarefas", TarefaController.criar);
routes.delete("/tarefas", TarefaController.desativar);/*/

module.exports = routes;