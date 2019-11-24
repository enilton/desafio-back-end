const express = require('express');
const routes = express.Router();
const TarefaController = require('./controller/TarefaController');
const UsuarioController = require('./controller/UsuarioController');
const SessionController = require('./controller/SessionController');
const authMiddleware = require('./middlewares/auth');

routes.get('/',(requ, res) =>{
    return res.send('Tarefas service app');
});

routes.post('/usuarios', UsuarioController.criar);
routes.post('/sessions', SessionController.criar);

routes.use(authMiddleware.autenticar);

routes.post('/logout', SessionController.logout);

routes.get('/usuarios', UsuarioController.buscarTodos);

routes.get('/tarefasAll', TarefaController.buscar);
routes.get('/tarefas', TarefaController.buscarTodosPorUsuario);
routes.post('/tarefas', TarefaController.criar);
routes.get('/tarefas/:id', TarefaController.detalhar);
routes.put('/tarefas', TarefaController.atualizar);
routes.delete('/tarefas', TarefaController.remover);

module.exports = routes;