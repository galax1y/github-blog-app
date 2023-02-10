import { IndexContainer, TabsContent, TabsList, TabsRoot, TabsTrigger } from './styles';
import { faFaceSmileBeam, faFaceSadCry, faFaceMeh, faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useForm } from 'react-hook-form';
import { useState, useEffect, useContext } from 'react'
import { api } from '@/lib/axios';
import { Link } from 'react-router-dom';
import { BlogContext } from '@/contexts/BlogContext';

export function Index() {
  const { register, handleSubmit, watch } = useForm()
  const [isValidUsername, setIsValidUsername] = useState<boolean>(false)
  const [isValidRepository, setIsValidRepository] = useState<boolean>(false)
  const { fetchUser } = useContext(BlogContext)

  var howValid
  if (isValidUsername === false && isValidRepository === false) howValid = 'invalid'
  else if (isValidUsername !== isValidRepository) howValid = 'half-valid'
  else if (isValidUsername === true && isValidRepository === true) howValid = 'valid'

  const username = watch('username')
  const repository = watch('repository')

  useEffect(() => {
    setIsValidRepository(false)
  }, [repository])

  useEffect(() => {
    setIsValidUsername(false)
  }, [username])

  async function searchGithubForUsername() {
    await api.get(`/users/${username}`)
      .then((response) => setIsValidUsername(true))
      .catch(error => setIsValidUsername(false))
  }

  async function searchGithubProfileForRepo() {
    await api.get(`repos/${username}/${repository}`)
      .then(() => setIsValidRepository(true))
      .catch(() => setIsValidRepository(false))
  }

  async function userSubmitInformation() {
    if (username.length > 3) {
      searchGithubForUsername()
    }
    if (repository.length > 3) {
      searchGithubProfileForRepo()
    }
  }

  return (
    <IndexContainer>
      <TabsRoot defaultValue='user'>
        <TabsList>
          <TabsTrigger value='user'>
            User
          </TabsTrigger>
        </TabsList>
        <form onSubmit={handleSubmit(userSubmitInformation)}>
          <TabsContent value='user'>
            <fieldset>
              <label htmlFor="name">
                <FontAwesomeIcon icon={faGithub} />
                Github username:
              </label>
              <input type="text"
                {...register('username')}
                placeholder="galax1y"
                id='name' />
            </fieldset>
            <button className='ValidationButton'>
              {isValidUsername ? 'Username válido' : 'Username Inválido'}
              {howValid === 'valid' && <FontAwesomeIcon icon={faFaceSmileBeam} />}
              {howValid === 'half-valid' && <FontAwesomeIcon icon={faFaceMeh} />}
              {howValid === 'invalid' && <FontAwesomeIcon icon={faFaceSadCry} />}
              {isValidRepository ? 'Repositório válido' : 'Repositório Inválido'}
            </button>

            <fieldset>
              <label htmlFor="repository">
                <FontAwesomeIcon icon={faDatabase} />
                Repository name:
              </label>
              <input type="text" placeholder='github-blog' id='repository' {...register('repository')} />
            </fieldset>

            <button
              className='RedirectButton'
              disabled={!(howValid === 'valid')}>
              <Link to={`/${username}/${repository}`}>
                Next !
              </Link>
            </button>
          </TabsContent>
        </form>
      </TabsRoot>
    </IndexContainer >
  )
}