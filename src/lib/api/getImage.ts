import type { IImage } from '../ui/Image/types/IImage'

export async function getImage() {
  const id = Math.round(Math.random() * 9 + 1)
  const image: IImage = {
    id: id.toString(),
    urls: {
      full: `/images/${id}.webp`,
      regular: `/images/${id}-1080.webp`,
      small: `/images/${id}-400.webp`
    }
  }
  return image
}
