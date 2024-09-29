<script lang="ts">
  import type { IPostExtended } from '../api/types/IPostExtended'
  import Content from './components/Content/Content.svelte'
  import Info from './components/Info/Info.svelte'
  export let post: Promise<IPostExtended>
</script>

<div class="container my-[100px]">
  <Content {post} />
  <Info {post} />
</div>
