<script lang="ts">
  const date = new Date()
</script>

<div class="flex items-center gap-[7px]">
  <time class="font-lora text-s text-text text-nowrap" datetime={date.toISOString()}>
    {date.toLocaleDateString('ru')}
  </time>
  <span class="grow h-px w-full bg-sep"></span>
  <span class="font-lora text-s text-text text-nowrap">4 minutes</span>
</div>
