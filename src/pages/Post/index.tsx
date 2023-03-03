import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { formatDifferenceDate } from '../../util/formatDifferenceDate';
import { api } from '../../lib/axios';
import { Issue } from '../Home/components/Card';
import { PostContent } from './components/PostContent';

import { PostContainer, PostHeader } from './styles';

export function Post() {
  const { id: issueId } = useParams();

  const [issue, setIssue] = useState<Issue>({} as Issue);

  async function fetchData() {
    try {
      const { data: issueData } = await api.get(
        `/repos/${import.meta.env.VITE_API_GITHUB_USER}/${
          import.meta.env.VITE_API_GITHUB_REPO
        }/issues/${issueId}`
      );
      setIssue(issueData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <PostContainer>
      <PostHeader>
        <div className="actions">
          <Link to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            Voltar
          </Link>
          <a href={issue.html_url} target="_blank" rel="noreferrer">
            ver no github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>

        <div className="title">
          <h1>{issue.title}</h1>
        </div>

        <div className="details">
          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              {issue.user?.login}
            </li>
            <li>
              <FontAwesomeIcon icon={faCalendarDay} />
              Há {formatDifferenceDate(issue.updated_at)}
            </li>
            <li>
              <FontAwesomeIcon icon={faComment} />
              {issue.comments === 1
                ? `${issue.comments} comentário`
                : `${issue.comments} comentários`}
            </li>
          </ul>
        </div>
      </PostHeader>

      <PostContent content={issue.body} />
    </PostContainer>
  );
}
