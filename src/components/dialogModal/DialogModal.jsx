import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog'
import { Check, X } from 'lucide-react'

export const DialogModal = ({ open, onOpenChange, success }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {success ? <Check size={20} color='green'/> : <X size={20} color='red'/>} {success ? 'Transacción Exitosa' : 'Error'}
          </DialogTitle>
          <DialogDescription>
            {success
              ? <>
                <span className='block'>¡Gracias por tu compra! </span>
                <span>En breve recibirás un correo con los detalles de tu pedido.</span>
              </> : 'Lo sentimos, ha ocurrido un error. Por favor, intenta nuevamente.'}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button type="submit" onClick={() => onOpenChange(false)}>Aceptar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
