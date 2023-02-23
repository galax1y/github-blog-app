import { Link } from 'react-router-dom';
import { faBuilding, faUserGroup, faArrowUpRightFromSquare, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import {
  AvatarFallback,
  AvatarImage,
  AvatarRoot,
  ProfileContainer,
  ProfileDescription,
  ProfileFooter,
  ProfileHeader,
  ProfileInformation
} from './styles';
import { BlogContext } from '@/contexts/BlogContext';

export function Profile() {
  const { user } = useContext(BlogContext)

  return (
    <ProfileContainer>
      <AvatarRoot>
        <AvatarImage src={user.avatarUrl} />
        <AvatarFallback delayMs={600}>
          <FontAwesomeIcon icon={faUserSecret} />
        </AvatarFallback>
      </AvatarRoot>

      <ProfileInformation>
        <ProfileHeader>
          <h1>{user.name}</h1>
          <Link to={`https://github.com/${user.username}`}>
            <span>Github</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} width={18} height={18} />
          </Link>
        </ProfileHeader>

        <ProfileDescription>
          {user.bio ? <p>{user.bio}</p> : null}
        </ProfileDescription>

        <ProfileFooter>
          <label>
            <FontAwesomeIcon icon={faGithub} width={18} height={18} />
            <Link to={`https://github.com/${user.username}`}>
              {user.username}
            </Link>
          </label>
          {user.company ?
            <label>
              <FontAwesomeIcon icon={faBuilding} width={18} height={18} />
              <p>{user.company}</p>
            </label>
            : null}
          <label>
            <FontAwesomeIcon icon={faUserGroup} width={18} height={18} />
            <p>{user.followers + ' seguidores'}</p>
          </label>
        </ProfileFooter>
      </ProfileInformation>

    </ProfileContainer>
  )
}