import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export const Hero = () => {
  return (
    <div className="flex flex-col gap-4 text-center w-full h-full justify-center">
      <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-primary'>Sumergete en un mundo de apasionantes historias.</h1>
      <p className="text-lg md:text-2xl lg:text-3xl"> Descubre de los mejores libros físicos y digitales.</p>
      <img src="/HeroImage.avif" alt="Hero Image" className="bg-cover rounded-md shadow-lg shadow-foreground" />
      <div className="flex w-full max-w-sm items-center justify-center mt-4">
        <Input type="email" placeholder="Email" />
        <Button type="submit">Subscribe</Button>
      </div>
    </div>
  )
}
