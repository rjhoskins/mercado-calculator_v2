<script>

    export let detailsCompleted = false

    const baseTabClass = ' w-full text-white rounded-t-2xl py-3 '
    const inactiveTabClass = 'rounded-t-2xl '


    const activeTabClass = ' bg-white border-white rounded-b-2xl text-darkTextGrayish '

</script>

<div class="absolute top-0 left-0 right-0 flex justify-around w-full ">
    <button class=" { detailsCompleted ? `${baseTabClass} ${inactiveTabClass}` : `${baseTabClass} ${activeTabClass}`} rounded-bl-none rounded-tr-none">
        YOUR DETAILS
    </button>

    <button class=" { !detailsCompleted ? `${baseTabClass} ${inactiveTabClass}` : `${baseTabClass} ${activeTabClass}`} rounded-tl-none rounded-br-none">
        YOUR IMPORTS
    </button>
</div>