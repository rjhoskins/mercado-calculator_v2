<script>
  import RoiResultsCalculator from './RoiResultsTable.svelte';
  import CircleCheckIcon from './CircleCheckIcon.svelte'
  import DetailsForm from './DetailsForm.svelte';
  import ImportsForm from './ImportsForm.svelte';
  import ExclamationIcon from './ExclamationIcon.svelte';
  import RoiResultsTable from './RoiResultsTable.svelte';
  import ResultsValue from './ResultsValue.svelte';
  import Faq from './Faq.svelte';
  import Tabs from './Tabs.svelte'
  import FullSavings from './FullSavings.svelte';

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



<section class="relative w-full">
  <div class="absolute left-0 w-[300px] h-[300px] rotate-180 rounded-[300px_0_0_0] yeellowz -z-10 bg-darkBlue -top-[66px] circle"></div>
  <div class="absolute right-0 w-[200px] h-[200px] rotate-180 rounded-[200px_0_0_0] yeellowz -z-10 bg-dfec top-0 circle"></div>
  <!-- <div class="absolute right-0 -z-10 w-56 h-56 rotate-180 rounded-full bg-[linear-gradient(270deg,_#F5F5F5_50%,_#DFECFE_50%)] -top-28 circle"></div> -->
  <!-- <div class="hidez absolute rounded-full bg-[linear-gradient(90deg,_#F5F5F5_50%,_#ff0000_50%)]  w-80 h- h-80 -z-10 -top-40 -left-40 circle"></div>
  <div class="showz absolute rounded-full bg-[linear-gradient(90deg,_#F5F5F5_50%,_#22303E_50%)]  w-80 h- h-80 -z-10 -top-40 -left-40 circle"></div> -->
<div
  class="z-10 grid w-full p-2 mx-auto bg-white shadow-lg max-w-mercado-max gap-x-6 lg:rounded-md sm:p-4 md:p-6 lg:p-16 md:place-items-center md:grid-cols-2 ">
  <div class="flex flex-col space-y-6 leading-6 left">
    <h3 class="text-2xl font-bold">Your savings with <br>
      <span class="text-yellowz">Mercado's ROI Calculator</span>.
    </h3>
    <p class="font-bold">Mercado was designed to change the way the world trades, transacts, and interacts.</p>
    <p>Our import order management system connects businesses with the people who make and move their products, creating
      remarkable outcomes including:</p>
    <ul>

      <li class="flex">
        <CircleCheckIcon /> Greater transparency
      </li>
      <li class="flex">
        <CircleCheckIcon />Increased efficiency
      </li>
      <li class="flex">
        <CircleCheckIcon />Improved time to market
      </li>
    </ul>

    <p>Answer the following questions about your imports to receive a snapshot of your potential savings based on 2 of
      the 7 value drivers Mercado offers.</p>

    <div class="p-6 shadow-lg rounded-2xl bg-lightBlue">
      <h4 class="font-bold">Got questions?</h4>
      <p><a class="underline text-medBlue" href="/faqs" aria-describedby="faq link">Click here</a> to check out our FAQs
        and discover the full value Mercado offers.</p>
    </div>




  </div>
  <div class="w-full mx-auto form-stuffz right">
    <div class="max-w-lg ">

      <Tabs {detailsCompleted} />
    </div>

    <div class="relative p-3 md:max-w-lg formz grid-rows-auto left bg-darkBlue ">



      <div class="formz">

        {#if detailsCompleted}
        <ImportsForm on:importsSubmit={handleImportsSubmit} />
        {:else}
        <!-- else content here -->
        <DetailsForm on:detailsSubmit={handleDetailsSubmit} />
        {/if}

      </div>

    </div>


  </div>

</div>
</section>


<FullSavings />

<Faq />


<ResultsValue />

  <!-- {#if importsCompleted} -->
  <RoiResultsTable {blurString} {numberOfImportPos} {avgNumPOChanges} />
  <!-- {/if} -->


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