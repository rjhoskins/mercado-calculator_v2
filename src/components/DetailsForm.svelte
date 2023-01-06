<script>
  import {
    DetailsFormDataStore,
    DetailsCompletedStore,
    AllFormsSumittedStore,
  } from '../store';
  import { get } from 'svelte/store';
  import IndustrySelect from './IndustrySelect.svelte';
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  let industry;
  let firstName;
  let lastName;
  let phone;
  let compnanyName;
  let companyEmailAddress;

  $: {
    // console.log($DetailsFormDataStore);
    // console.log($DetailsCompletedStore);
    // console.log($AllFormsSumittedStore);
  }

  const handleSubmit = (e) => {
    DetailsFormDataStore.update(
      (curr) =>
        (curr = {
          industry,
          firstName,
          lastName,
          phone,
          compnanyName,
          companyEmailAddress,
        })
    );
    DetailsCompletedStore.update((curr) => (curr = true));
  };

  const handleIndustryChange = (e) => (industry = e.detail);
</script>

<form on:submit|preventDefault={handleSubmit} class="space-y-8">
  <div class="space-y-8 ">
    <div class="grid-cols-1 sm:grid gap-y-6 gap-x-4 sm:grid-cols-6">
      <div class="sm:col-span-3">
        <label for="firstName" class="block text-sm font-medium text-white"
          >First name</label
        >
        <div class="mt-1">
          <input
            type="text"
            bind:value={firstName}
            placeholder="Chris"
            name="firstName"
            id="firstName"
            autocomplete="given-name"
            class="block w-full px-6 pl-0 bg-transparent border-transparent border-b-darkTextGrayish placeholder-darkTextGrayish text-darkTextGrayish focus:border-yellowz focus:ring-yellowz sm:text-sm"
          />
        </div>
      </div>

      <div class="sm:col-span-3">
        <label for="lastName" class="block text-sm font-medium text-white"
          >Last name</label
        >
        <div class="mt-1">
          <input
            type="text"
            bind:value={lastName}
            placeholder="Smith"
            name="lastName"
            id="lastName"
            autocomplete="family-name"
            class="block w-full px-6 pl-0 bg-transparent border-transparent border-b-darkTextGrayish placeholder-darkTextGrayish text-darkTextGrayish focus:border-yellowz focus:ring-yellowz sm:text-sm"
          />
        </div>
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
      </div>

      <IndustrySelect on:industryChange={handleIndustryChange} />

      <div class="col-span-6">
        <label for="compnanyName" class="block text-sm font-medium text-white"
          >Company name</label
        >
        <div class="mt-1">
          <input
            type="text"
            bind:value={compnanyName}
            placeholder="ABC Suppliers"
            name="compnanyName"
            id="compnanyName"
            autocomplete="compnanyName"
            class="block w-full px-6 pl-0 text-sm bg-transparent border-transparent border-b-darkTextGrayish placeholder-darkTextGrayish text-darkTextGrayish focus:border-yellowz focus:ring-yellowz"
          />
        </div>
      </div>

      <div class="col-span-6">
        <label
          for="companyEmailAddress"
          class="block text-sm font-medium text-white"
          >Company email address</label
        >
        <div class="mt-1">
          <input
            type="text"
            bind:value={companyEmailAddress}
            placeholder="email@abcsuppliers.com"
            name="companyEmailAddress"
            id="companyEmailAddress"
            autocomplete="companyEmailAddress"
            class="block w-full px-6 pl-0 bg-transparent border-transparent border-b-darkTextGrayish placeholder-darkTextGrayish text-darkTextGrayish focus:border-yellowz focus:ring-yellowz sm:text-sm"
          />
        </div>
      </div>
    </div>

    <button
      type="submit"
      class="block w-full px-4 py-3 !my-6 text-sm font-bold text-black border-2 hover:border-2 hover:border-yellowz border-yellowz hover:bg-transparent hover:text-white rounded-full hover bg-yellowz  "
      >Next</button
    >
  </div>
</form>
