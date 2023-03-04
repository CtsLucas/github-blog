import { InvalidEvent } from 'react';

import { Issues } from '../../useHome';
import { Issue } from '../Card';

import { FormContainer, FormInput } from './style';

interface FormProps {
  searchTerm: string;
  issues: Issues;
  onChangeSearchTerm: (event: InvalidEvent<HTMLInputElement>) => void;
  filteredIssues: Issue[];
}

export function Form({
  issues,
  filteredIssues,
  searchTerm,
  onChangeSearchTerm,
}: FormProps) {
  return (
    <FormContainer>
      <div className="form__header">
        <strong>Publicações</strong>
        <span>
          {filteredIssues?.length === 1
            ? `${issues.total_count} publicação`
            : `${issues.total_count} publicações`}
        </span>
      </div>

      <FormInput
        type="text"
        placeholder="Buscar conteúdo"
        value={searchTerm}
        onChange={onChangeSearchTerm}
      />
    </FormContainer>
  );
}
