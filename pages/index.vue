<template>
  <div class="fruit-vegetable-identifier">
    <transition name="slide-fullscreen" mode="in-out">
      <Result v-if="result" />
      <!-- <Predicting v-else-if="src" /> -->
      <Home v-else @fileChanged="fileChanged" />
    </transition>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Home from '~/components/views/Home.vue'
import Predicting from '~/components/views/Predicting.vue'
import Result from '~/components/views/Result.vue'
import { getInputImage, loadImage, predictImage } from '~/static/functions'
import { Prediction } from '~/static/interfaces'

@Component({
  components: {
    Home,
    Predicting,
    Result
  }
})
export default class Index extends Vue {
  get modelLoaded(): boolean {
    return this.$store.getters.modelLoaded
  }

  get result(): Prediction | null {
    return {
      class: 0,
      prop: 1
    }
    return this.$store.getters.result
  }

  get src(): string | null {
    return this.$store.getters.src
  }

  public async fileChanged(e: Event) {
    const src = await getInputImage(e)
    if (!src) return

    this.$store.commit('src', src)

    const image = await loadImage(src)

    if (!image) {
      this.$store.commit('src', null)
      return
    }

    const result = await predictImage(image, this.$store.state.model)
    this.$store.commit('result', result)
  }
}
</script>

<style lang="scss">
.fruit-vegetable-identifier {
  position: relative;
  max-width: 100vw;

  div[class^='view-'] {
    position: absolute;
    right: 0;
    left: 0;
    z-index: 10;

    @media #{$isLight} {
      background-color: $background;
    }
    @media #{$isDark} {
      background-color: $background_dark;
    }
  }
}

.slide-fullscreen-leave-to,
.slide-fullscreen-enter {
  opacity: 0;
  transform: translate(0, 100%);
  border-radius: 50vw;
}
.slide-fullscreen-enter {
  z-index: 12;
}

.slide-fullscreen-enter-active {
  transition: all 0.71s cubic-bezier(0.55, 0, 0.1, 1);
}
</style>
