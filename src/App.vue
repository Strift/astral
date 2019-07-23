<template>
  <div id="app" class="h-full w-full">
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Raleway:400,600&display=swap');

@font-face {
  font-family: "Market Deco";
  src: url("./assets/fonts/Market_Deco.ttf");
 }

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
