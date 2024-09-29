<script lang="ts">
  import Icon from '../../ui/Icon/Icon.svelte'
  import { cn } from '../../utils/cn'

  export let className: string | undefined = undefined
  export let onClick: () => void
</script>

<button class={cn(className, '')} on:click={onClick}>
  <Icon className="bg-prime" name="arrow" width={20} height={20} />
</button>
