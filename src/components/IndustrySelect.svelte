<script>
  export let formError
  import { bind } from 'svelte/internal';
  import { createEventDispatcher } from 'svelte';
  import IndustryOptions from './IndustryOptions.svelte';
  const dispatch = createEventDispatcher();
  export let mxp_vertical_industry;
  const handleChange = (e) => dispatch('industryChange', mxp_vertical_industry);
</script>

<div class="sm:col-span-3">
  <label
    for="location"
    class="block text-sm font-medium text-white"
    >Industry</label
  >
  <select
    bind:value={mxp_vertical_industry}
    on:change={handleChange}
    id="location"
    name="location"
    class="w-full px-6 pl-0 mt-1 bg-transparent border-transparent mt-1block border-b-darkTextGrayish placeholder-darkTextGrayish text-darkTextGrayish focus:border-yellowz focus:ring-yellowz sm:text-sm"
  >
    <option disabled selected>Select an industry</option>
<IndustryOptions />
  </select>
  {#if formError}
  <!-- content here -->
  <p class="mt-2 text-xs text-red-600" id="email-error">{formError}</p>
{/if}
  
</div>
