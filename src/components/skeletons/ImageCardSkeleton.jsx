import { Skeleton } from '@/components/ui/skeleton'
import { MyCard } from '../myCard/MyCard'

export const ImageCardSkeleton = () => {
  return (
    <>
      <MyCard
        cardHeader={() => (
          <>
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-5 w-full" />
          </>
        )}
        cardContent={() => (
          <div className="flex flex-col items-center gap-2">
            <Skeleton className="h-48 w-[128px] rounded-xl" />
            <div className="flex flex-col w-full gap-2 overflow-auto min-h-[68px] max-h-[68px]">
              <Skeleton className="h-5 w-[200px]" />
              <Skeleton className="h-10 w-full" />
            </div>
          </div>
        )}
        cardFooter={() => (
          <Skeleton className="h-9 w-full" />
        )}
      />
    </>
  )
}
