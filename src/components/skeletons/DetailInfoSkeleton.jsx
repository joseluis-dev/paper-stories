import { MyCard } from '@/components/myCard/MyCard'
import { Skeleton } from '@/components/ui/skeleton'

export const DetailInfoSkeleton = () => {
  return (
    <div className='flex flex-col h-full gap-2 justify-center items-center'>
      <div className="flex h-full gap-4 items-center w-full max-w-[483px] md:max-w-full">
        <div className="flex-col hidden md:flex gap-2 h-full w-full min-w-[269px] max-w-[269px] justify-center">
          <Skeleton className="h-[400px] w-full" />
          <Skeleton className="h-6 w-[150px] mt-4" />
          <Skeleton className="h-6 w-full" />
        </div>
        <MyCard
          cardHeader={() => (
            <div className='flex flex-col gap-2 w-full md:min-w-[430px]'>
              <Skeleton className="h-16 w-full"/>
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-[50%]" />
              <Skeleton className="h-5 w-[50%]" />
            </div>
          )}
          cardContent={() => (
            <>
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-[350px] w-full" />
            </>
          )}
          cardFooter={() => (
            <Skeleton className="h-9 w-full" />
          )}
        />
      </div>
    </div>
  )
}
