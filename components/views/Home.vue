<template>
  <div class="view-home">
    <FVIHero />
    <div center content max-width>
      <div class="transition-wrapper">
        <transition name="fade" mode="out-in">
          <FVILoader v-if="src" />
          <p v-if="!modelLoaded">Modell wird geladen</p>
          <div v-else>
            <input
              @change="fileChanged"
              type="file"
              id="file"
              accept="image/png, image/jpeg"
            />
            <label for="file">
              <i class="ti-apple-alt"></i>
              <span>Wähle ein Bild</span>
            </label>
          </div>
        </transition>
      </div>

      <FVISection>
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
          similique tenetur eius rem nemo eum eveniet sit quasi sunt magni
          molestiae laudantium impedit distinctio sapiente ullam voluptate
          obcaecati quae enim.
        </p>
      </FVISection>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import FVIHero from '../FVIHero.vue'
import FVILoader from '../FVILoader.vue'
import FVILogo from '../FVILogo.vue'
import FVISection from '../FVISection.vue'

@Component({
  components: {
    FVILogo,
    FVILoader,
    FVISection,
    FVIHero
  }
})
export default class Home extends Vue {
  mounted() {
    this.$store.commit('loadModel')
  }

  get src(): string | null {
    return this.$store.getters.src
  }

  get modelLoaded(): boolean {
    return this.$store.getters.modelLoaded
  }

  public async fileChanged(e: Event): Promise<void> {
    this.$emit('fileChanged', e)
  }
}
</script>

<style lang="scss" scoped>
.view-home {
  min-height: 100vh;

  [content] {
    padding-top: 0px;
  }

  .transition-wrapper {
    margin: 50px 0;
    display: grid;
    place-content: center;
    input {
      position: fixed;
      top: 0;
      transform: scale(0);
    }

    label {
      display: block;
      cursor: pointer;
      background: $success;
      color: #fff;
      font-weight: 600;
      border-radius: $border-radius;
      padding: 10px;

      span {
        padding: 0 10px;
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.25s;
}
.fade-move {
  position: absolute;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
