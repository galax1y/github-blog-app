import { api } from '@/lib/axios'
import { createContext, ReactNode, useState } from 'react'

interface DataFetchingProps {
  username: string,
  repo: string,
  issueNumber?: number,
  query?: string
}

interface User {
  name: string
  username: string
  bio: string
  followers: number
  avatarUrl: string
  company: string
}

interface Issue {
  issueId: number
  title: string
  author: string
  content: string
  createdAt: string
  commentAmount: number
  repositoryName: string
}

type BlogContextType = {
  user: User
  issues: Issue[]
  fetchUser: ({ username, repo }: DataFetchingProps) => Promise<void> // seta state no contexto
  fetchIssues: ({ username, repo, query }: DataFetchingProps) => Promise<void> // seta state no contexto
  fetchIssue: ({ username, repo, issueNumber }: DataFetchingProps) => Promise<Issue> // retorna issue
}

export const BlogContext = createContext<BlogContextType>({} as BlogContextType)

interface BlogProviderProps {
  children: ReactNode
}

export function BlogProvider({ children }: BlogProviderProps) {

  const [user, setUser] = useState<User>({
    name: '',
    avatarUrl: '',
    bio: '',
    company: '',
    followers: 32,
    username: '',
  })
  const [issues, setIssues] = useState<Issue[]>([])

  async function fetchIssues({ username, repo }: DataFetchingProps): Promise<void> {
    const response = await api.get(`/search/issues`, {
      params: {
        q: `repo:${username}/${repo}`
      }
    })

    const { items } = response.data

    const fetchedIssues: Issue[] = items.map((issue: any) => {
      const { body, user, comments, created_at, title, number } = issue

      const issueItem: Issue = {
        author: user.login,
        commentAmount: comments,
        content: body,
        createdAt: created_at,
        issueId: number,
        title: title,
        repositoryName: repo
      }

      return issueItem
    })

    setIssues(fetchedIssues)
  }

  async function fetchUser({ username }: DataFetchingProps) {
    const response = await api.get(`/users/${username}`)
    const { avatar_url, bio, company, followers, name, login } = response.data

    const fetchedUser: User = {
      name,
      avatarUrl: avatar_url,
      bio,
      company,
      followers,
      username: login,
    }

    setUser(fetchedUser)
  }

  async function fetchIssue({ username, repo, issueNumber }: DataFetchingProps): Promise<Issue> {
    const response = await api.get(`/repos/${username}/${repo}/issues/${issueNumber}`)
    const { user, comments, body, created_at, number, title } = response.data

    const fetchedIssue: Issue = {
      author: user.login,
      commentAmount: comments,
      content: body,
      createdAt: created_at,
      issueId: number,
      title: title,
      repositoryName: repo
    }

    return fetchedIssue
  }

  return (
    <BlogContext.Provider value={{ user, issues, fetchUser, fetchIssues, fetchIssue }}>
      {children}
    </BlogContext.Provider>
  )
}
