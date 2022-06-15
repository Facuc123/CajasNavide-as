
const clienteController = (Cliente) => {

  const getCliente = async (req, res) => {
		const response = await Cliente.find();
		res.json(response);
  }

  const postCliente = async (req, res) => { 
    const cliente = new Cliente(req.body);
    await cliente.save();
    res.json(cliente);
  }

  const deleteCliente = async (req, res) =>{
    const { params } = req;
    await Cliente.findByIdAndDelete(params.clienteId);
    res.status(200).json('customer has been delete successfuly');
  }

  return { getCliente, postCliente, deleteCliente };

}

module.exports = clienteController;