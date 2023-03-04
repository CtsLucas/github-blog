import { useDeferredValue, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { api } from '../../lib/axios';

import { Card, Issue } from './components/Card';

import {
  HomeContainer,
  PhotoWrap,
  Profile,
  InfoWrap,
  Form,
  ListCards,
} from './styles';

export interface User {
  name: string;
  avatar_url: string;
  bio: string;
  followers: number;
  company: string;
  login: string;
  html_url: string;
}

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
      <Profile>
        <PhotoWrap>
          <img src={user.avatar_url} alt="" />
        </PhotoWrap>
        <InfoWrap>
          <div className="title">
            <h1>{user.name}</h1>
            {/* TODO: Create Link component for handle external and internal links */}
            <a href={user.html_url} target="_blank" rel="noreferrer">
              GitHub <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
          <div className="description">
            <p>{user.bio}</p>
          </div>
          <div className="details">
            <ul>
              <li>
                <FontAwesomeIcon icon={faGithub} />
                {user.login}
              </li>
              <li>
                <FontAwesomeIcon icon={faBuilding} />
                {user.company}
              </li>
              <li>
                <FontAwesomeIcon icon={faUserGroup} />
                {user.followers === 1
                  ? `${user.followers} seguidor`
                  : `${user.followers} seguidores`}
              </li>
            </ul>
          </div>
        </InfoWrap>
      </Profile>

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
