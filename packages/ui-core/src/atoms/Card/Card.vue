<template>
  <section class="card">
    <div class="card__header">
      <slot name="header"></slot>
    </div>
    <div class="card__content">
      <slot></slot>
    </div>
    <div class="card__footer">
      <slot name="footer"></slot>
    </div>
  </section>
</template>
<style lang="scss">
@import "../../scss/components/card";
.card {
  @include card();
}
</style>
