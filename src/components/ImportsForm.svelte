<script>
	import { validateImports } from './../schema.js';
	import { ImportsFormDataStore, DetailsFormDataStore, AllFormsSumittedStore } from './../store.js';
  import { ShowModalStore } from "../store";
  import ExclamationIcon from "./ExclamationIcon.svelte";
  import ImportsModal from "./ImportsModal.svelte";
  import { sendHubSpotData } from '../hubspot.js';
  
  let import_entries_per_year;
  let avg_num_po_changes;
  let avg_cost_per_hour;
  let current_system;

  let messagesKey;
  let formErrors;

  $:{
    // console.log($ImportsFormDataStore);
  }

  const handleSubmit = (e) => {
    formErrors = []
    const formData = {import_entries_per_year,avg_num_po_changes,avg_cost_per_hour, current_system}
    const results = validateImports(formData)
    if (results.valid) {
      window.scrollTo(0, 150) 
    AllFormsSumittedStore.update(curr => curr = true)
    sendHubSpotData()
    }
    if (!results.valid) {
      formErrors = results?.data?.fieldErrors;
      console.log('not valid', formErrors);
    }

    ImportsFormDataStore.update(curr => curr = formData)
  }
   
  const handleModelClose = (e) => ShowModalStore.update(curr => false)

  const handleToolTipClick = (e) => {
    ShowModalStore.update(curr => true)
    messagesKey = e;

    // console.log('handleToolTipClick');
  } 
  
</script>

<form  on:submit|preventDefault={handleSubmit} >
  <ImportsModal {messagesKey} on:modalClosed={handleModelClose} />

  <div class="space-y-6">
    <div class="num-imports-input">
      <div class="flex justify-between">
        <label class="text-white labelz" for="import_entries_per_year">Number of import purchase orders (POs) per year</label>
        <!-- <button on:click|preventDefault={handleToolTipClick} > button yo! </button> -->
        <div class="hover:cursor-pointer" on:click|preventDefault={(e) => handleToolTipClick('PO')}>
          <ExclamationIcon />
        </div>
      </div>
      <div class="relative ">
        <input type=number name="import_entries_per_year" id="import_entries_per_year"
          class="w-full bg-transparent border-transparent no-spinner inputz placeholder-darkTextGrayish text-darkTextGrayish "
          aria-invalid="true" placeholder="Example: 1500" bind:value={import_entries_per_year} />
        <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <!-- TODO:? Heroicon name: mini/exclamation-circle -->
        </div>
      </div>
      {#if formErrors?.import_entries_per_year}
      <!-- content here -->
      <p class="mt-2 text-xs text-red-600" >{formErrors.import_entries_per_year[0]}</p>
     {/if}
    </div>
    <div class="avg-num-imports-input">
      <div class="flex justify-between">
        <label class="text-white labelz" for="avg_num_po_changes">Average number of changes per purchase order</label>
        <div class="hover:cursor-pointer" on:click|preventDefault={(e) => handleToolTipClick('CHANGES')}>
          <ExclamationIcon />
        </div>
      </div>
      <div class="relative ">
        <input type=number name="avg_num_po_changes" id="avg_num_po_changes"
          class="w-full bg-transparent border-transparent no-spinner inputz placeholder-darkTextGrayish text-darkTextGrayish sm:text-sm"
          aria-invalid="true" placeholder="Example: 5" bind:value={avg_num_po_changes} />
        <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <!-- TODO:? Heroicon name: mini/exclamation-circle -->
        </div>
      </div>
      {#if formErrors?.avg_num_po_changes}
      <!-- content here -->
      <p class="mt-2 text-xs text-red-600" >{formErrors.avg_num_po_changes[0]}</p>
     {/if}
    </div>
    <div class="avg-cost-per-hr-input">
      <div class="flex justify-between">
        <label class="text-white labelz" for="avg_cost_per_hour">Average cost per hour to perform activities on preparing, issuing and managing
          international POs</label>
          <div class="hover:cursor-pointer" on:click|preventDefault={(e) => handleToolTipClick('CPR')}>
          <ExclamationIcon />
          </div>
      </div>
      <div class="relative ">
        <input type="text" name="avg_cost_per_hour" id="avg_cost_per_hour"
          class="w-full bg-transparent border-transparent inputz placeholder-darkTextGrayish text-darkTextGrayish sm:text-sm"
          aria-invalid="true" placeholder="Example: 50" bind:value={avg_cost_per_hour} />
        <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <!-- TODO:? Heroicon name: mini/exclamation-circle -->
        </div>
      </div>
      {#if formErrors?.avg_cost_per_hour}
      <!-- content here -->
      <p class="mt-2 text-xs text-red-600" >{formErrors.avg_cost_per_hour[0]}</p>
     {/if}
    </div>
    
    <div class="avg--imports-input">
      <div class="flex justify-between">
        <label class="text-white labelz" for="current_system">current_system you use to send POs and collaborate with your suppliers</label>
        <div class="hover:cursor-pointer" on:click|preventDefault={(e) => handleToolTipClick('SYSTEM')}>
          <ExclamationIcon />
        </div>
      </div>
      <div class="relative ">
        <input type="text" name="current_system" id="current_system"
          class="w-full placeholder-gray-400 bg-transparent border-transparent inputz placeholder-darkTextGrayish text-darkTextGrayish sm:text-sm"
          aria-invalid="true" placeholder="Examples: ERP Name, Spreadsheets, Email" bind:value={current_system} />
        <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <!-- TODO:? Heroicon name: mini/exclamation-circle -->
        </div>
      </div>
      <p class="mt-1 mb-1 text-sm text-red-600" >
        <!-- Your password must be less than 4 characters. -->
      </p>
      {#if formErrors?.current_system}
      <!-- content here -->
      <p class="mt-2 text-xs text-red-600" >{formErrors.current_system[0]}</p>
     {/if}
    </div>
  </div>
  <button type="submit" class="block w-full px-4 py-3 !my-6 text-sm font-bold text-black border-2 hover:border-2 hover:border-yellowz border-yellowz hover:bg-transparent hover:text-white rounded-full hover bg-yellowz  ">Submit</button>
</form>