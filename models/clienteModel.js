const mongoose = require('mongoose');

const { Schema } = mongoose;;

const clienteModel = new Schema(
  {
  firstName: {type: String},
  lastName: {type: String},
  phone: {type: Number},
  adress: {type: String},
  economyBox: {type: Number},
  premiumBox: {type: Number},

})

module.exports = mongoose.model('Cliente', clienteModel);