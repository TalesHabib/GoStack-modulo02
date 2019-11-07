import Sequelize from 'sequelize'; // index realiza conexão com o banco de dados.

import User from '../app/models/User';
import File from '../app/models/File';
import Appointment from '../app/models/Appointment';

import databaseConfig from '../config/database';

const models = [User, File, Appointment];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig); // faz conexao com banco de dados

    models
      .map(model => model.init(this.connection)) // carrega os models dentro da classe User
      .map(model => model.associate && model.associate(this.connection.models));
  }
}
export default new Database();
