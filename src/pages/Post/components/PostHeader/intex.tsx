import { Link } from 'react-router-dom';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { formatDifferenceDate } from '../../../../util/formatDifferenceDate';
import { Issue } from '../../../Home/components/Card';

import { PostHeaderContainer } from './styles';

interface PostHeaderProps {
  issue: Issue;
}

export function PostHeader({ issue }: PostHeaderProps) {
  return (
    <PostHeaderContainer>
      <div className="post-header__header">
        <Link to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          Voltar
        </Link>
        <a href={issue.html_url} target="_blank" rel="noreferrer">
          ver no github
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </div>

      <div className="post-header__content">
        <h1>{issue.title}</h1>
      </div>

      <div className="post-header__footer">
        <div className="post-header__footer__items">
          <span>
            <FontAwesomeIcon icon={faGithub} />
            {issue.user?.login}
          </span>
        </div>
        <div className="post-header__footer__items">
          <span>
            <FontAwesomeIcon icon={faCalendarDay} />
            Há {formatDifferenceDate(issue.updated_at)}
          </span>
        </div>
        <div className="post-header__footer__items">
          <span>
            <FontAwesomeIcon icon={faComment} />
            {issue.comments === 1
              ? `${issue.comments} comentário`
              : `${issue.comments} comentários`}
          </span>
        </div>
      </div>
    </PostHeaderContainer>
  );
}
