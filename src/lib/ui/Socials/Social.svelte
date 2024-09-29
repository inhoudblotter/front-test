<script lang="ts">
  import { cn } from '../../utils/cn'
  import Icon from '../Icon/Icon.svelte'
  import type { ISocialLink } from './types/ISocialLink'

  export let links: ISocialLink[]
  export let iconClassName: string | undefined = undefined
</script>

<ul class="list-none p-0 m-0 flex gap-17">
  {#each links as link}
    <li>
      <a
        class="underline-none group focus:outline-none"
        href={link.href}
        aria-label={link.label}
      >
        <Icon
          className={cn(
            iconClassName,
            `
        transition
        group-focus-visible:bg-accent
        group-hover:bg-accent
        `
          )}
          name={link.icon}
          width={20}
          height={20}
        />
      </a>
    </li>
  {/each}
</ul>
