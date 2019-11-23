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

routes.get('/usuarios', UsuarioController.buscarTodos);
routes.get('/tarefas', TarefaController.buscarTodos);
/*routes.get('/tarefas/buscarPorData', TarefaController.buscarPorData);
routes.get('/tarefas/:id', TarefaController.detalharEvento);*/
routes.post('/tarefas', TarefaController.criar);
/*routes.delete('/tarefas', TarefaController.desativar);*/

module.exports = routes;