<style>
</style>

<script lang="ts">
  import Icon from '../../ui/Icon/Icon.svelte'
  import { cn } from '../../utils/cn'
  export let className: string | undefined
</script>

<Icon
  className={cn(
    `
  bg-bg
  focus:outline-none
  focus-visible:bg-accent
  hover:bg-accent
  active:bg-bg
  `,
    className
  )}
  name="logo"
  width={69}
  height={22}
/>
