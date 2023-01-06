<script>
  import { DetailsCompletedStore } from '../store';
  import { scale } from 'svelte/transition';
  import AddValue from './AddValue.svelte'
  import DummyHeader from './DummyHeader.svelte'
  import DummyFooter from './DummyFooter.svelte'
  import RoiCalculator from './RoiCalculator.svelte';
  import RoiResultsCalculator from './RoiResultsTable.svelte';
  import CircleCheckIcon from './CircleCheckIcon.svelte';
  import DetailsForm from './DetailsForm.svelte';
  import ImportsForm from './ImportsForm.svelte';
  import ExclamationIcon from './ExclamationIcon.svelte';
  import RoiResultsTable from './RoiResultsTable.svelte';
  import ResultsValue from './ResultsValue.svelte';
  import Faq from './Faq.svelte';
  import Tabs from './Tabs.svelte';
  import FullSavings from './FullSavings.svelte';

  let blurString;
  let numberOfImportPos;
  let avgNumPOChanges;
  let detailsData;
  let formSubmitted = false;


  const handleImportsSubmit = (e) => {
    // console.log(e.detail);
    numberOfImportPos = e.detail.numberOfImportPos;
    avgNumPOChanges = e.detail.avgNumPOChanges;
    blurString = '$375,000';
    formSubmitted = true;
  };


</script>

<DummyHeader />
{#if !formSubmitted}

<AddValue />

<section class="relative w-full px-1">
  <div
    class="absolute left-0 w-[300px] h-[300px] rotate-180 rounded-[300px_0_0_0] yeellowz -z-10 bg-darkBlue -top-[66px] circle"
  />
  <div
    class="absolute right-0 w-[200px] h-[200px] rotate-180 rounded-[200px_0_0_0] yeellowz -z-10 bg-dfec top-0 circle"
  />

  <div
    class="z-10 grid w-full p-4 mx-auto bg-white shadow-lg rounded-2xl mx max-w-mercado-max gap-x-6 sm:p-4 md:p-6 lg:p-16 md:place-items-center md:grid-cols-2 "
  >
    <div class="flex flex-col space-y-6 leading-6 left ">
      <h3 class="mt-8 text-2xl font-bold">
        Your savings with <br />
        <span class="text-yellowz">Mercado's ROI Calculator.</span>
      </h3>
      <p class="font-bold">
        Mercado was designed to change the way the world trades, transacts, and
        interacts.
      </p>
      <p>
        Our import order management system connects businesses with the people
        who make and move their products, creating remarkable outcomes
        including:
      </p>
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

      <p>
        Answer the following questions about your imports to receive a snapshot
        of your potential savings based on 2 of the 7 value drivers Mercado
        offers.
      </p>

      <div class="p-6 mb-8 shadow-lg rounded-2xl bg-lightBlue">
        <h4 class="font-bold">Got questions?</h4>
        <p>
          <a
            class="underline text-medBlue hover:text-black"
            href="#faq"
            aria-describedby="faq link">Click here</a
          > to check out our FAQs and discover the full value Mercado offers.
        </p>
      </div>
    </div>
    <div class="w-full mx-auto mt-8 form-stuffz right">
      <Tabs />
      <div class="relative p-3 overflow-auto md:max-w-lg formz grid-rows-auto left bg-darkBlue rounded-b-2xl {$DetailsCompletedStore
          ? ' rounded-tl-2xl '
          : ' rounded-tr-2xl '}">
        {#if $DetailsCompletedStore }
          <ImportsForm />
        {:else}
          <DetailsForm  />
        {/if}
      </div>
    </div>
  </div>
</section>


<FullSavings />

<Faq />

{/if}
{#if formSubmitted}

<div  transition:scale  class="">
  <ResultsValue />
    <RoiResultsTable {blurString} {numberOfImportPos} {avgNumPOChanges} />
</div>
{/if}


<DummyFooter />
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
