import { useHome } from './useHome';

import { Empty } from '../../assets/icons/Empty';

import { Profile } from './components/Profile';
import { Card } from './components/Card';
import { Form } from './components/Form';
import { Loader } from '../../components/Loader';

import { HomeContainer, HomeContent, ListEmpty } from './styles';

export function Home() {
  const {
    user,
    issues,
    searchTerm,
    isLoading,
    searchIsLoading,
    handleChangeSearchTerm,
  } = useHome();

  return (
    <HomeContainer>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Profile user={user} />
          <Form
            issues={issues}
            searchTerm={searchTerm}
            onChangeSearchTerm={handleChangeSearchTerm}
          />

          <HomeContent>
            {searchIsLoading ? (
              <Loader />
            ) : issues.total_count > 0 ? (
              issues.items?.map((issue) => (
                <Card key={issue.id} issue={issue} />
              ))
            ) : (
              <ListEmpty>
                <Empty />
                <strong>Não há resultados para {`"${searchTerm}"`}</strong>
              </ListEmpty>
            )}
          </HomeContent>
        </>
      )}
    </HomeContainer>
  );
}
