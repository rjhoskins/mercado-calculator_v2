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
    class="block text-sm font-medium text-white text-darkTextGrayish"
    >Industry</label
  >
  <select
    bind:value={industry}
    on:change={handleChange}
    id="location"
    name="location"
    class="block w-full px-6 py-2 pl-3 pr-10 mt-1 text-base bg-transparent border-b-2 border-transparent border-b-darkTextGrayish text-darkTextGrayish focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
  >
    <option selected>Select an industry</option>
    <option>United States</option>
    <option>Canada</option>
    <option>Mexico</option>
  </select>
</div>
