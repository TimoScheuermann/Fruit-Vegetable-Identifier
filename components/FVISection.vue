<template>
  <section class="fvi-section">
    <slot />
    <div class="spacer" v-if="spacer" />
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class FVISection extends Vue {
  @Prop({ default: true }) spacer!: boolean
}
</script>

<style lang="scss" scoped>
section.fvi-section {
  animation: move-up 0.4s ease-in-out 0.3s both;
  @media #{$isLight} {
    background-image: linear-gradient(
        rgba($paragraph, 0.5),
        rgba($paragraph, 0.5)
      ),
      url('~@/static/bg-pattern.svg'),
      linear-gradient(rgba($paragraph, 1), rgba($paragraph, 1));
  }
  @media #{$isDark} {
    background-image: linear-gradient(
        rgba($paragraph_dark, 0.5),
        rgba($paragraph_dark, 0.5)
      ),
      url('~@/static/bg-pattern.svg'),
      linear-gradient(rgba($paragraph_dark, 1), rgba($paragraph_dark, 1));
  }
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  border-radius: $border-radius;
  margin: 30px -5vw;
  padding: 20px 5vw 0;
  .spacer {
    height: 5vw;
    max-height: 60px;
  }
}
</style>
