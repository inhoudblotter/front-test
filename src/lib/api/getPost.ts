import { getImage } from './getImage'
import type { IPost } from './types/IPost'
import type { IUser } from './types/IUser'

export async function getPost(id: number) {
  let res = await fetch(`${import.meta.env.VITE_POSTS_API}/posts/${id}`, {
    headers: {
      'Accept-type': 'application/json'
    }
  })
  const data = (await res.json()) as IPost
  res = await fetch(`${import.meta.env.VITE_POSTS_API}/users/${data.userId}`)
  const image = await getImage()
  return {
    ...data,
    username: ((await res.json()) as IUser).name,
    image
  }
}
