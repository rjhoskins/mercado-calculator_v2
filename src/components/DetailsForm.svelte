<script>
  import { validateDetails } from '../schema';
  import {
    DetailsFormDataStore,
    DetailsCompletedStore,
    AllFormsSumittedStore,
  } from '../store';
  import { get } from 'svelte/store';
  import IndustrySelect from './IndustrySelect.svelte';
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  let mxp_vertical_industry;
  let firstname;
  let lastname;
  let phone;
  let company;
  let jobtitle;
  let email;
  let formErrors;

  $: {
    // console.log($DetailsFormDataStore);
    // console.log($DetailsCompletedStore);
    // console.log($AllFormsSumittedStore);
  }

  const handleSubmit = (e) => {
    formErrors = [];
    const currFormData = {
      mxp_vertical_industry,
      firstname,
      lastname,
      phone,
      company,
      jobtitle,
      email,
    };
    const results = validateDetails(currFormData);
    if (results.valid) {
      DetailsCompletedStore.update((curr) => (curr = true));
    }
    if (!results.valid) {
      formErrors = results?.data?.fieldErrors;
      console.log('not valid', formErrors);
    }
    if (!results.valid) formErrors = results?.data?.fieldErrors;
    DetailsFormDataStore.update(
      (curr) =>
        (curr = {
          mxp_vertical_industry,
          firstname,
          lastname,
          phone,
          company,
          jobtitle,
          email,
        })
    );
  };

  const handleIndustryChange = (e) => (mxp_vertical_industry = e.detail);
</script>

<form on:submit|preventDefault={handleSubmit} class="space-y-8">
  <div class="space-y-8 ">
    <div class="grid-cols-1 sm:grid gap-y-6 gap-x-4 sm:grid-cols-6">
      <div class="sm:col-span-3">
        <label for="firstname" class="block text-sm font-medium text-white"
          >First name</label
        >
        <div class="mt-1">
          <input
            type="text"
            bind:value={firstname}
            placeholder="Chris"
            name="firstname"
            id="firstname"
            autocomplete="given-name"
            class="block w-full px-6 pl-0 bg-transparent border-transparent border-b-darkTextGrayish placeholder-darkTextGrayish text-darkTextGrayish focus:border-yellowz focus:ring-yellowz sm:text-sm"
          />
        </div>
        {#if formErrors?.firstname}
           <!-- content here -->
           <p class="mt-2 text-xs text-red-600" id="">{formErrors.firstname[0]}</p>
        {/if}
      </div>

      <div class="sm:col-span-3">
        <label for="lastname" class="block text-sm font-medium text-white"
          >Last name</label
        >
        <div class="mt-1">
          <input
            type="text"
            bind:value={lastname}
            placeholder="Smith"
            name="lastname"
            id="lastname"
            autocomplete="family-name"
            class="block w-full px-6 pl-0 bg-transparent border-transparent border-b-darkTextGrayish placeholder-darkTextGrayish text-darkTextGrayish focus:border-yellowz focus:ring-yellowz sm:text-sm"
          />
        </div>
        {#if formErrors?.lastname}
        <!-- content here -->
        <p class="mt-2 text-xs text-red-600" id="">{formErrors.lastname[0]}</p>
     {/if}
      </div>

      <div class="sm:col-span-3">
        <label for="phone" class="block text-sm font-medium text-white"
          >Phone number</label
        >
        <div class="mt-1">
          <input
            type="tel"
            bind:value={phone}
            placeholder="800-555-5555"
            name="phone"
            id="phone"
            autocomplete="given-name"
            class="block w-full px-6 pl-0 bg-transparent border-transparent border-b-darkTextGrayish placeholder-darkTextGrayish text-darkTextGrayish focus:border-yellowz focus:ring-yellowz sm:text-sm"
          />
        </div>
        {#if formErrors?.phone}
        <!-- content here -->
        <p class="mt-2 text-xs text-red-600" id="">{formErrors.phone[0]}</p>
     {/if}
      </div>

      <IndustrySelect formError={formErrors?.mxp_vertical_industry} on:industryChange={handleIndustryChange} />

      <div class="sm:col-span-3">
        <label for="company" class="block text-sm font-medium text-white"
          >Company name</label
        >
        <div class="mt-1">
          <input
            type="text"
            bind:value={company}
            placeholder="ABC Suppliers"
            name="company"
            id="company"
            autocomplete="company"
            class="block w-full px-6 pl-0 text-sm bg-transparent border-transparent border-b-darkTextGrayish placeholder-darkTextGrayish text-darkTextGrayish focus:border-yellowz focus:ring-yellowz"
          />
        </div>
        {#if formErrors?.company}
        <!-- content here -->
        <p class="mt-2 text-xs text-red-600" id="">{formErrors.company[0]}</p>
     {/if}
      </div>


      <div class="sm:col-span-3">
        <label for="jobtitle" class="block text-sm font-medium text-white"
          >Job title</label
        >
        <div class="mt-1">
          <input
            type="text"
            bind:value={jobtitle}
            placeholder="Head of Supply Chain"
            name="jobtitle"
            id="jobtitle"
            autocomplete="jobtitle"
            class="block w-full px-6 pl-0 bg-transparent border-transparent border-b-darkTextGrayish placeholder-darkTextGrayish text-darkTextGrayish focus:border-yellowz focus:ring-yellowz sm:text-sm"
          />
        </div>
        {#if formErrors?.jobtitle}
           <!-- content here -->
           <p class="mt-2 text-xs text-red-600" id="">{formErrors.jobtitle[0]}</p>
        {/if}
      </div>

      <div class="col-span-6">
        <label for="email" class="block text-sm font-medium text-white"
          >Company email address</label
        >
        <div class="mt-1">
          <input
            type="text"
            bind:value={email}
            placeholder="email@abcsuppliers.com"
            name="email"
            id="email"
            autocomplete="email"
            class="block w-full px-6 pl-0 bg-transparent border-transparent border-b-darkTextGrayish placeholder-darkTextGrayish text-darkTextGrayish focus:border-yellowz focus:ring-yellowz sm:text-sm"
          />
          {#if formErrors?.email}
          <!-- content here -->
          <p class="mt-2 text-xs text-red-600" id="">{formErrors.email[0]}</p>
       {/if}
        </div>
      </div>
    </div>

    <button
      type="submit"
      class="transition block w-full px-4 py-3 !my-6 text-sm font-bold text-black border-2 hover:border-2 hover:border-yellowz border-yellowz hover:bg-transparent hover:text-white rounded-full hover bg-yellowz  "
      >Next</button
    >
  </div>
</form>
