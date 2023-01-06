<script>
		import { blurString, resultsFirstName, resultsTotalSavings  } from './../store.js';   
    import Confetti from './Confetti.svelte';   
    import Button from './Button.svelte';
    import NemberedCircleIcon from './NemberedCircle Icon.svelte';
  import { text } from 'svelte/internal';

    // $: {console.table(blurString, $resultsFirstName, $resultsTotalSavings );}

</script>

<section class="relative w-full mt-8 text-center ">

  <div class="z-10 w-full gap-4 p-4 mx-auto space-y-6 leading-7 bg-white shadow-lg max-w-mercado-max lg:rounded-t-2xl sm:p-4 md:p-6 lg:p-16 place-items-center place-center">
   <Confetti />
    <h2 class="max-w-xl mx-auto mt-6 text-2xl font-bold md:text-3xl text-yellowz" >Realize {$resultsTotalSavings}+ in potential savings just from your international purchasing processes, {$resultsFirstName}!</h2>
    <p class="max-w-xl mx-auto">Mercado also offers further savings across your air and ocean freight spend, customs clearance fees, carrying costs, and increased availability of goods for sales</p>
      <p class="font-bold">Book a session with the Mercado team to find out more.</p>
<Button link='/roi-demo' textBlack="true" text='BOOK YOUR ROI DEMO'  />
        <p class="font-bold">To calculate this ROI snapshot, we have focused on two value levers:</p>
        <div class="grid-cols-8 leading-7 text-left md:grid">
          <ul class="flex-col col-span-3 mb-6 space-y-6 md:flex md:mb-0 justify-evenly ">
            
            <li class="flex items-center"><NemberedCircleIcon number='1'/><span class="ml-3 text-2xl font-bold">Issuance of original PO savings</span></li>
            <li class="flex items-center"><NemberedCircleIcon number='2'/><span class="ml-3 text-2xl font-bold">PO changes savings</span></li>
          </ul>
          <div class="relative hidden col-span-1 md:block">
            <div class="absolute bg-black top-0 right-1/2  w-4 h-[1px]"></div>
            <div class="absolute bg-black left-1/2 top-0 w-[1px] h-full"></div>
            <div class="absolute bottom-0 right-1/2 w-4 h-[1px] bg-black"></div>
          </div>
          <div class="col-span-4 space-y-6 leading-7">
            <p>By digitizing the international Purchase Order, Mercado can provide a time-based saving of up to 50% through improved operating efficiencies and automated work flows to collaborate with your suppliers.</p>
            <p>
              <span class="font-bold">Want to save more?</span> <br>
              <a class="underline text-medBlue hover:text-black" href="/roi-demo">Click here</a> to book an ROI demo.
            </p>
          </div>
        </div>
  </div>
</section>
