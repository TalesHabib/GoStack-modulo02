import Sequelize from 'sequelize'; // index realiza conexão com o banco de dados.
import mongoose from 'mongoose';

import User from '../app/models/User';
import File from '../app/models/File';
import Appointment from '../app/models/Appointment';

import databaseConfig from '../config/database';

const models = [User, File, Appointment];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(databaseConfig); // faz conexao com banco de dados

    models
      .map(model => model.init(this.connection)) // carrega os models dentro da classe User
      .map(model => model.associate && model.associate(this.connection.models));
  }

  mongo() {
    this.mongo.connection = mongoose.connect(
      'mongodb://localhost:27017/gobarber',
      {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
      }
    );
  }
}
export default new Database();
