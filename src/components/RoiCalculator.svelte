<script>
  import RoiResultsCalculator from './RoiResultsTable.svelte';
  import PersonalForm from './PersonalForm.svelte';
  import ImportsForm from './ImportsForm.svelte';
  import ExclamationIcon from './ExclamationIcon.svelte';
  import RoiResultsTable from './RoiResultsTable.svelte';
  let blurString
  let numberOfImportPos;
  let avgNumPOChanges;
  const handleImportsSubmit = (e) => {
    console.log(e.detail)
    numberOfImportPos = e.detail.numberOfImportPos
    avgNumPOChanges = e.detail.avgNumPOChanges
    blurString = '$375,000';

  }



  const TOOL_TIP_MESSAGES = {
    NUM_IMPORT_POS:'',
    NUM_IMPORT_POS:'',
    NUM_IMPORT_POS:'',
    NUM_IMPORT_POS:'',

  }
</script>




    <a href="https://mercadolabs.com/" target="_blank" rel="noreferrer"> 
      <img  src='/img/Mercado_Logo_Option0.png' class="max-w-xs logo svelte" alt="Mercado Logo" />
    </a>
    


    <!-- <div class="flex overflow-x-auto whitespace-nowrap">
      <button
        class="inline-flex items-center h-12 px-4 py-2 text-sm text-center text-gray-700 border border-b-0 border-gray-300 sm:text-base dark:border-gray-500 rounded-t-md dark:text-white whitespace-nowrap focus:outline-none"
      >
        YOUR DETAILS
      </button>

      <button
        class="inline-flex items-center h-12 px-4 py-2 text-sm text-center text-gray-700 bg-transparent border-b border-gray-300 sm:text-base dark:border-gray-500 dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 dark:hover:border-gray-300"
      >
        YOUR IMPORTS
      </button>
    </div> -->
  <div class="flex p-3 mt-8 left bg-darkBlue">
    <!-- <PersonalForm /> -->

<ImportsForm on:importsSubmit={handleImportsSubmit} />
</div>




<div class="p-3 ">
  <RoiResultsTable {blurString} {numberOfImportPos} {avgNumPOChanges}/>

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
