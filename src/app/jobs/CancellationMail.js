import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Mail from '../../lib/Mail';

class CancellationMail {
  // se o user importar esse cancellation mail ele vai conseguir fazer CancellationMail.key
  // para cada job a gente precisa de uma chave única
  get key() {
    return 'CancellationMail';
  }

  // tarefa que vai executar quando esse processo ser executado
  // vai ser uma fila e o handle vai ser chamado para envio de cada email
  async handle({ data }) {
    const { appointment } = data;

    await Mail.sendMail({
      to: `${appointment.provider.name} <${appointment.provider.email}>`,
      subject: 'Agendamento cancelado',
      template: 'cancellation',
      context: {
        provider: appointment.provider.name,
        user: appointment.user.name,
        date: format(
          parseISO(appointment.date),
          "'dia' dd 'de' MMMM', às' H:mm'h",
          {
            locale: pt,
          }
        ),
      },
    });
  }
}

export default new CancellationMail();
