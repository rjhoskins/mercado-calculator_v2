<script>

    export let showImports = true

    const baseTabClass = 'font-bold text-lg w-full text-darkTextGrayish py-3'
    const inactiveTabClass = ' bg-white text-darkTextGrayish '
    const activeTabClass = ' bg-darkBlue text-white rounded-2xl'
    

</script>

<div class="relative flex justify-around w-full">
    <div class="absolute  h-[.5rem] w-8  bg-darkBlue  left-[45%] bottom-0 " />
    <button class=" { !showImports ? `${baseTabClass} ${inactiveTabClass}` : `${baseTabClass} ${activeTabClass}`} rounded-br-none rounded-bl-none">
        YOUR DETAILS
    </button>
    
    <button class=" { showImports ? `${baseTabClass} ${false}` : `${baseTabClass} ${activeTabClass}`} rounded-br-none relative">
        YOUR IMPORTS
        <div class="absolute h-4 w-4 rounded-full bg-white z-20 left-[0] bottom-0  " />
    </button>
</div>