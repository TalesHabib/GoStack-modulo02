import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs'; // dependencia para gerar hash

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        provider: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );
    this.addHook('beforeSave', async user => {
      // hook funcionalidade Sequelize
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8); // verificacao de hash
      }
    }); // gerando hash de senha

    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'avatar_id', as: 'avatar' });
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash); // senha criptografada no banco, bcrypt.compare retorna true se as senhas batem senão retorna false
  }
}

export default User;
