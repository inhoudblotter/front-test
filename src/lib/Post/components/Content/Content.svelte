<script lang="ts">
  import type { IPostExtended } from '../../../api/types/IPostExtended'
  import Info from './components/Info.svelte'
  import Paragraph from './components/Paragraph.svelte'
  import Quote from './components/Quote.svelte'
  import { range } from '../../../utils/range'
  export let post: Promise<IPostExtended>
</script>

{#await post}
  <div
    class="
  relative
  grid
  lg:grid-cols-post
  gap-[50px]
  animate-pulse
  mb-[50px]
  grid-cols-[1fr]
  "
  >
    <div class="bg-placeholder h-3 w-[170px] rounded-full"></div>
    <div class="flex flex-col gap-[10px] w-full">
      {#each range(0, 2) as _}
        <div class="w-full rounded-full bg-placeholder h-3"></div>
      {/each}
      {#each range(0, 2) as _}
        <div class="w-full rounded-full bg-placeholder h-3 w-9/12"></div>
      {/each}
      {#each range(0, 2) as _}
        <div class="w-full rounded-full bg-placeholder h-3 w-6/12"></div>
      {/each}
    </div>
  </div>
{:then _}
  <div
    class="
  grid
  lg:grid-cols-post
  items-start
  gap-[50px]
  mb-[50px]
  grid-cols-[1fr]
  "
  >
    <Info />
    <div class="flex flex-col gap-[17px]">
      <Paragraph>
        Seamlessly syndicate cutting-edge architectures rather than collaborative
        collaboration and idea-sharing. Proactively incubate visionary interfaces whereas
        premium benefits. Seamlessly negotiate ubiquitous leadership skills rather than
        parallel ideas. Dramatically visualize superior interfaces for best-of-breed
        alignments. Synergistically formulate performance based users through customized
        relationships. Interactively deliver cross-platform ROI via granular systems.
        Intrinsicly enhance effective initiatives vis-a-vis orthogonal outsourcing.
        Rapidiously monetize market-driven opportunities with multifunctional users.
        Collaboratively enhance visionary opportunities through revolutionary schemas.
        Progressively network just in time customer service without real-time scenarios.
      </Paragraph>
      <Paragraph>
        Synergistically drive e-business leadership with unique synergy. Compellingly
        seize market positioning ROI and bricks-and-clicks e-markets. Proactively
        myocardinate timely platforms through distributed ideas. Professionally optimize
        enabled core competencies for leading-edge sources. Professionally enhance
        stand-alone leadership with innovative synergy. Rapidiously generate backend
        experiences vis-a-vis long-term high-impact relationships. Authoritatively supply
        market-driven mindshare and bricks-and-clicks opportunities. Holisticly create
        diverse innovation through adaptive communities. Efficiently empower seamless
        meta-services with impactful opportunities. Distinctively transition virtual
        outsourcing with focused e-tailers.
      </Paragraph>
      <Quote>
        Monotonectally seize superior mindshare rather than efficient technology.
      </Quote>
      <Paragraph>
        Compellingly enhance seamless resources through competitive content. Continually
        actualize 24/365 alignments for resource-leveling platforms. Energistically
        enhance high standards in models and professional expertise. Intrinsicly iterate
        extensible metrics for prospective opportunities. Continually develop leading-edge
        experiences through quality e-services.
      </Paragraph>
    </div>
  </div>
{/await}
