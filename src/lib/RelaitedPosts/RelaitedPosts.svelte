<script lang="ts">
  import { register } from 'swiper/element/bundle'
  import { range } from '../utils/range'
  import type { IPostExtended } from '../api/types/IPostExtended'
  import Post from './components/Post.svelte'
  register()
  export let posts: Promise<IPostExtended[]>
</script>

<section class="py-[100px] bg-second">
  <div class="container">
    {#await posts}
      <swiper-container
        class="animate-pulse"
        spaceBetween="20px"
        slidesPerView="1"
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >
        {#each range(0, 5) as _}
          <swiper-slide class="h-[350px] bg-placeholder rounded-[5px]" />
        {/each}
      </swiper-container>
    {:then posts}
      <h2 class="font-lora text-l mb-[50px] text-text font-bold">Related Posts</h2>
      <swiper-container
        spaceBetween="20px"
        slidesPerView="1"
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >
        {#each posts as post}
          <swiper-slide class="m-h-[350px] h-auto"><Post {post} /> </swiper-slide>
        {/each}
      </swiper-container>
    {/await}
  </div>
</section>
