import { AlertMessage } from '@/components/alertMessage/AlertMessage'
import { Spinner } from '@/components/ui/spinner'
import { useBooks } from '@/hooks/useBooks'
import { ItemList } from '@/layouts/itemList/ItemList'
import { X } from 'lucide-react'
import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

export const SearchHome = () => {
  const location = useLocation()
  const query = new URLSearchParams(location.search)
  const filter = query.get('filter')
  const { books, isLoading } = useBooks({ query: filter })

  const content = useMemo(() => {
    if (isLoading) return (
      <div className='flex justify-center items-center h-full w-full'>
        <Spinner size='xl'/>
      </div>
    )
    if (!books[filter]) return (
      <div className='flex justify-center items-center h-full'>
        <div className="flex content-fit">
          <AlertMessage title='Ups. !!' description='No se han encontrado libros, inténtalo nuevamente.' icon={<X className="h-5 w-5 text-red-500" />}/>
        </div>
      </div>
    )
    return <ItemList items={books[filter]} />
  }, [books, filter, isLoading])
  return (
    <div className='h-full'>
      {content}
    </div>
  )
}
