<script>
  import IndustrySelect from "./IndustrySelect.svelte";
  import {createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher();
  let industry
  let firstName
  let lastName 
  let phone 
  let compnanyName 
  let companyEmailAddress 
  

  const handleSubmit = (e) => {
    dispatch('detailsSubmit', { industry, firstName, lastName,  phone,  compnanyName,  companyEmailAddress, })
    e.target.reset();
  }
  
  const handleIndustryChange = (e) =>  industry = e.detail;



</script>
<form  on:submit|preventDefault={handleSubmit}  class="space-y-8 divide-y divide-gray-200">
  <div class="space-y-8 divide-y divide-gray-200">


      <div class="grid-cols-1 sm:grid gap-y-6 gap-x-4 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <label for="firstName" class="block text-sm font-medium text-white">First name</label>
          <div class="mt-1">
            <input type="text" bind:value={firstName} placeholder="Chris" name="firstName" id="firstName" autocomplete="given-name" class="block w-full px-6 bg-transparent border-transparent border-b-darkTextGrayish placeholder-darkTextGrayish text-darkTextGrayish focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="lastName" class="block text-sm font-medium text-white">Last name</label>
          <div class="mt-1">
            <input type="text" bind:value={lastName} placeholder="Smith" name="lastName" id="lastName" autocomplete="family-name" class="block w-full px-6 bg-transparent border-transparent border-b-darkTextGrayish placeholder-darkTextGrayish text-darkTextGrayish focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="phone" class="block text-sm font-medium text-white">Phone number</label>
          <div class="mt-1">
            <input type="tel" bind:value={phone} placeholder="800-867-5309" name="phone" id="phone" autocomplete="given-name" class="block w-full px-6 bg-transparent border-transparent border-b-darkTextGrayish placeholder-darkTextGrayish text-darkTextGrayish focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
          </div>
        </div>

<IndustrySelect on:industryChange={handleIndustryChange} />


        <div class="col-span-6">
          <label for="compnanyName" class="block text-sm font-medium text-white">Company name</label>
          <div class="mt-1">
            <input type="text" bind:value={compnanyName} placeholder="ABC Suppliers" name="compnanyName" id="compnanyName" autocomplete="compnanyName" class="block w-full px-6 text-sm bg-transparent border-transparent border-b-darkTextGrayish placeholder-darkTextGrayish text-darkTextGrayish focus:border-indigo-500 focus:ring-indigo-500">
          </div>
        </div>

        <div class="col-span-6">
          <label for="companyEmailAddress" class="block text-sm font-medium text-white">Company email address</label>
          <div class="mt-1">
            <input type="text" bind:value={companyEmailAddress} placeholder="email@abcsuppliers.com" name="companyEmailAddress" id="companyEmailAddress" autocomplete="companyEmailAddress" class="block w-full px-6 bg-transparent border-transparent border-b-darkTextGrayish placeholder-darkTextGrayish text-darkTextGrayish focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
          </div>
        </div>




    </div>




  <button type="submit" class="block w-full px-4 py-3 !mb-6 text-sm font-bold text-black border border-transparent rounded-full shadow-sm bg-yellowz hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Next</button>

</form>