import { Label } from '@/components/ui/label'

export const SectionTitle = ({ title = '', icon = null }) => {
  return (
    <div className='border-b-[1px] border-gray-400 py-2 flex items-center gap-2'>
      {icon && <span>{icon}</span>}
      {title &&
      <Label htmlFor={title} className='text-2xl font-bold'>
        {title}
      </Label>}
    </div>
  )
}
