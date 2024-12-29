import * as React from 'react'
import { cn } from '@/lib/utils'

const Spinner = React.forwardRef(
  ({ className, size = 'md', ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="status"
        className={cn(
          'inline-block animate-spin rounded-full border-2 border-current border-t-transparent text-primary',
          {
            'h-4 w-4 border-2': size === 'sm',
            'h-6 w-6 border-2': size === 'md',
            'h-8 w-8 border-2': size === 'lg',
            'h-10 w-10 border-2': size === 'xl',
          },
          className
        )}
        {...props}
      >
        <span className="sr-only">Cargando...</span>
      </div>
    )
  }
)
Spinner.displayName = 'Spinner'

export { Spinner }

