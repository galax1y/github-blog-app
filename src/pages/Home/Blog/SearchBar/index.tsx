import { BlogContext } from '@/contexts/BlogContext';
import { useForm } from 'react-hook-form';
import { useContext, useEffect } from 'react'
import { SearchContainer, SearchInput, SearchHeader, SearchForm } from './styles';

export function SearchBar({ filterFunction, issueAmount }: any) {
  const {
    register,
    watch,
    handleSubmit
  } = useForm()

  const { issues } = useContext(BlogContext)
  const query = watch('search-issue')

  useEffect(() => {
    filterFunction(query)
  }, [query])

  function preventSubmit(event: any) {
    if (event.code === 'Enter') event.preventDefault()
  }

  return (
    <SearchContainer>
      <SearchHeader>
        <h2>Publicações</h2>
        <span>{issueAmount} publicações</span>
      </SearchHeader>

      <SearchForm>
        <SearchInput
          placeholder='Buscar conteúdo'
          onKeyDown={preventSubmit}
          {...register('search-issue')}
        />
      </SearchForm>

    </SearchContainer>
  )
}