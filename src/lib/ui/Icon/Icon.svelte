<style>
  .icon {
    display: block;
    mask: var(--icon) no-repeat;
  }
</style>

<script lang="ts">
  import { cn } from '../../utils/cn'
  import type { TIcon } from './types/TIcon'
  export let name: TIcon
  export let className: string | undefined = undefined
  export let width: number
  export let height: number
</script>

<span
  class={cn(className, 'icon')}
  style={`--icon: url(/icons/${name}.svg); width:${width}px; height:${height}px;`}
/>
