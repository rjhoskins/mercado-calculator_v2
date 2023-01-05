<script>
    import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';
  
    let controlsLayout = [
      'previousFrame',
      'playpause',
      'stop',
      'nextFrame',
      'progress',
      'frame',
      'loop',
      'spacer',
      'background',
      'snapshot',
      'zoom',
      'info',
    ];
  </script>
  
  <div class="absolute top-0 -translate-x-1/2 left-1/2">
    <LottiePlayer
    src="https://assets9.lottiefiles.com/packages/lf20_rovf9gzu.json"
      autoplay="{true}"
      loop="{true}"
      background="transparent"
      height="{600}"
      width="{600}"
    />
  </div>