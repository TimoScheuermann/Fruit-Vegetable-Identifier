<template>
  <div class="view-predicting">
    <div center content max-width>
      <h1>Analyse läuft</h1>
      <div class="input-image">
        <img :src="$store.getters.src" alt="" />
      </div>

      <div class="cssload-dots">
        <div class="cssload-dot"></div>
        <div class="cssload-dot"></div>
        <div class="cssload-dot"></div>
        <div class="cssload-dot"></div>
        <div class="cssload-dot"></div>
      </div>

      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              result="blur"
              stdDeviation="12"
            ></feGaussianBlur>
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0	0 1 0 0 0	0 0 1 0 0	0 0 0 18 -7"
              result="goo"
            ></feColorMatrix>
            <!--<feBlend in2="goo" in="SourceGraphic" result="mix" ></feBlend>-->
          </filter>
        </defs>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Predicting extends Vue {}
</script>

<style lang="scss" scoped>
.view-predicting {
  min-height: 100vh;

  h1 {
    margin-top: 0;
  }

  .input-image {
    height: 200px;
    width: 200px;
    border-radius: 60px;
    margin: 0 auto 150px;
    img {
      height: 100%;
      width: 100%;
      border-radius: inherit;
    }

    animation: wobble 1.3s ease-in-out 0s infinite alternate-reverse both;
  }

  @keyframes wobble {
    from {
      transform: rotate(-5deg);
    }
    to {
      transform: rotate(5deg);
    }
  }

  .cssload-dots {
    width: 0;
    height: 0;
    position: relative;
    margin: auto;
    outline: 1px solid red;
    filter: url(#goo);
  }

  .cssload-dot {
    width: 0;
    height: 0;
    position: absolute;
    left: 0;
    top: 0;
  }
  .cssload-dot:before {
    content: '';
    width: 44px;
    height: 44px;
    border-radius: 63px;
    background: rgb(251, 211, 1);
    position: absolute;
    left: 50%;
    transform: translateY(0);
    margin-left: -21.5px;
    margin-top: -21.5px;
  }

  .cssload-dot:nth-child(5):before {
    z-index: 100;
    width: 56.5px;
    height: 56.5px;
    margin-left: -28.75px;
    margin-top: -28.75px;
    animation: cssload-dot-colors 4.6s ease infinite;
  }

  .cssload-dot:nth-child(1) {
    animation: cssload-dot-rotate-1 4.6s 0s linear infinite;
  }
  .cssload-dot:nth-child(1):before {
    background-color: rgb(255, 50, 112);
    animation: cssload-dot-move 4.6s 0s ease infinite;
  }

  .cssload-dot:nth-child(2) {
    animation: cssload-dot-rotate-2 4.6s 1.15s linear infinite;
  }
  .cssload-dot:nth-child(2):before {
    background-color: $success;
  }

  .cssload-dot:nth-child(3) {
    animation: cssload-dot-rotate-3 4.6s 2.3s linear infinite;
  }
  .cssload-dot:nth-child(3):before {
    background-color: rgb(175, 225, 2);
    animation: cssload-dot-move 4.6s 2.3s ease infinite;
  }

  .cssload-dot:nth-child(4) {
    animation: cssload-dot-rotate-4 4.6s 3.45s linear infinite;
  }
  .cssload-dot:nth-child(4):before {
    background-color: rgb(251, 211, 1);
    animation: cssload-dot-move 4.6s 3.45s ease infinite;
  }

  @keyframes cssload-dot-move {
    0% {
      transform: translateY(0);
    }
    18%,
    22% {
      transform: translateY(-88px);
    }
    40%,
    100% {
      transform: translateY(0);
    }
  }

  @keyframes cssload-dot-colors {
    0% {
      background-color: rgb(251, 211, 1);
    }
    25% {
      background-color: rgb(255, 50, 112);
    }
    50% {
      background-color: $success;
    }
    75% {
      background-color: rgb(175, 225, 2);
    }
    100% {
      background-color: rgb(251, 211, 1);
    }
  }

  @keyframes cssload-dot-rotate-1 {
    0% {
      transform: rotate(-105deg);
    }
    100% {
      transform: rotate(270deg);
    }
  }

  @keyframes cssload-dot-rotate-2 {
    0% {
      transform: rotate(165deg);
    }
    100% {
      transform: rotate(540deg);
    }
  }

  @keyframes cssload-dot-rotate-3 {
    0% {
      transform: rotate(435deg);
    }
    100% {
      transform: rotate(810deg);
    }
  }

  @keyframes cssload-dot-rotate-4 {
    0% {
      transform: rotate(705deg);
    }
    100% {
      transform: rotate(1080deg);
    }
  }
}
</style>
