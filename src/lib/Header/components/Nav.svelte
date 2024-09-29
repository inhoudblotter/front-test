<style>
  a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -6px;
    height: 2px;
    width: 100%;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
</style>

<script lang="ts">
  import { cn } from '../../utils/cn'
  export let className: string | undefined = undefined
  const navItems: { label: string; href: string }[] = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Articles', href: '#' },
    { label: 'Contact Us', href: '#' }
  ]
</script>

<nav class={cn(className, 'flex')}>
  <ul class="flex max-sm:flex-col list-none gap-25 sm:items-center">
    {#each navItems as item}
      <li class="flex">
        <a
          href={item.href}
          class={`
      text-prime
      text-s
      leading-none
      font-bold
      relative
      transition
      no-underline
      after:bg-accent
      focus:outline-none
      focus-visible:after:opacity-100
      hover:after:opacity-100
      active:after:opacity-100
      active:text-accent
      `}>{item.label}</a
        >
      </li>
    {/each}
  </ul>
</nav>
