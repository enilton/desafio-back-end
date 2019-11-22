const mongoose = require("mongoose");

module.exports = {
  async buscarTodos(req, res) {
    const tarefas = await Tarefa.find({})
      .populate("tags")
      .populate("usuarios");
    return res.json(tarefas);
  },

  async detalhar(req, res) {
    const tarefa = await Tarefa.findById(req.params.id);
    return res.json(tarefa);
  },

  async criar(req, res) {
    let tarefa = req.body;
    tarefa = await Tarefa.create(tarefa);
    return res.json(tarefa);
  },

  async atualizar(req, res) {
    const tarefa = await Tarefa.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    return res.json(tarefa);
  },

  async desativar(req, res) {
    const tarefa = req.body;
    tarefa.ativo = false;
    await Tarefa.findByIdAndUpdate(req.params.id, tarefa, { new: true });
    return res.json(tarefa);
  },

  async ativar(req, res) {
    const tarefa = req.body;
    tarefa.ativo = true;
    await Tarefa.findByIdAndUpdate(req.params.id, tarefa, { new: true });
    return res.json(tarefa);
  }
};