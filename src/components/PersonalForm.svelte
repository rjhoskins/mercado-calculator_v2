<script>
  import IndustrySelect from "./IndustrySelect.svelte";

</script>
<form class="space-y-8 divide-y divide-gray-200">
  <div class="space-y-8 divide-y divide-gray-200">


    <div class="pt-8">
      <div>
        <h3 class="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
      </div>
      <div class="grid grid-cols-1 mt-6 gap-y-6 gap-x-4 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <label for="first-name" class="block text-sm font-medium text-gray-700">First name</label>
          <div class="mt-1">
            <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="last-name" class="block text-sm font-medium text-gray-700">Last name</label>
          <div class="mt-1">
            <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="phone" class="block text-sm font-medium text-gray-700">Phone number</label>
          <div class="mt-1">
            <input type="tel" name="phone" id="phone" autocomplete="given-name" class="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
          </div>
        </div>

<IndustrySelect />


        <div class="col-span-6">
          <label for="compnanyName" class="block text-sm font-medium text-gray-700">Company name</label>
          <div class="mt-1">
            <input type="text" name="compnanyName" id="compnanyName" autocomplete="compnanyName" class="block w-full text-sm border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
          </div>
        </div>

        <div class="col-span-6">
          <label for="companyEmailAddress" class="block text-sm font-medium text-gray-700">Company email address</label>
          <div class="mt-1">
            <input type="text" name="companyEmailAddress" id="companyEmailAddress" autocomplete="companyEmailAddress" class="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
          </div>
        </div>




    </div>


  </div>

  <div class="pt-5">
    <div class="flex justify-end">
      <button type="button" class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Cancel</button>
      <button type="submit" class="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save</button>
    </div>
  </div>
</form>