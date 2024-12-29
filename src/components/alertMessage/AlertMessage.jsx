import { Alert, AlertDescription, AlertTitle } from '../ui/alert'

export const AlertMessage = ({ title = '', description = '', icon = null }) => {
  return (
    <Alert>
      <div className='flex gap-2 items-center'>
        {icon}
        <AlertTitle className='m-0'>{title}</AlertTitle>
      </div>
      <AlertDescription>
        {description}
      </AlertDescription>
    </Alert>
  )
}
