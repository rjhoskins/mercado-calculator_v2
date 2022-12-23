<script>
  import RoiResultsCalculator from './RoiResultsTable.svelte';
  import DetailsForm from './DetailsForm.svelte';
  import ImportsForm from './ImportsForm.svelte';
  import ExclamationIcon from './ExclamationIcon.svelte';
  import RoiResultsTable from './RoiResultsTable.svelte';
  import Tabs from './Tabs.svelte'

  let detailsCompleted = false
  let importsCompleted = false
  let blurString
  let numberOfImportPos;
  let avgNumPOChanges;
  let detailsData;
  const handleImportsSubmit = (e) => {
    console.log(e.detail)
    numberOfImportPos = e.detail.numberOfImportPos
    avgNumPOChanges = e.detail.avgNumPOChanges
    blurString = '$375,000';
    importsCompleted = true
  }

  const handleDetailsSubmit = (e) => {
    console.log(e.detail)
    detailsCompleted = true
  }




  const TOOL_TIP_MESSAGES = {
    NUM_IMPORT_POS: '',
    NUM_IMPORT_POS: '',
    NUM_IMPORT_POS: '',
    NUM_IMPORT_POS: '',

  }
</script>



<div class="grid grid-cols-2 p-16 bg-white rounded-md shadow-lg">
<div class="col-span-1 left">
  <h3>Your savings with 
    Mercado's ROI Calculator.</h3>
    <p>Mercado was designed to change the way the world trades, transacts, and interacts.</p>
    <p>Our import order management system connects businesses with the people who make and move their products, creating remarkable outcomes including:</p>
<ul>
  
        <li>Greater transparency</li>
        <li>Increased efficiency</li>
        <li>Improved time to market</li>
</ul>

<p>Answer the following questions about your imports to receive a snapshot of your potential savings based on 2 of the 7 value drivers Mercado offers.</p>

<div class="p-6 rounded-md shadow-lg bg-lightBlue">
  <h4 class="font-bold">Got questions?</h4>
  <p>Click here to check out our FAQs and discover the full value Mercado offers.</p>
</div>



    
</div>
<div class="right">right</div>

</div>



<div class="relative max-w-lg p-3 mt-8 grid-rows-auto left bg-darkBlue rounded-t-3xl">
  <Tabs {detailsCompleted} />


  <div class="mt-12 formz">

    {#if detailsCompleted}
    <ImportsForm on:importsSubmit={handleImportsSubmit} />
    {:else}
    <!-- else content here -->
    <DetailsForm on:detailsSubmit={handleDetailsSubmit} />
    {/if}

  </div>

</div>




<div class="p-3 ">
  {#if importsCompleted}
  <RoiResultsTable {blurString} {numberOfImportPos} {avgNumPOChanges} />
  {/if}

</div>

<!-- <RoiResultsCalculator /> -->
<style>
  .logo {

    will-change: filter;
  }

  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ffd500aa);
  }
</style>