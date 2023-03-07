import { EmptyIcon } from '../icons/EmptyIcon';
import { EmptyContainer } from './style';

interface EmptyProps {
  searchTerm: string;
}

export function Empty({ searchTerm }: EmptyProps) {
  return (
    <EmptyContainer>
      <EmptyIcon />
      <strong>Não há resultados para {`"${searchTerm}"`}</strong>
    </EmptyContainer>
  );
}
