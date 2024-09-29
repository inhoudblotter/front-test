<script lang="ts">
  import Icon from '../../ui/Icon/Icon.svelte'
  import { cn } from '../../utils/cn'

  export let className: string | undefined = undefined
</script>

<Icon
  className={cn(
    `
  bg-second
  focus:outline-none
  focus-visible:bg-accent
  hover:bg-accent
  active:bg-bg
  `,
    className
  )}
  name={'search'}
  width={20}
  height={20}
/>
