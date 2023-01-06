<script>
  import { bind } from 'svelte/internal';
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  export let industry;
  const handleChange = (e) => dispatch('industryChange', industry);
</script>

<div class="sm:col-span-3">
  <label
    for="location"
    class="block text-sm font-medium text-white"
    >Industry</label
  >
  <select
    bind:value={industry}
    on:change={handleChange}
    id="location"
    name="location"
    class="w-full px-6 pl-0 mt-1 bg-transparent border-transparent mt-1block border-b-darkTextGrayish placeholder-darkTextGrayish text-darkTextGrayish focus:border-yellowz focus:ring-yellowz sm:text-sm"
  >
    <option selected>Select an industry</option>
    <option>United States</option>
    <option>Canada</option>
    <option>Mexico</option>
  </select>
</div>
