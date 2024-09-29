<script lang="ts">
  import Logo from './components/Logo.svelte'
  import Nav from './components/Nav.svelte'
  import Search from './components/Search.svelte'
  import Sep from './components/Sep.svelte'
  import Social from '../ui/Socials/Social.svelte'
  import Burger from './components/Burger.svelte'
  import { cn } from '../utils/cn'
  import BackBtn from './components/BackBtn.svelte'
  let isNavOpen = false
  const openNav = () => (isNavOpen = true)
  const closeNav = () => (isNavOpen = false)
</script>

<header class="bg-nav absolute top-0 left-0 w-full z-10 min-w-[320px]">
  <div class="container flex items-center gap-17 py-30">
    <Logo className="mr-auto" />
    <Burger className="sm:hidden" onClick={openNav} />
    <div
      class={cn(
        `
      max-sm:fixed
      flex
      max-sm:flex-col
      max-sm:inset-x-0
      max-sm:inset-y-0
      max-sm:bg-footer
      max-sm:p-20
      gap-17
      max-sm:transition
      md:flex-row
      md:items-center
      md:p-0
    `,
        isNavOpen
          ? 'opacity-100 translate-x-0'
          : 'max-sm:opacity-0 max-sm:translate-x-full'
      )}
    >
      <BackBtn className={'self-end sm:hidden'} onClick={closeNav} />
      <Nav />
      <Sep />
      <Social
        iconClassName="
          bg-second
          group-active:bg-second"
        links={[
          { icon: 'facebook', label: 'facebook', href: '#' },
          { icon: 'twitter', label: 'twitter', href: '#' },
          { icon: 'youtube', label: 'youtube', href: '#' },
          { icon: 'pinterest', label: 'pinterest', href: '#' },
          { icon: 'behance', label: 'behance', href: '#' }
        ]}
      />
      <Sep />
      <Search />
    </div>
  </div>
</header>
