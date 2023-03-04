import { useDeferredValue, useEffect, useMemo, useState } from 'react';
import axios from 'axios';

import { api } from '../../lib/axios';

import { Card, Issue } from './components/Card';

import { HomeContainer, Form, ListCards } from './styles';
import { Profile, User } from './components/Profile';

interface Issues {
  total_count: number;
  incomplete_results: boolean;
  items: Issue[];
}

export function Home() {
  const [user, setUser] = useState<User>({} as User);
  const [issues, setIssues] = useState<Issues>({} as Issues);
  const [searchTerm, setSearchTerm] = useState('');

  const deferredSearchTerm = useDeferredValue(searchTerm);

  const filteredIssues = useMemo(
    () =>
      issues?.items?.filter((issue) =>
        issue.title.toLowerCase().includes(deferredSearchTerm.toLowerCase())
      ),
    [issues, deferredSearchTerm]
  );

  async function fetchGitHubData() {
    try {
      const [{ data: userData }, { data: issuesData }] = await axios.all([
        api.get(`/users/${import.meta.env.VITE_API_GITHUB_USER}`),
        api.get(
          `/search/issues?q=+label:published+repo:${
            import.meta.env.VITE_API_GITHUB_USER
          }/${import.meta.env.VITE_API_GITHUB_REPO}`
        ),
      ]);

      setUser(userData);
      setIssues(issuesData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchGitHubData();
  }, []);

  return (
    <HomeContainer>
      <Profile user={user} />
      <Form>
        <div className="header">
          <strong>Publicações</strong>
          <span>
            {filteredIssues?.length === 1
              ? `${issues.total_count} publicação`
              : `${issues.total_count} publicações`}
          </span>
        </div>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form>

      <ListCards>
        {filteredIssues?.map((issue) => (
          <Card key={issue.id} issue={issue} />
        ))}
      </ListCards>
    </HomeContainer>
  );
}
