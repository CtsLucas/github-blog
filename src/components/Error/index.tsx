import { ErrorIcon } from '../icons/ErrorIcon';
import { ErrorContainer } from './style';

export function Error() {
  return (
    <ErrorContainer>
      <ErrorIcon />
      <strong>Falha ao carregar os dados.</strong>
      <span>
        É possível que você tenha atingido o limite de requisições da API do
        GitHub, aguarde 1 minuto e tente novamente!
      </span>
    </ErrorContainer>
  );
}
