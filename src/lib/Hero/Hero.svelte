<script lang="ts">
  import { register } from 'swiper/element/bundle'
  import Image from '../ui/Image/Image.svelte'
  import type { IPostExtended } from '../api/types/IPostExtended'
  import Tag from '../ui/Tag/Tag.svelte'
  register()
  export let post: Promise<IPostExtended>
</script>

{#await post}
  <div
    class="h-dvh max-h-[600px] min-h-min animate-pulse flex flex-col items-center justify-center gap-[13px]"
  >
    <div class="bg-placeholder rounded-full w-2/5 h-2.5 max-w-[62px]"></div>
    <div class="bg-placeholder rounded-full w-full h-8 max-w-[530px]"></div>
    <div class="bg-placeholder rounded-full w-4/6 h-3 max-w-[420px]"></div>
    <div class="bg-placeholder rounded-full w-2/5 h-2.5 max-w-[133px]"></div>
  </div>
{:then post}
  <div
    class="h-dvh max-h-[600px] min-h-min relative flex flex-col items-center justify-center gap-[13px] pt-[60px] pb-[30px]"
  >
    <Image
      className={`
    absolute
    h-full
    top-0
    left-0
    -z-10
    object-cover
    `}
      image={post.image}
    />
    <span
      class="
    absolute
    block
    h-full
    w-full
    top-0
    left-0
    -z-10
    bg-underline
    opacity-20
    "
    ></span>
    <Tag className="text-descr bg-prime/15 text-prime">fashion</Tag>
    <h1 class="font-lora text-second text-xl max-w-[530px] text-center">{post.title}</h1>
    <p class="font-lora text-m text-second max-w-[420px] text-center">{post.body}</p>
    <span class="font-lora text-m font-bold text-second max-w-[300px] text-center"
      >By {post.username}</span
    >
  </div>
{/await}
