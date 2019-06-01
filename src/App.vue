<template>
  <div id="app" class="h-full w-full">
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Raleway:100,200,300,400,600&display=swap');

@tailwind base;

@tailwind components;

html, body {
  @apply .h-full .m-0;
}

@import './assets/css/tooltip.css';

@tailwind utilities;

.text-shadow {
  text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.8);
}

.text-shadow-md {
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
}
</style>
