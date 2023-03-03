import { useEffect, useState } from 'react';
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

export function Home() {
  const [user, setUser] = useState<User>({} as User);
  const [issues, setIssues] = useState<Issue[]>([]);

  async function fetchGitHubUser() {
    try {
      const [{ data: userData }, { data: issuesData }] = await axios.all([
        api.get(`/users/${import.meta.env.VITE_API_GITHUB_USER}`),
        api.get(
          `/repos/${import.meta.env.VITE_API_GITHUB_USER}/${
            import.meta.env.VITE_API_GITHUB_REPO
          }/issues`
        ),
      ]);

      setUser(userData);
      setIssues(issuesData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchGitHubUser();
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
            {issues.length === 1
              ? `${issues.length} publicação`
              : `${issues.length} publicações`}
          </span>
        </div>
        <input type="text" placeholder="Buscar conteúdo" />
      </Form>

      <ListCards>
        {issues.map((issue) => (
          <Card key={issue.id} issue={issue} />
        ))}
      </ListCards>
    </HomeContainer>
  );
}
