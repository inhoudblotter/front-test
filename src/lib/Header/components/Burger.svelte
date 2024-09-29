<script lang="ts">
  import { cn } from '../../utils/cn'

  export let onClick: () => void
  export let className: string | undefined = undefined
</script>

<button class={cn(className, 'relative w-[20px] h-[20px]')} on:click={onClick}>
  <span class="bg-prime absolute left-0 right-0 top-0 h-[1px] rounded-full"></span>
  <span
    class="bg-prime absolute left-0 right-0 top-2/4 translate-y-[-50%] h-[1px] rounded-full"
  ></span>
  <span class="bg-prime absolute left-0 right-0 bottom-0 h-[1px] rounded-full"></span>
</button>
