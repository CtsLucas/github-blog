import { useHome } from './useHome';

import { Profile } from './components/Profile';
import { Card } from './components/Card';
import { Form } from './components/Form';

import { HomeContainer, HomeContent } from './styles';
import { Loader } from '../../components/Loader';

export function Home() {
  const {
    user,
    issues,
    searchTerm,
    filteredIssues,
    isLoading,
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
            filteredIssues={filteredIssues}
          />
          <HomeContent>
            {filteredIssues?.map((issue) => (
              <Card key={issue.id} issue={issue} />
            ))}
          </HomeContent>{' '}
        </>
      )}
    </HomeContainer>
  );
}
