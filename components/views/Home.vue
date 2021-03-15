<template>
  <div class="view-home">
    <div class="hero-wrapper">
      <img
        src="https://images.unsplash.com/photo-1535227798054-e4373ef3795a?w=1920&q=20"
        alt=""
      />
      <div class="hero-container">
        <FVILogo />
      </div>
    </div>
    <div center content max-width>
      <h1 success>Fruit & Vegetable</h1>
      <h2>Identifier</h2>

      <div class="transition-wrapper">
        <transition name="fade" mode="out-in">
          <p v-if="!modelLoaded">Modell wird geladen</p>
          <div v-else>
            <input
              @change="fileChanged"
              type="file"
              id="file"
              accept="image/png, image/jpeg"
            />
            <label for="file">
              <i class="ti-file"></i>
              <span>Wähle ein Bild</span>
            </label>
          </div>
        </transition>
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
        similique tenetur eius rem nemo eum eveniet sit quasi sunt magni
        molestiae laudantium impedit distinctio sapiente ullam voluptate
        obcaecati quae enim.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import FVILogo from '../FVILogo.vue'

@Component({
  components: {
    FVILogo
  }
})
export default class Home extends Vue {
  mounted() {
    this.$store.commit('loadModel')
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

  .hero-wrapper {
    height: 250px;
    position: relative;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      z-index: 0;
    }
    .hero-container {
      z-index: 10;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  h1 {
    margin: 0;
  }

  h2 {
    margin: 0;
    opacity: 0.5;
    font-style: italic;
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
