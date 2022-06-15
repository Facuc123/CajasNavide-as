const express = require('express');
const Cliente = require('../models/clienteModel');
const clienteController = require('../controllers/clienteController');

const routes = (Cliente) => {

  const clienteRouter = express.Router();

  const { getCliente, postCliente, deleteCliente } = clienteController(Cliente);

  clienteRouter.route('/cliente')
  .get(getCliente)
  .post(postCliente);

  clienteRouter.route('/cliente/:clienteId')
  .delete(deleteCliente);

  return clienteRouter;

}

module.exports = routes;