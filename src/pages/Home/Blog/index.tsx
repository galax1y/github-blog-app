import { BlogContext } from '@/contexts/BlogContext';
import { formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useContext, useState } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { Link } from 'react-router-dom';
import { SearchBar } from './SearchBar';
import { BlogCard, BlogCardContent, BlogCardHeader, BlogContainer, BlogMarginProvider, NoContent } from './styles';

export function Blog() {
  const { issues } = useContext(BlogContext)
  const [filter, setFilter] = useState<string>('')

  var filteredIssues = issues

  function applyFilter(query: string = '') {
    query = query.toLowerCase()
    setFilter(query)
  }

  if (issues) {
    filteredIssues = issues.filter((issue) =>
      issue.content.toLowerCase().includes(filter) ||
      issue.title.toLowerCase().includes(filter))
  }

  return (
    <BlogMarginProvider>
      <SearchBar filterFunction={applyFilter} issueAmount={filteredIssues.length} />
      <BlogContainer>
        {filteredIssues.map((issue) => {
          return <Link
            key={issue.issueId}
            to={`/${issue.author}/${issue.repositoryName}/issues/${issue.issueId}`}
          >

            <BlogCard >
              <BlogCardHeader>
                <h2>{issue.title}</h2>
                <span>{issue ? formatDistance(new Date(issue.createdAt), new Date(), {
                  addSuffix: true,
                  locale: ptBR,
                }
                ) : null}</span>
              </BlogCardHeader>

              <BlogCardContent>
                <ReactMarkdown className='MarkdownContent' disallowedElements={['a']}>
                  {issue.content}
                </ReactMarkdown>
              </BlogCardContent>
            </BlogCard>
          </Link>
        })}

      </BlogContainer>
      {filteredIssues.length === 0 ?
        <NoContent>
          <Link to={'/'}>
            <p>Esse repositório não contém nenhum Issue</p>
            Clique aqui para escolher outro!
          </Link>
        </NoContent> : null
      }
    </BlogMarginProvider >
  )
}