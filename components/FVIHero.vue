<template>
  <div class="fvi-hero">
    <FVILogo />
    <svg title>
      <text id="l" x="50%" y="50%" dominant-baseline="middle">
        Fruit & Vegetable
      </text>
      <text id="s" x="50%" y="50%" dominant-baseline="middle">
        <tspan x="50%" y="25">Fruit &</tspan>
        <tspan x="50%" y="75">Vegetable</tspan>
      </text>
    </svg>
    <div center class="ident">Identifier</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import FVILogo from './FVILogo.vue'

@Component({
  components: {
    FVILogo
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
  }

  svg[title] {
    width: 100vw;
    height: 55px;

    text#s {
      display: none;
    }
    @media only screen and (max-width: 400px) {
      height: 110px;
      text#l {
        display: none;
      }
      text#s {
        display: block;
      }
    }

    margin-top: 20px;
    font: inherit;

    text {
      fill: none;
      stroke: currentColor;
      stroke-linejoin: round;
      font-size: 3em;
      font-weight: bolder;
      text-anchor: middle;
    }
  }
}
</style>
