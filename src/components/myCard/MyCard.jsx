import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'

export const MyCard = ({ cardHeader = () => null, cardContent = () => null, cardFooter = () => null, classNames = { card: '', cardHeader: '', cardContent: '', cardFooter: '' } }) => {
  return (
    <Card className={classNames.card}>
      {cardHeader() && <CardHeader className={classNames.cardHeader}>
        {cardHeader()}
      </CardHeader>}
      {cardContent() && <CardContent className={classNames.cardContent}>
        {cardContent()}
      </CardContent>}
      {cardFooter() && <CardFooter className={classNames.cardFooter}>
        {cardFooter()}
      </CardFooter>}
    </Card>
  )
}
