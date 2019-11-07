import jwt from 'jsonwebtoken'; // yarn add jsonwebtoken
import * as Yup from 'yup';

import User from '../models/User';
import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' });
    }

    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'User not found' }); // verificação de usuário
    }
    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match' }); // verificação de senha
    }
    const { id, name } = user;
    return res.json({
      // retorna para o usuario
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        // informacoes de payload (jwt)
        expiresIn: authConfig.expireIn,
      }),
    });
  }
}
export default new SessionController();
