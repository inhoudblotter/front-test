<script lang="ts">
  import { cn } from '../../utils/cn'

  export let className: string | undefined = undefined
  export let href: string
</script>

<a
  class={cn(
    className,
    `
  font-lora
  text-second
  text-s
  transition
  focus:outline-none
  focus-visible:text-accent
  hover:text-accent
  active:text-second`
  )}
  {href}><slot /></a
>
