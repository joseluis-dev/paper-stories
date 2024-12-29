import { useMemo } from 'react'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card'

export const MyHoverCard = ({ trigger = null, children = null }) => {
  const content = useMemo(() => (
    <HoverCard openDelay={300} closeDelay={300}>
      {trigger && <HoverCardTrigger asChild onClick={(e) => e.preventDefault()}>
        {trigger}
      </HoverCardTrigger>}
      <HoverCardContent>
        {children}
      </HoverCardContent>
    </HoverCard>
  ), [children, trigger])
  return (
    <>{content}</>
  )
}
