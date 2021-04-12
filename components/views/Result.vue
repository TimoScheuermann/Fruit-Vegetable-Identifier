<template>
  <div class="view-result">
    <div class="reset-button" v-if="result" @click="reset">
      <i class="ti-chevron-left" />
    </div>

    <template v-if="result">
      <div class="hero-wrapper">
        <img :src="prediction.thumbnail" alt="" />
      </div>
      <div center content max-width>
        <div class="head-wrapper">
          <div class="input-image">
            <img :src="$store.getters.src" alt="" />
          </div>
          <div class="result">
            <div class="title">{{ prediction.title }}</div>
            <div class="perc">{{ perc }} %</div>
          </div>
        </div>

        <div class="nutrition-list">
          <div class="nutrition-list-item" v-for="n in nutrition" :key="n.key">
            <div class="title">{{ n.title }}</div>
            <div class="amount">{{ prediction.nutrition[n.key] }}</div>
          </div>
        </div>

        <FVISection>
          <h1>Informationen</h1>
          <p v-for="(i, j) in prediction.information" :key="j">{{ i }}</p>
        </FVISection>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { FVIClass, Prediction } from '~/static/interfaces'
import FVIClasses from '~/static/FVIClasses'
import FVISection from '../FVISection.vue'

@Component({
  components: {
    FVISection
  }
})
export default class Result extends Vue {
  public nutrition = [
    { key: 'calories', title: 'Kalorien' },
    { key: 'carbs', title: 'Carbs' },
    { key: 'fats', title: 'Fette' },
    { key: 'proteins', title: 'Proteine' },
    { key: 'sugars', title: 'Zucker' }
  ]

  public result: null | Prediction = null

  mounted() {
    this.result = this.$store.getters.result
  }

  get perc(): number {
    if (!this.result) return 0
    return Math.round(this.result.prop * 10000) / 100
  }

  get prediction(): FVIClass | null {
    if (!this.result) return null
    return FVIClasses[this.result.class]
  }

  public reset(): void {
    this.$store.commit('src', null)
  }
}
</script>

<style lang="scss" scoped>
.view-result {
  min-height: 100vh;
  position: relative;

  [content] {
    padding-top: 20px;
  }

  .reset-button {
    position: absolute;
    top: calc(20px + env(safe-area-inset-top));
    left: calc(20px + env(safe-area-inset-left));
    z-index: 1000;
    height: 40px;
    width: 40px;
    border-radius: $border-radius;
    display: grid;
    place-content: center;
    cursor: pointer;

    @media #{$isLight} {
      @include backdrop-blur($color_dark);
      color: $color;
    }
    @media #{$isDark} {
      @include backdrop-blur($color);
      color: $color_dark;
    }
  }

  .hero-wrapper {
    height: 250px;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 0 0 20px 20px;
      box-shadow: $shadow-light;
    }
  }

  .head-wrapper {
    display: inline-grid;
    grid-template-columns: auto 1fr;
    grid-gap: 20px;

    .input-image {
      height: 60px;
      width: 60px;
      border-radius: 20px;

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: inherit;
      }
    }
    .result {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      .title {
        font-weight: bold;
        font-size: 30px;
      }
      .perc {
        font-size: 14px;
        font-weight: bold;
        opacity: 0.4;
      }
    }
  }

  .nutrition-list {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    grid-gap: 10px;

    .nutrition-list-item {
      padding: 20px;
      border-radius: $border-radius;

      @media #{$isLight} {
        background: $color_dark;
      }
      @media #{$isDark} {
        background: $color;
      }

      .title {
        font-weight: 600;
        font-size: 18px;
        opacity: 0.5;
      }
      .amount {
        margin-top: 5px;
      }
    }
  }

  h3 {
    margin-top: 50px;
    text-align: left;
  }
  p {
    text-align: left;
  }
}
</style>
