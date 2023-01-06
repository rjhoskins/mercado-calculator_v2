<script>
    import { fade } from 'svelte/transition';
    import { DetailsCompletedStore, ShowModalStore } from '../store';
    export let detailsCompleted
    export let showImportsModal;



    const baseTabClass = 'font-bold text-lg w-full text-darkTextGrayish py-3 cursor-auto'
    const inactiveTabClass = ' bg-white text-darkTextGrayish '
    const activeTabClass = ' bg-darkBlue text-white rounded-2xl'
    

</script>

<div class="relative flex justify-around w-full cursor-none">


    <!-- <div class="absolute h-2 w-2 bg-darkBlue  left-[50%] bottom-0 after:z-10 after:bg-white after:h-4 after:w-4 after:bottom-0 after:rounded-full after:absolute " />  ^^works for detailsCompleted = true (showing details as active) -->
    <!-- <div class="absolute h-2 w-2 bg-darkBlue  right-[50%] bottom-0 after:z-10 after:bg-white after:h-4 after:w-4 after:bottom-0 after:right-0 after:rounded-full after:absolute " />  works for detailsCompleted = false (showing imports as active) -->
    <div class="absolute bottom-0 w-2 h-2 bg-darkBlue after:z-10 after:bg-white after:h-4 after:w-4 after:bottom-0 after:rounded-full after:absolute 
    {$DetailsCompletedStore ?' right-[50%] after:right-0 ' : ' left-[50%] after:left-0 '}" />      
    
    {#if $ShowModalStore}
    <div transition:fade class="absolute top-0 right-0 z-10 w-1/2 h-full cursor-auto bg-black/30 rounded-t-2xl"/>
    {/if}
    <button class=" { $DetailsCompletedStore ? `${baseTabClass} ${inactiveTabClass}` : `${baseTabClass} ${activeTabClass}`} rounded-br-none rounded-bl-none">
        YOUR DETAILS
    </button>
    
    <button class=" { !$DetailsCompletedStore ? `${baseTabClass} ${false}` : `${baseTabClass} ${activeTabClass}`} rounded-br-none rounded-bl-none">
        YOUR IMPORTS

    </button>
</div>