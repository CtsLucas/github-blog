import { useHome } from './useHome';

import { Profile } from './components/Profile';
import { Card } from './components/Card';
import { Form } from './components/Form';

import { HomeContainer, HomeContent } from './styles';

export function Home() {
  const { user, issues, searchTerm, filteredIssues, handleChangeSearchTerm } =
    useHome();

  return (
    <HomeContainer>
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
      </HomeContent>
    </HomeContainer>
  );
}
