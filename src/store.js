import { writable } from 'svelte/store';

export const ShowModalStore = writable(false);
export const DetailsCompletedStore = writable(false);
export const DetailsFormDataStore = writable({
   industry: 'hi',
   firstName: 'hello',
   lastName: '',
   phone: '',
   compnanyName: '',
   companyEmailAddress: '',
});

export const ImportsFormDataStore = writable({
   numberOfImportPos: '',
   avgNumPOChanges: '',
   avgCostPerHour: '',
   systems: '',
});

