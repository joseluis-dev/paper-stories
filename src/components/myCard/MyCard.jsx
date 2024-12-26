import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'

export const MyCard = ({ cardHeader = () => null, cardContent = () => null, cardFooter = () => null }) => {
  return (
    <Card>
      <CardHeader>
        {cardHeader()}
      </CardHeader>
      <CardContent>
        {cardContent()}
      </CardContent>
      <CardFooter>
        {cardFooter()}
      </CardFooter>
    </Card>
  )
}
