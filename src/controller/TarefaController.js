const mongoose = require("mongoose");
const Tarefa = mongoose.model('Tarefa');

module.exports = {

  async buscar(req, res) {
    const tarefas = await Tarefa.find({})      
      .populate("usuario");
    return res.json(tarefas);
  },

  async buscarTodosPorUsuario(req, res) {
    const tarefas = await Tarefa.find({ 'usuario' : req.userId });
    return res.json(tarefas);
  },

  async detalhar(req, res) {
    const tarefa = await Tarefa.findById(req.params.id);
    return res.json(tarefa);
  },

  async criar(req, res) {
    let tarefa = req.body;
    tarefa.usuario = req.userId;
    tarefa = await Tarefa.create(tarefa);
    return res.json(tarefa);
  },

  async atualizar(req, res) {
    const tarefa = await Tarefa.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    return res.json(tarefa);
  },

  async remover(req, res) {
    const tarefa = req.body;
    await Tarefa.findOneAndDelete(req.params.id, tarefa, { new: false });
    return res.json(tarefa);
  },
};