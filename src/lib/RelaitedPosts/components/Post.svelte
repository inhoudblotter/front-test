<script lang="ts">
  import type { IPostExtended } from '../../api/types/IPostExtended'
  import Tag from '../../ui/Tag/Tag.svelte'
  export let post: IPostExtended
  const tag = 'fashion'
  const date = new Date()
</script>

<article
  class="relative h-full pt-[152px] px-[40px] pb-[42px] bg-cover flex gap-[15px] flex-col rounded-[5px] overflow-hidden"
  style="background-image: url('{post.image.urls.regular}'"
>
  <!-- svelte-ignore a11y-missing-content -->
  <a class="absolute bg-text/30 inset-x-0 inset-y-0" href={`/?id=${post.id}`}></a>
  <Tag
    className="absolute z-10 top-[20px] right-[20px] text-prime bg-prime bg-opacity-[0.15]"
    >{tag}</Tag
  >
  <time class="text-lora text-s text-second" datetime={date.toISOString()}
    >{date.toLocaleDateString('ru')}</time
  >
  <h3 class="text-lora text-m text-prime font-bold">{post.title}</h3>
  <p class="text-lora text-s text-second">{post.body}</p>
</article>
