import { Link, useParams } from 'react-router-dom'
import { useEffect, useContext, useState } from 'react'
import { BlogContext } from '@/contexts/BlogContext'
import { IssueContainer, IssueContentContainer, IssueFooter, IssueHeaderContainer, IssueInformation, IssueNavigation } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faCalendarDay, faCaretLeft, faCaretRight, faChevronLeft, faComment } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

interface IssueProps {
  title: string
  content: string
  createdAt: string
  commentAmount: number
}

export function Issue() {
  const [issue, setIssue] = useState<IssueProps>()
  const { username, repo, issueNumber } = useParams()
  const issueId = Number(issueNumber)
  const { fetchIssue } = useContext(BlogContext)

  useEffect(() => {
    if (username && repo && issueNumber) {
      fetchIssue({
        username,
        repo,
        issueNumber: issueId
      }).then(data => {
        const thisIssue = {
          title: data.title,
          content: data.content,
          createdAt: data.createdAt,
          commentAmount: data.commentAmount,
        }
        setIssue(thisIssue)
      })
    } else console.log('Failed fetching this specific issue')
  }, [])

  return (
    <IssueContainer>
      <IssueHeaderContainer>
        <IssueNavigation>
          <Link to={`/${username}/${repo}`}>
            <FontAwesomeIcon icon={faChevronLeft} />
            Voltar
          </Link>
          <Link to={`https://github.com/${username}/${repo}/issues/${issueId}`}>
            Ver no Github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </IssueNavigation>

        <IssueInformation>
          <h1>{issue?.title}</h1>
        </IssueInformation>

        <IssueFooter>
          <label>
            <FontAwesomeIcon icon={faGithub} width={18} height={18} />
            <Link to={`/${username}`}>{username}</Link>
          </label>

          <label>
            <FontAwesomeIcon icon={faCalendarDay} width={18} height={18} />
            <span>
              {issue ? formatDistance(new Date(issue.createdAt), new Date(), {
                addSuffix: true,
                locale: ptBR,
              }
              ) : null}
            </span>
          </label>

          <label>
            <FontAwesomeIcon icon={faComment} width={18} height={18} />
            <span>{issue?.commentAmount} comentários</span>
          </label>
        </IssueFooter>
      </IssueHeaderContainer>

      <IssueContentContainer>
        <ReactMarkdown
          children={issue ? issue.content : ''}
          components={{
            code({ node, inline, className, children, style, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, '')}
                  style={oneDark}
                  language={match[1]}
                  PreTag="pre"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            }
          }}
        />

      </IssueContentContainer>
    </IssueContainer>)
}