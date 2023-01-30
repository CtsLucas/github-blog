import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { PostContainer, PostHeader } from './styles';

export function Post() {
  return (
    <PostContainer>
      <PostHeader>
        <div className='actions'>
          <a href="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            Voltar
          </a>
          <a href="/">
            ver no github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>

        <div className="title">
          <h1>JavaScript data types and data structures</h1>
        </div>

        <div className="details">
          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub} />
                cameronwll
            </li>
            <li>
              <FontAwesomeIcon icon={faCalendarDay} />
                Há um dia
            </li>
            <li>
              <FontAwesomeIcon icon={faComment} />
                5 comentários
            </li>
          </ul>
        </div>
      </PostHeader>
    </PostContainer>
  );
}
