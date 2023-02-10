import { useParams } from 'react-router-dom'
import { Blog } from './Blog'
import { Profile } from './Profile'
import { HomeContainer } from './styles'
import { useContext, useEffect } from 'react'
import { BlogContext } from '@/contexts/BlogContext'

export function Home() {
  const { username, repo } = useParams()
  const { fetchUser, fetchIssues } = useContext(BlogContext)


  useEffect(() => {
    if (username && repo) {
      fetchUser({ username, repo })
      fetchIssues({ username, repo })
    } else {
      console.log('Failed fetching user and/or repository and/or issues')
    }
  }, [])

  return (
    <HomeContainer>
      <Profile />
      <Blog />
    </HomeContainer>
  )
}