<template>
  <div class="fvi-loader">
    <FVILogo />
    <div class="loader-circles" />
    <p>Bild wird analysiert...</p>
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
export default class FVILoader extends Vue {}
</script>

<style lang="scss" scoped>
.fvi-loader {
  position: relative;
  height: 60px;
  margin: 10px 0 20px;
  display: inline-block;
  vertical-align: middle;

  svg {
    position: static;
    width: 60px;
    height: 60px;
    transform: scale(0.7);
    animation: loader-svg 1.704s ease alternate infinite;
  }

  .loader-circles {
    width: 8px;
    height: 8px;
    background: currentColor;
    border-radius: 50%;
    position: absolute;
    left: calc(50% - 4px);
    top: calc(50% - 4px);
    transition: all 1s ease;
    animation: loader-circles 1.704s ease-in-out alternate infinite;
  }

  @keyframes loader-circles {
    0% {
      box-shadow: 0 0 0 currentColor;
      opacity: 1;
      transform: rotate(0deg);
    }
    50% {
      box-shadow: 24px -22px currentColor, 30px -15px 0 -3px currentColor,
        31px 0px currentColor, 29px 9px 0 -3px currentColor,
        24px 23px currentColor, 17px 30px 0 -3px currentColor,
        0px 33px currentColor, -10px 28px 0 -3px currentColor,
        -24px 22px currentColor, -29px 14px 0 -3px currentColor,
        -31px -3px currentColor, -30px -11px 0 -3px currentColor,
        -20px -25px currentColor, -12px -30px 0 -3px currentColor,
        5px -29px currentColor, 13px -25px 0 -3px currentColor;
      transform: rotate(180deg);
    }
    100% {
      opacity: 0;
      transform: rotate(360deg);
      box-shadow: 25px -22px currentColor, 15px -22px 0 -3px black,
        31px 2px currentColor, 21px 2px 0 -3px black, 23px 25px currentColor,
        13px 25px 0 -3px black, 0px 33px currentColor, -10px 33px 0 -3px black,
        -26px 24px currentColor, -19px 17px 0 -3px black, -32px 0px currentColor,
        -23px 0px 0 -3px black, -25px -23px currentColor,
        -16px -23px 0 -3px black, 0px -31px currentColor,
        -2px -23px 0 -3px black;
    }
  }
  @keyframes loader-svg {
    0% {
      transform: scale(0) rotate(0deg);
    }
    100% {
      transform: scale(0.7) rotate(360deg);
    }
  }
}
</style>
