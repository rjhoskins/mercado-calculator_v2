<script>
	import { ImportsFormDataStore, AllFormsSumittedStore } from './../store.js';
  import { ShowModalStore } from "../store";
  import ExclamationIcon from "./ExclamationIcon.svelte";
  import ImportsModal from "./ImportsModal.svelte";
  import { createEventDispatcher } from 'svelte'
  
  let numberOfImportPos;
  let avgNumPOChanges;
  let avgCostPerHour;
  let systems;

  let showImportsModal
  let messagesKey;

  // $:{
  //   console.log($ImportsFormDataStore);
  //   console.log($AllFormsSumittedStore);
  // }

  const handleSubmit = (e) => {
    ImportsFormDataStore.update(curr => curr = {numberOfImportPos,avgNumPOChanges,avgCostPerHour, systems})
    AllFormsSumittedStore.update(curr => curr = true)
  }
   
  const handleModelClose = (e) => ShowModalStore.update(curr => false)

  const handleToolTipClick = (e) => {
    ShowModalStore.update(curr => true)
    messagesKey = e;

    // console.log('handleToolTipClick');
  } 
  
</script>

<form  on:submit|preventDefault={handleSubmit} >
  <ImportsModal {showImportsModal} {messagesKey} on:modalClosed={handleModelClose} />

  <div class="num-imports-input">
    <div class="flex justify-between">
      <label class="text-white labelz" for="numberOfImportPos">Number of import purchase orders (POs) per year</label>
      <!-- <button on:click|preventDefault={handleToolTipClick} > button yo! </button> -->
      <button on:click|preventDefault={(e) => handleToolTipClick('PO')}>
        <ExclamationIcon />
      </button>
    </div>
    <div class="relative ">
      <input type="text" name="numberOfImportPos" id="numberOfImportPos"
        class="w-full bg-transparent border-transparent inputz placeholder-darkTextGrayish text-darkTextGrayish "
        aria-invalid="true" placeholder="Example: 1500" bind:value={numberOfImportPos} />
      <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <!-- TODO:? Heroicon name: mini/exclamation-circle -->
      </div>
    </div>
    <p class="mt-1 mb-1 text-sm text-red-600" id="email-error">
      <!-- Your password must be less than 4 characters. -->
    </p>
  </div>

  <div class="avg-num-imports-input">
    <div class="flex justify-between">
      <label class="text-white labelz" for="avgNumPOChanges">Average number of changes per purchase order</label>
      <button on:click|preventDefault={(e) => handleToolTipClick('CHANGES')}>
        <ExclamationIcon />
      </button>
    </div>
    <div class="relative ">
      <input type="text" name="avgNumPOChanges" id="avgNumPOChanges"
        class="w-full bg-transparent border-transparent inputz placeholder-darkTextGrayish text-darkTextGrayish sm:text-sm"
        aria-invalid="true" placeholder="Example: 5" bind:value={avgNumPOChanges} />
      <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <!-- TODO:? Heroicon name: mini/exclamation-circle -->
      </div>
    </div>
    <p class="mt-1 mb-1 text-sm text-red-600" id="email-error">
      <!-- Your password must be less than 4 characters. -->
    </p>
  </div>

  <div class="avg-cost-per-hr-input">
    <div class="flex justify-between">
      <label class="text-white labelz" for="avgCostPerHour">Average cost per hour to perform activities on preparing, issuing and managing
        international POs</label>
        <button on:click|preventDefault={(e) => handleToolTipClick('CPR')}>
        <ExclamationIcon />
      </button>
    </div>
    <div class="relative ">
      <input type="text" name="avgCostPerHour" id="avgCostPerHour"
        class="w-full bg-transparent border-transparent inputz placeholder-darkTextGrayish text-darkTextGrayish sm:text-sm"
        aria-invalid="true" placeholder="Example: 50" bind:value={avgCostPerHour} />
      <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <!-- TODO:? Heroicon name: mini/exclamation-circle -->
      </div>
    </div>
    <p class="mt-1 mb-1 text-sm text-red-600" id="email-error">
      <!-- Your password must be less than 4 characters. -->
    </p>
  </div>
  
  <div class="avg--imports-input">
    <div class="flex justify-between">
      <label class="text-white labelz" for="systems">Systems you use to send POs and collaborate with your suppliers</label>
      <button on:click|preventDefault={(e) => handleToolTipClick('SYSTEM')}>
        <ExclamationIcon />
      </button>
    </div>
    <div class="relative ">
      <input type="text" name="systems" id="systems"
        class="w-full placeholder-gray-400 bg-transparent border-transparent inputz placeholder-darkTextGrayish text-darkTextGrayish sm:text-sm"
        aria-invalid="true" placeholder="Examples: ERP Name, Spreadsheets, Email" bind:value={systems} />
      <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <!-- TODO:? Heroicon name: mini/exclamation-circle -->
      </div>
    </div>
    <p class="mt-1 mb-1 text-sm text-red-600" id="email-error">
      <!-- Your password must be less than 4 characters. -->
    </p>
  </div>
  <button type="submit" class="block w-full px-4 py-3 !my-6 text-sm font-bold text-black border-2 hover:border-2 hover:border-yellowz border-yellowz hover:bg-transparent hover:text-white rounded-full hover bg-yellowz  ">Submit</button>
</form>