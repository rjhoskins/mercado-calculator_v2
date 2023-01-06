import { writable } from 'svelte/store';

export const ShowModalStore = writable(false);
export const detailsCompletedStore = writable(false);
export const detailsDataStore = writable({
   industry: '',
   firstName: '',
   lastName: '',
   phone: '',
   compnanyName: '',
   companyEmailAddress: '',
});
export const importsDataStore = writable({
   numberOfImportPos: '',
   avgNumPOChanges: '',
   avgCostPerHour: '',
   systems: '',
});

