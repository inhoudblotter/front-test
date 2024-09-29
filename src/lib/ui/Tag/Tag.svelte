<script lang="ts">
  import { cn } from '../../utils/cn'

  export let className: string | undefined = undefined
</script>

<span
  class={cn('rounded-lg uppercase font-roboto text-xs px-[10px] py-[5px]', className)}
>
  <slot />
</span>
