import { useHome } from './useHome';

import { Profile } from './components/Profile';
import { Card } from './components/Card';
import { Form } from './components/Form';
import { Loader } from '../../components/Loader';
import { Error } from '../../components/Error';
import { Empty } from '../../components/Empty';

import { HomeContainer, HomeContent } from './styles';

export function Home() {
  const {
    user,
    issues,
    searchTerm,
    isLoading,
    searchIsLoading,
    error,
    handleChangeSearchTerm,
  } = useHome();

  if (error) {
    return <Error />;
  }

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
              <Empty searchTerm={searchTerm} />
            )}
          </HomeContent>
        </>
      )}
    </HomeContainer>
  );
}
