<script lang="ts">
  import type { IPostExtended } from '../../../api/types/IPostExtended'
  import { range } from '../../../utils/range'
  import Profile from './components/Profile.svelte'
  import Tag from '../../../ui/Tag/Tag.svelte'
  import Social from '../../../ui/Socials/Social.svelte'
  import type { ISocialLink } from '../../../ui/Socials/types/ISocialLink'
  export let post: Promise<IPostExtended>
  const tags = ['ADVENTURE', 'PHOTO', 'DESIGN']
  const avatar = '/images/avatar.jpg'
  const socialLinks: ISocialLink[] = [
    { icon: 'facebook', label: 'facebook', href: '#' },
    { icon: 'twitter', label: 'twitter', href: '#' },
    { icon: 'pinterest', label: 'pinterest', href: '#' },
    { icon: 'behance', label: 'behance', href: '#' }
  ]
</script>

{#await post}
  <div class="grid lg:grid-cols-post gap-[50px] animate-pulse grid-cols-[1fr]">
    <div class="lg:col-start-2 flex gap-[13px] col-start-1">
      {#each range(0, 3) as _}
        <div class="h-3 bg-placeholder w-[54px]"></div>
      {/each}
    </div>
    <div class="lg:col-start-2 col-start-1 bg-sep h-[0.5px] w-full"></div>
    <div class="lg:col-start-2 col-start-1 flex items-center">
      <div class="flex max-w-[200px] gap-[17px] items-center mr-auto">
        <div class="bg-placeholder rounded-full w-[50px] h-[50px]"></div>
        <div class="flex flex-col grow gap-[3px] w-[130px]">
          <div class="bg-placeholder h-3 w-full rounded-full"></div>
          <div class="bg-placeholder h-3 w-9/12 rounded-full"></div>
        </div>
      </div>
      <div class="flex gap-[10px]">
        {#each range(0, 4) as _}
          <div class="bg-placeholder rounded-full w-[20px] h-[20px]"></div>
        {/each}
      </div>
    </div>
  </div>
{:then post}
  <div class="grid lg:grid-cols-post gap-[50px] grid-cols-[1fr]">
    <div class="lg:col-start-2 col-start-1 flex gap-[13px]">
      {#each tags as tag}
        <Tag className="text-descr border-solid border">{tag}</Tag>
      {/each}
    </div>
    <div class="lg:col-start-2 col-start-1 bg-sep h-[0.5px] w-full"></div>
    <div class="lg:col-start-2 col-start-1 flex items-center">
      <Profile username={post.username} {avatar} />
      <Social links={socialLinks} iconClassName="bg-text group-active:bg-text" />
    </div>
  </div>
{/await}
