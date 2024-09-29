<script lang="ts">
  import type { IImage } from './types/IImage'
  export let image: IImage
  export let alt: string = ''
  export let className: string | undefined = undefined
  const sizes: { width: number; key: keyof typeof image.urls }[] = [
    { width: 1080, key: 'regular' },
    { width: 400, key: 'small' }
  ]
</script>

<picture>
  {#each sizes as size}
    <source media="max-width:{size.width}px" srcset={image.urls[size.key]} />
  {/each}
  <img class={className} src={image.urls.full} {alt} />
</picture>
