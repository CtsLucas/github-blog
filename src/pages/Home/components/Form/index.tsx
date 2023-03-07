import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Issues } from '../../useHome';

import { FormContainer, FormInput } from './style';

interface FormProps {
  searchTerm: string;
  issues: Issues;
  onChangeSearchTerm: (searchTerm: string) => void;
}

const newSeacrhTermSchema = zod.object({
  search: zod.string(),
});

type NewSearchTerm = zod.infer<typeof newSeacrhTermSchema>;

export function Form({ issues, onChangeSearchTerm, searchTerm }: FormProps) {
  const { register, handleSubmit, reset } = useForm({
    resolver: zodResolver(newSeacrhTermSchema),
    defaultValues: {
      search: '',
    },
  });

  function handleSearchTerm({ search }: NewSearchTerm) {
    onChangeSearchTerm(search);
  }

  function handleClearSearchTerm() {
    reset();
    onChangeSearchTerm('');
  }

  return (
    <FormContainer onSubmit={handleSubmit(handleSearchTerm)}>
      <div className="form__header">
        <strong>Publicações</strong>
        <span>
          {issues.items?.length === 1
            ? `${issues.total_count} publicação`
            : `${issues.total_count} publicações`}
        </span>
      </div>

      <div className="form__content">
        <FormInput
          type="text"
          placeholder="Buscar conteúdo"
          {...register('search')}
        />

        {searchTerm.length > 0 && (
          <button
            type="button"
            className="form__content__delete"
            title="Limpar busca"
            onClick={handleClearSearchTerm}
          >
            <FontAwesomeIcon icon={faDeleteLeft} />
          </button>
        )}
      </div>
    </FormContainer>
  );
}
