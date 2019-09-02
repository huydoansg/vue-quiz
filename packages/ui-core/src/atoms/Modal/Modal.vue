<template>
  <section class="modal modal__open">
    <div class="modal__overlay"></div>
    <div class="modal__container">
      <div class="modal__header">
        <slot name="header">
          <h2 v-text="title"></h2>
        </slot>
      </div>
      <div class="modal__body">
        <slot name="body">
          <div v-html="content"></div>
        </slot>
      </div>
      <div class="modal__footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Modal",
  props: {
    title: { type: String, default: "" },
    content: { type: String, default: "" }
  }
};
</script>
<style lang="scss">
.modal {
  @include transition();
  width: 100%;
  position: relative;

  &:before {
    content: "";
    display: block;
    width: 100%;
    border-radius: $border-radius-size $border-radius-size 0 0;
  }
  &__overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(map-get($colors, primary), 0.5);
    z-index: 1;
  }
  &__container {
    @include shadow(shadow60);
    @include roundCorners($card-border-radius);
    display: flex;
    flex-direction: column;
    background: map-get($colors, white);
    padding: 15px;
    position: relative;
    z-index: 2;
  }
  &__header,
  &__body {
    margin-bottom: 15px;
    text-align: left;
  }
  &__header {
    display: flex;
    justify-content: space-between;
    &-text {
      flex-grow: 1;
      text-align: left;
    }
    &-actions {
      flex-shrink: 0;
    }
  }
  &__footer {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
