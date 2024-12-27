import { useState, useEffect } from 'react'
import { Skeleton } from '../ui/skeleton'

export const ImageLoader = ({ src, alt, className }) => {
  const [imgLoaded, setImgLoaded] = useState(false)
  // console.log(src)
  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => setImgLoaded(true)
    img.onerror = () => setImgLoaded(false)
  }, [src])

  return (
    <>
      {imgLoaded ? <img
        src={src}
        alt={alt}
        className={className}
      />
        : <Skeleton className={className} />}
    </>
  )
}