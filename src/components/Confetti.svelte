<script>
    import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';
    let played  = false;
    setTimeout(() => played = true, 3500)
  
    let controlsLayout
  </script>
  {#if !played}
     <!-- content here -->
     <div class="absolute top-0 -translate-x-1/2 left-1/2">
       <LottiePlayer
       src="https://assets9.lottiefiles.com/packages/lf20_rovf9gzu.json"
         autoplay="{true}"
         height="{600}"
         width="{600}"
         controls="{false}"
  background="transparent"
  controlsLayout={controlsLayout}

       />
     </div>
  {/if}
  