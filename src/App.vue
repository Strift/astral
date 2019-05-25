<template>
  <div id="app" class="h-full w-full">
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Raleway:100,400&display=swap');

@tailwind base;

@tailwind components;

html, body {
  @apply .h-full .m-0;
}

body {
  /*background-image: url('https://wallpaperplay.com/walls/full/3/0/7/17345.jpg');*/
  background-image: url('./assets/background.jpg');
  @apply .bg-cover;
}

@tailwind utilities;

.text-shadow {
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
}
</style>
