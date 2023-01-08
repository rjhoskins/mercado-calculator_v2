import { writable, derived } from 'svelte/store';

export const ShowModalStore = writable(false);
export const DetailsCompletedStore = writable(false);
export const AllFormsSumittedStore = writable(false);
export const DetailsFormDataStore = writable({
   industry: '',
   firstName: '',
   lastName: '',
   phone: '',
   companyName: '',
   companyEmailAddress: '',
});

export const ImportsFormDataStore = writable({
   numberOfImportPos: '',
   avgNumPOChanges: '',
   avgCostPerHour: '',
   systems: '',
});

export const blurString = '$375,000';
export const randomDigitMoneyString = (length) => ` $${new Intl.NumberFormat('en-US', {}).format(string)}`

export const resultsFirstName = derived(DetailsFormDataStore, $DetailsFormDataStore => $DetailsFormDataStore.firstName.trim());
export const numberOfImportPos = derived(ImportsFormDataStore, $ImportsFormDataStore => $ImportsFormDataStore.numberOfImportPos);
export const avgNumPOChanges = derived(ImportsFormDataStore, $ImportsFormDataStore => $ImportsFormDataStore.avgNumPOChanges);
export const resultsTotalSavings = derived(ImportsFormDataStore, $ImportsFormDataStore => ` $${new Intl.NumberFormat('en-US', {}).format((25 * $ImportsFormDataStore.numberOfImportPos) + (25 * $ImportsFormDataStore.numberOfImportPos * $ImportsFormDataStore.avgNumPOChanges))}`);





