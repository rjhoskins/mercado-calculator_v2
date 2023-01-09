<script>
    export let text 
    export let link;
    export let textBlack;
</script>

<a href={link} 
class="transition block w-fit mx-auto !my-6 px-4 py-3 !mt-8 !mb-6 text-sm font-bold text-black border-2 hover:border-2 hover:border-yellowz border-yellowz hover:bg-transparent {textBlack ? 'hover:text-white ': ' hover:text-darkBlue ' }  rounded-full hover bg-yellowz  "

>{text}</a>