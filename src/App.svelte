<style>
</style>

<script lang="ts">
  import Footer from './lib/Footer/Footer.svelte'
  import Header from './lib/Header/Header.svelte'
  import Hero from './lib/Hero/Hero.svelte'
  import Post from './lib/Post/Post.svelte'
  import RelaitedPosts from './lib/RelaitedPosts/RelaitedPosts.svelte'
  import { getPost } from './lib/api/getPost'
  const params = new URLSearchParams(window.location.search)
  let id = params.has('id') && Number(params.get('id'))
  if (!id || isNaN(id) || id > 100 || id < 1) id = Math.round(99 * Math.random() + 1)

  const post = getPost(id)
  const posts = Promise.all(
    [...new Array(5)].map(() => getPost(Math.round(100 * Math.random())))
  )
</script>

<Header />
<main>
  <Hero {post} />
  <Post {post} />
  <RelaitedPosts {posts} />
</main>
<Footer />
