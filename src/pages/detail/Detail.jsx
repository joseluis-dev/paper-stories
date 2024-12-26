import { DetailInfoSkeleton } from '@/components/skeletons/DetailInfoSkeleton'
import { useSingleBook } from '@/hooks/useBooks'
import { DetailInfo } from '@/layouts/detailInfo/DetailInfo'
import { useParams } from 'react-router-dom'

export const Detail = () => {
  const { id } = useParams()
  const { book, isLoading } = useSingleBook({ id })
  console.log(isLoading)
  return (
    <>
      {isLoading
        ? <DetailInfoSkeleton />
        : <DetailInfo book={book} />}
    </>
  )
}
