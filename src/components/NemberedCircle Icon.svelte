<script>
  export let number;
</script>

<div class="relative inline-block text-yellowz">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
      <!-- <circle r="100" stroke="black" stroke-width="1" fill="red"  /> -->
      <circle cx="50%" cy="50%" r="12" />
      </svg>
      <span class="absolute z-10 text-black -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">{number}</span>
</div>
  