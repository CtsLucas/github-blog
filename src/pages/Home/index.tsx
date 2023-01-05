import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { HomeContainer, PhotoWrap, Profile, InfoWrap } from './styles';

export function Home() {
  return (
    <HomeContainer>
      <Profile>
        <PhotoWrap>
          <img src="https://www.github.com/CtsLucas.png" alt="" />
        </PhotoWrap>
        <InfoWrap>
          <div className="title">
            <h1>Lucas Cavalcante Silva</h1>
            <Link to="/">
              GitHub <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </Link>
          </div>
          <div className="description">
            <p>
              Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
              viverra massa quam dignissim aenean malesuada suscipit. Nunc,
              volutpat pulvinar vel mass.
            </p>
          </div>
          <div className="details">
            <ul>
              <li>
                <FontAwesomeIcon icon={faGithub} />
                cameronwll
              </li>
              <li>
                <FontAwesomeIcon icon={faBuilding} />
                Rocketseat
              </li>
              <li>
                <FontAwesomeIcon icon={faUserGroup} />
                32 seguidores
              </li>
            </ul>
          </div>
        </InfoWrap>
      </Profile>
    </HomeContainer>
  );
}
