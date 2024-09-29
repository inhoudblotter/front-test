<script lang="ts">
  import Social from '../ui/Socials/Social.svelte'
  import type { ISocialLink } from '../ui/Socials/types/ISocialLink'
  import GroupTitle from './components/GroupTitle.svelte'
  import Link from './components/Link.svelte'
  import Underline from './components/Underline.svelte'
  const nav: { href: string; label: string }[] = [
    { href: '#', label: 'About' },
    { href: '#', label: 'Partners' },
    { href: '#', label: 'Job Opportunities' },
    { href: '#', label: 'Advertise' },
    { href: '#', label: 'Membership' }
  ]
  const socialLinks: ISocialLink[] = [
    { icon: 'facebook', label: 'facebook', href: '#' },
    { icon: 'twitter', label: 'twitter', href: '#' },
    { icon: 'youtube', label: 'youtube', href: '#' },
    { icon: 'pinterest', label: 'pinterest', href: '#' },
    { icon: 'behance', label: 'behance', href: '#' }
  ]
</script>

<footer>
  <div class="bg-footer">
    <div
      class="container py-[106px] grid md:grid-cols-four grid-cols-two gap-[20px] justify-items-start"
    >
      <div class="flex flex-col">
        <GroupTitle>Contact the Publisher</GroupTitle>
        <Link className="mb-[18px]" href="mailto:mike@runo.com">mike@runo.com</Link>
        <Link href="tel:+944450904505">+944 450 904 505</Link>
      </div>
      <div>
        <GroupTitle>Explorate</GroupTitle>
        <ul class="flex flex-col gap-[18px]">
          {#each nav as item}
            <li><Link href={item.href}>{item.label}</Link></li>
          {/each}
        </ul>
      </div>
      <div>
        <GroupTitle>Headquarter</GroupTitle>
        <address class="font-lora text-second text-s w-[114px] not-italic">
          191 Middleville Road, NY 1001, Sydney Australia
        </address>
      </div>
      <div>
        <GroupTitle>Connections</GroupTitle>
        <Social iconClassName={'bg-prime group-active:bg-prime'} links={socialLinks} />
      </div>
    </div>
  </div>
  <Underline />
</footer>
