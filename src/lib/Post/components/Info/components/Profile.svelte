<script lang="ts">
  export let avatar: string
  export let username: string
</script>

<div class="flex max-w-[250px] gap-[17px] items-center mr-auto">
  <img class="rounded-full w-[50px] h-[50px]" src={avatar} alt="" />
  <div class="flex flex-col grow gap-[3px]">
    <span class="text-underline bold font-lara font-s">By {username}</span>
    <span class="text-descr bold font-lara font-s">Thinker & Designer</span>
  </div>
</div>
