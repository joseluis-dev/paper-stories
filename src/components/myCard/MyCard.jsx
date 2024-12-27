import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'

export const MyCard = ({ cardHeader = () => null, cardContent = () => null, cardFooter = () => null, classNames = { card: '', cardHeader: '', cardContent: '', cardFooter: '' } }) => {
  return (
    <Card className={classNames.card}>
      <CardHeader className={classNames.cardHeader}>
        {cardHeader()}
      </CardHeader>
      <CardContent className={classNames.cardContent}>
        {cardContent()}
      </CardContent>
      <CardFooter className={classNames.cardFooter}>
        {cardFooter()}
      </CardFooter>
    </Card>
  )
}
