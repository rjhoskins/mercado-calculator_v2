<script>
    import { ShowModalStore } from '../store';
    // your script goes here
    import { fade } from 'svelte/transition';
    import {createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher();
    export let showImportsModal;
    import { MODAL_MESSAGES } from '../constants';
    export let messagesKey = Object.keys(MODAL_MESSAGES)[0]

    const handleClick = () => dispatch('modalClosed')



</script>

{#if $ShowModalStore }
     <!-- content here -->
     
     <section transition:fade on:click|self={handleClick} class="absolute z-30 w-full h-full -translate-x-1/2 -translate-y-1/2 rounded-2xl backdropz bg-black/30 left-1/2 top-1/2">
        <div class="relative p-4 space-y-4 w-[90%] text-sm -translate-x-1/2 -translate-y-1/2 bg-white modal rounded-2xl left-1/2 top-1/2 pr-16">
            <button class="absolute top-6 right-6 text-darkTextGrayish" on:click|preventDefault={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                
                
                
            </button>
            <h6 class="font-bold">{MODAL_MESSAGES[messagesKey].title}</h6>
            <p>{MODAL_MESSAGES[messagesKey].text}</p>
        </div>
    </section>
    {/if}