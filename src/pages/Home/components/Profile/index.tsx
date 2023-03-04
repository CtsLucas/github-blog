import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { ProfileAvatar, ProfileContainer, ProfileContent } from './styles';

export interface User {
  name: string;
  avatar_url: string;
  bio: string;
  followers: number;
  company: string;
  login: string;
  html_url: string;
}

interface ProfileProps {
  user: User;
}

export function Profile({ user }: ProfileProps) {
  return (
    <ProfileContainer>
      <ProfileAvatar>
        <img src={user.avatar_url} alt="" />
      </ProfileAvatar>

      <ProfileContent>
        <div className="profile-content__header">
          <h1>{user.name}</h1>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            GitHub <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
        <div className="profile-content__content">
          <p>{user.bio}</p>
        </div>
        <div className="profile-content__footer">
          <div className="profile-content__footer__items">
            <span>
              <FontAwesomeIcon icon={faGithub} />
              {user.login}
            </span>
          </div>
          <div className="profile-content__footer__items">
            <span>
              <FontAwesomeIcon icon={faBuilding} />
              {user.company}
            </span>
          </div>
          <div className="profile-content__footer__items">
            <span>
              <FontAwesomeIcon icon={faUserGroup} />
              {user.followers === 1
                ? `${user.followers} seguidor`
                : `${user.followers} seguidores`}
            </span>
          </div>
        </div>
      </ProfileContent>
    </ProfileContainer>
  );
}
