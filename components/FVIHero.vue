<template>
  <div class="fvi-hero">
    <FVILogo />
    <FVITitle />
    <div center class="ident">Identifier</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import FVILogo from './FVILogo.vue'
import FVITitle from './FVITitle.vue'

@Component({
  components: {
    FVILogo,
    FVITitle
  }
})
export default class FVIHero extends Vue {}
</script>

<style lang="scss" scoped>
.fvi-hero {
  display: grid;
  place-content: center;
  padding-top: calc(30px + env(safe-area-inset-top));
  padding-left: calc(30px + env(safe-area-inset-left));
  padding-right: calc(30px + env(safe-area-inset-right));
  padding-bottom: 30px;

  @media #{$isLight} {
    background: radial-gradient(rgba($background, 0), rgba($background, 1) 90%),
      url('~@/static/bg-pattern.svg');
  }

  @media #{$isDark} {
    background: radial-gradient(
        rgba($background_dark, 0),
        rgba($background_dark, 1) 90%
      ),
      url('~@/static/bg-pattern.svg');
  }

  background-repeat: repeat;

  .ident {
    font-size: 2em;
    font-weight: bold;

    animation: ident 0.6s ease-in-out 2.2s both;
  }
  .fvi-title {
    margin-top: 5px;
  }
}

@keyframes ident {
  from {
    opacity: 0;
    letter-spacing: -10px;
  }
  to {
    opacity: 1;
  }
}
</style>
