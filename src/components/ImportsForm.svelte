<script>
  import ExclamationIcon from "./ExclamationIcon.svelte";
  import { createEventDispatcher } from 'svelte'
  export let numberOfImportPos;
  export let avgNumPOChanges;
  export let avgCostPerHour;
  export let systems;


  const dispatch = createEventDispatcher();
  const handleSubmit = (e) => {
    dispatch('importsSubmit', {numberOfImportPos,avgNumPOChanges,avgCostPerHour, systems} )
    e.target.reset();

  } 
</script>

<form on:submit|preventDefault={handleSubmit} >

  <div class="num-imports-input">
    <div class="flex justify-between">
      <label class="text-white labelz" for="numberOfImportPos">Number of import purchase orders (POs) per year</label>
      <ExclamationIcon />
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
      <ExclamationIcon />
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
      <ExclamationIcon />
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
      <ExclamationIcon />
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
  <button type="submit" class="inline-flex justify-center w-full px-4 py-3 text-sm font-medium text-white border border-transparent rounded-full shadow-sm bg-yellowz hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Submit</button>
</form>