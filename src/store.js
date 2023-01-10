import { writable, derived, get } from 'svelte/store';

export const ShowModalStore = writable(false);
export const DetailsCompletedStore = writable(false);
export const AllFormsSumittedStore = writable(false);
export const DetailsFormDataStore = writable({
   mxp_vertical_industry: '',
   firstname: '',
   lastname: '',
   phone: '',
   company: '',
   jobtitle: '',
   email: '',
});

export const ImportsFormDataStore = writable({
   import_entries_per_year: '',
   avg_num_po_changes: '',
   avg_cost_per_hour: '',
   current_system: '',
});

export const resultsFirstName = derived(DetailsFormDataStore, $DetailsFormDataStore => $DetailsFormDataStore.firstname.trim());
// export const resultsFirstName = derived(ImportsFormDataStore, $ImportsFormDataStore => $ImportsFormDataStore.import_entries_per_year);
export const numberOfImportPos = derived(ImportsFormDataStore, $ImportsFormDataStore => $ImportsFormDataStore.import_entries_per_year);
export const avgNumPOChanges = derived(ImportsFormDataStore, $ImportsFormDataStore => $ImportsFormDataStore.avg_num_po_changes);
export const resultsTotalSavings = derived(ImportsFormDataStore, $ImportsFormDataStore => ` $${new Intl.NumberFormat('en-US', {}).format((25 * $ImportsFormDataStore.import_entries_per_year) + (25 * $ImportsFormDataStore.import_entries_per_year * $ImportsFormDataStore.avg_num_po_changes))}`);





