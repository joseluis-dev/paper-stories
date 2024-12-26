import { MyCarousel } from '@/components/myCarousel/MyCarousel'
import { MySkeleton } from '@/components/mySkeleton/MySkeleton'
import { SectionTitle } from '@/components/sectionTitle/SectionTitle'
import { CarouselItem } from '@/components/ui/carousel'
import { useBooks } from '@/hooks/useBooks'
import { BookCard } from '@/layouts/bookCard/BookCard'

export const BookSection = ({ title = '', icon = '', bookType = '' }) => {
  const { books, isLoading } = useBooks({ query: bookType })
  // console.log(!books[bookType])
  return (
    <div className='flex flex-col gap-4'>
      <SectionTitle title={title} icon={icon} />
      <div className="flex justify-center">
        <MyCarousel items={books[bookType]}>
          {isLoading
            ? (_, index) => (
              <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-[45%]">
                <MySkeleton />
              </CarouselItem>
            )
            : ({ id, title, authors, description, image, date, price, rate }) => (
              <CarouselItem key={id} className="pl-1 md:basis-1/2 lg:basis-[45%]">
                <BookCard authors={authors} date={date} description={description} image={image} price={price} rate={rate} title={title} />
              </CarouselItem>
            )}
        </MyCarousel>
      </div>
    </div>
  )
}
