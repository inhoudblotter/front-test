import type { IImage } from '../../ui/Image/types/IImage'
import type { IPost } from './IPost'

export type IPostExtended = IPost & { username: string; image: IImage }
