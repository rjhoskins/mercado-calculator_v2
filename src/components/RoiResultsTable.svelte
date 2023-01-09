<script>
	import {numberOfImportPos, avgNumPOChanges   } from './../store.js';

  const blurNums = ['$165,465','$247,524','$378,654','$456,987','$512,365','$675,398']
  const totalNums = ['$1,165,4650','$2,475,240','$3,078654','$4,560,987','$5,102,365']

  const randomblur = (arr) => arr[Math.floor(Math.random() * arr.length)] 

  const showAsCurrency = (string) => {
    return ` $${new Intl.NumberFormat('en-US', {}).format(string)}`
  }


</script>





<section class="relative w-full">
  <div class="z-10 gap-4 mx-auto mb-8 border-t border-black border-solid shadow-lg max-w-mercado-max bg-medGrayish lg:rounded-b-md sm:p-4 md:p-6 lg:p-16 place-items-center place-center ">
  <div class="overflow-x-auto">
        <table class="w-full text-center">
          <thead class="border-b text-darkTextGrayish">
            <tr>
              <th
                scope="col"
                class="px-6 py-6 text-sm font-medium"
              />
              <th
                scope="col"
                class="px-6 py-6 text-sm font-medium"
              >
                Pre-Mercado Cost
              </th>
              <th
                scope="col"
                class="px-6 py-6 text-sm font-medium"
              >
                Post-Mercado Cost
              </th>
              <th
                scope="col"
                class="px-6 py-6 text-sm font-medium"
              >
                Annual Saving
              </th>
            </tr>
          </thead>
          <tbody class="text-black">
            <tr class="border border-t border-t-b9b9">
              <td
                class="px-6 py-2 pt-4 text-sm font-medium whitespace-nowrap"
                >Issuance of original PO</td
              >
              <td
                class="px-6 py-2 pt-4 text-sm font-light whitespace-nowrap"
              >
                {$numberOfImportPos ? `${showAsCurrency(50 * $numberOfImportPos)}`: ''}
              </td>
              <td
                class="px-6 py-2 pt-4 text-sm font-light whitespace-nowrap"
              >
                {$numberOfImportPos ? `${showAsCurrency(25 * $numberOfImportPos)}`: ''}
              </td>
              <td
                class="px-6 py-2 pt-4 text-sm font-light whitespace-nowrap"
              >
                {$numberOfImportPos ? `${showAsCurrency(25 * $numberOfImportPos)}`: ''}
              </td>
            </tr>
            <tr class="">
              <td
                class="px-6 py-2 text-sm font-medium whitespace-nowrap"
                >PO changes</td
              >
              <td
                class="px-6 py-2 text-sm font-light whitespace-nowrap"
              >
                {$avgNumPOChanges ? `${showAsCurrency(50 * $numberOfImportPos * $avgNumPOChanges)}`: ''}
              </td>
              <td
                class="px-6 py-2 text-sm font-light whitespace-nowrap"
              >
                {$avgNumPOChanges ? `${showAsCurrency(25 * $numberOfImportPos * $avgNumPOChanges)}`: ''}
              </td>
              <td
                class="px-6 py-2 text-sm font-light whitespace-nowrap"
              >
                {$avgNumPOChanges ? `${showAsCurrency(25 * $numberOfImportPos * $avgNumPOChanges)}`: ''}
              </td>
            </tr>
            <tr class="">
              <td
                class="px-6 py-2 text-sm font-medium whitespace-nowrap"
                >Air freight spend</td
              >
              <td
                colspan="1"
                class="px-6 py-2 text-sm font-light text-center whitespace-nowrap blur-sm"
              >
                {randomblur(blurNums)}
              </td>
              <td
                class="px-6 py-2 text-sm font-light whitespace-nowrap blur-sm"
              >
                {randomblur(blurNums)}
              </td>
              <td
                class="px-6 py-2 text-sm font-light whitespace-nowrap blur-sm"
              >
              {randomblur(blurNums)}
              </td>
            </tr>
            <tr class="">
              <td
                class="px-6 py-2 text-sm font-medium whitespace-nowrap"
                >Ocean freight spend</td
              >

              <td
                class="px-6 py-2 text-sm font-light whitespace-nowrap blur-sm"
              >
                {randomblur(blurNums)}
              </td>

              <td
                class="px-6 py-2 text-sm font-light whitespace-nowrap blur-sm"
              >
                {randomblur(blurNums)}
              </td>
              <td
                class="px-6 py-2 text-sm font-light whitespace-nowrap blur-sm"
              >
                {randomblur(blurNums)}
              </td>
            </tr>
            <tr class="">
              <td
                class="px-6 py-2 text-sm font-medium whitespace-nowrap"
                >Customs clearance fees</td
              >
              <td
                colspan="1"
                class="px-6 py-2 text-sm font-light text-center whitespace-nowrap blur-sm"
              >
                {randomblur(blurNums)}
              </td>
              <td
                class="px-6 py-2 text-sm font-light whitespace-nowrap blur-sm"
              >
                {randomblur(blurNums)}
              </td>
              <td
                class="px-6 py-2 text-sm font-light whitespace-nowrap blur-sm"
              >
                {randomblur(blurNums)}
              </td>
            </tr>
            <tr class="">
              <td
                class="px-6 py-2 text-sm font-medium whitespace-nowrap"
                >Carrying cost</td
              >
              <td
                class="px-6 py-2 text-sm font-light whitespace-nowrap blur-sm"
              >
                {randomblur(blurNums)}
              </td>
              <td
                class="px-6 py-2 text-sm font-light whitespace-nowrap blur-sm"
              >
                {randomblur(blurNums)}
              </td>
              <td
                class="px-6 py-2 text-sm font-light whitespace-nowrap blur-sm"
              >
                {randomblur(blurNums)}
              </td>
            </tr>

            <!--  -->
            <tr >
              <td
                class="px-6 py-2 text-sm font-medium whitespace-nowrap"
                >Sales</td
              >
              <td
                class="px-6 py-2 text-sm font-light whitespace-nowrap blur-sm"
              >
                {randomblur(blurNums)}
              </td>
              <td
                class="px-6 py-2 text-sm font-light whitespace-nowrap blur-sm"
              >
                {randomblur(blurNums)}
              </td>
              <td
                class="px-6 py-2 text-sm font-light whitespace-nowrap blur-sm"
              >
                {randomblur(blurNums)}
              </td>
            </tr>
            <tr class="border border-t border-t-b9b9">
              <td
                class="px-6 py-2 pt-4 text-sm font-medium whitespace-nowrap"
                >Annual Savings</td
              >
              <td
                class="px-6 py-2 pt-4 text-sm font-light whitespace-nowrap blur-sm"
              >
                {randomblur(totalNums)}
              </td>
              <td
                class="px-6 py-2 pt-4 text-sm font-light whitespace-nowrap blur-sm"
              >
                {randomblur(totalNums)}
              </td>
              <td
                class="px-6 py-2 pt-4 text-sm font-light whitespace-nowrap blur-sm"
              >
                {randomblur(totalNums)}
              </td>
            </tr>
          </tbody>
        </table>

  </div>
  </div>
</section>
