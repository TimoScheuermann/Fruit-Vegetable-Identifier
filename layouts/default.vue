<template>
  <Nuxt />
</template>

<style lang="scss">
html {
  font-family: -apple-system, BlinkMacSystemFont, SF Pro Display, Segoe UI,
    Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,
    Segoe UI Symbol;
  scroll-behavior: smooth;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;

  overflow-x: hidden;

  @media #{$isLight} {
    @include custom-scrollbar__light();
    background: $background;
    color: $color;
  }

  @media #{$isDark} {
    @include custom-scrollbar__dark();
    background: $background_dark;
    color: $color_dark;
  }
}
body {
  margin: 0;
}

[center] {
  text-align: center;
}

[success] {
  color: $success;
}

[content] {
  padding-top: calc(70px + env(safe-area-inset-top));
  padding-bottom: calc(20px + env(safe-area-inset-bottom));
  padding-left: calc(5vw + env(safe-area-inset-left));
  padding-right: calc(5vw + env(safe-area-inset-right));
}

[max-width] {
  max-width: 500px;
  margin: 0 auto;
}
</style>
