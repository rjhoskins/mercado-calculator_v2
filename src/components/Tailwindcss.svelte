<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  .sizes {
    @apply border-2 border-yellow-400 border-dashed sm:border-green-400 md:border-purple-400 lg:border-orange-500 xl:border-red-500;
  }
  /* * > * {
    border: 1px solid red
  } */
  @layer utilities {
    .the-special {
      clip-path: polygon(
        50% 0%,
        100% 0,
        100% calc(100% - 150px),
        calc(100% - 150px) 100%,
        0 100%,
        0 0
      );
    }
    .no-spinner {
  -moz-appearance: textfield;
}

.no-spinner::-webkit-outer-spin-button,
.no-spinner::-webkit-inner-spin-button {
  margin: 0;
  -webkit-appearance: none;
}
  }
</style>
