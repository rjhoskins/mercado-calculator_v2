<script>
  export let blurString = ''
  export let numberOfImportPos;
  export let avgNumPOChanges;


  const showAsCurrency = (string) => {
    return ` $${new Intl.NumberFormat('en-US', {}).format(string)}`
  }


</script>



<div class="flex flex-col ">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full text-center">
          <thead class="bg-white border-b">
            <tr>
              <th
                scope="col"
                class="px-6 py-2 text-sm font-medium text-gray-900"
              />
              <th
                scope="col"
                class="px-6 py-2 text-sm font-medium text-gray-900"
              >
                Pre-Mercado Cost
              </th>
              <th
                scope="col"
                class="px-6 py-2 text-sm font-medium text-gray-900"
              >
                Post-Mercado Cost
              </th>
              <th
                scope="col"
                class="px-6 py-2 text-sm font-medium text-gray-900"
              >
                Annual Saving
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white">
              <td
                class="px-6 py-2 text-sm font-medium text-gray-900 whitespace-nowrap"
                >Issuance of original PO</td
              >
              <td
                class="px-6 py-2 text-sm font-light text-gray-900 whitespace-nowrap"
              >
                {numberOfImportPos ? `${showAsCurrency(50 * numberOfImportPos)}`: ''}
              </td>
              <td
                class="px-6 py-2 text-sm font-light text-gray-900 whitespace-nowrap"
              >
                {numberOfImportPos ? `${showAsCurrency(25 * numberOfImportPos)}`: ''}
              </td>
              <td
                class="px-6 py-2 text-sm font-light text-gray-900 whitespace-nowrap"
              >
                {numberOfImportPos ? `${showAsCurrency(25 * numberOfImportPos)}`: ''}
              </td>
            </tr>
            <tr class="bg-white">
              <td
                class="px-6 py-2 text-sm font-medium text-gray-900 whitespace-nowrap"
                >PO changes</td
              >
              <td
                class="px-6 py-2 text-sm font-light text-gray-900 whitespace-nowrap"
              >
                {avgNumPOChanges ? `${showAsCurrency(50 * numberOfImportPos * avgNumPOChanges)}`: ''}
              </td>
              <td
                class="px-6 py-2 text-sm font-light text-gray-900 whitespace-nowrap"
              >
                {avgNumPOChanges ? `${showAsCurrency(25 * numberOfImportPos * avgNumPOChanges)}`: ''}
              </td>
              <td
                class="px-6 py-2 text-sm font-light text-gray-900 whitespace-nowrap"
              >
                {avgNumPOChanges ? `${showAsCurrency(25 * numberOfImportPos * avgNumPOChanges)}`: ''}
              </td>
            </tr>
            <tr class="bg-white">
              <td
                class="px-6 py-2 text-sm font-medium text-gray-900 whitespace-nowrap"
                >Air freight spend</td
              >
              <td
                colspan="1"
                class="px-6 py-2 text-sm font-light text-center text-gray-900 whitespace-nowrap blur-sm"
              >
                {blurString}
              </td>
              <td
                class="px-6 py-2 text-sm font-light text-gray-900 whitespace-nowrap blur-sm"
              >
                {blurString}
              </td>
              <td
                class="px-6 py-2 text-sm font-light text-gray-900 whitespace-nowrap blur-sm"
              >
              {blurString}
              </td>
            </tr>
            <tr class="bg-white">
              <td
                class="px-6 py-2 text-sm font-medium text-gray-900 whitespace-nowrap"
                >Ocean freight spend</td
              >

              <td
                class="px-6 py-2 text-sm font-light text-gray-900 whitespace-nowrap blur-sm"
              >
                {blurString}
              </td>

              <td
                class="px-6 py-2 text-sm font-light text-gray-900 whitespace-nowrap blur-sm"
              >
                {blurString}
              </td>
              <td
                class="px-6 py-2 text-sm font-light text-gray-900 whitespace-nowrap blur-sm"
              >
                {blurString}
              </td>
            </tr>
            <tr class="bg-white">
              <td
                class="px-6 py-2 text-sm font-medium text-gray-900 whitespace-nowrap"
                >Customs clearance fees</td
              >
              <td
                colspan="1"
                class="px-6 py-2 text-sm font-light text-center text-gray-900 whitespace-nowrap blur-sm"
              >
                {blurString}
              </td>
              <td
                class="px-6 py-2 text-sm font-light text-gray-900 whitespace-nowrap blur-sm"
              >
                {blurString}
              </td>
              <td
                class="px-6 py-2 text-sm font-light text-gray-900 whitespace-nowrap blur-sm"
              >
                {blurString}
              </td>
            </tr>
            <tr class="bg-white">
              <td
                class="px-6 py-2 text-sm font-medium text-gray-900 whitespace-nowrap"
                >Carrying cost</td
              >
              <td
                class="px-6 py-2 text-sm font-light text-gray-900 whitespace-nowrap blur-sm"
              >
                {blurString}
              </td>
              <td
                class="px-6 py-2 text-sm font-light text-gray-900 whitespace-nowrap blur-sm"
              >
                {blurString}
              </td>
              <td
                class="px-6 py-2 text-sm font-light text-gray-900 whitespace-nowrap blur-sm"
              >
                {blurString}
              </td>
            </tr>

            <!--  -->
            <tr class="bg-white border-b">
              <td
                class="px-6 py-2 text-sm font-medium text-gray-900 whitespace-nowrap"
                >Sales</td
              >
              <td
                class="px-6 py-2 text-sm font-light text-gray-900 whitespace-nowrap blur-sm"
              >
                {blurString}
              </td>
              <td
                class="px-6 py-2 text-sm font-light text-gray-900 whitespace-nowrap blur-sm"
              >
                {blurString}
              </td>
              <td
                class="px-6 py-2 text-sm font-light text-gray-900 whitespace-nowrap blur-sm"
              >
                {blurString}
              </td>
            </tr>
            <tr class="bg-white">
              <td
                class="px-6 py-2 text-sm font-medium text-gray-900 whitespace-nowrap"
                >Annual Savings</td
              >
              <td
                class="px-6 py-2 text-sm font-light text-gray-900 whitespace-nowrap blur-sm"
              >
                {blurString}
              </td>
              <td
                class="px-6 py-2 text-sm font-light text-gray-900 whitespace-nowrap blur-sm"
              >
                {blurString}
              </td>
              <td
                class="px-6 py-2 text-sm font-light text-gray-900 whitespace-nowrap blur-sm"
              >
                {blurString}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
