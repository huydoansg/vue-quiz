<template>
  <div class="snackbar snackbar--open">
    <div class="snackbar__body">
      <div class="snackbar__content">
        <slot name="body">
          <span v-html="message"></span>
        </slot>
      </div>
      <div class="snackbar__actions">
        <slot name="footer">
          <button class="snackbar__actions-close" title="Dismiss" @click="$emit('close')">X</button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SnackBar",
  props: {
    message: { type: String, default: "", required: true }
  }
};
</script>
<style lang="scss">
.snackbar {
  width: 100%;
  margin: 0 auto;
  &__body {
    @include shadow();
    background: map-get($colors, primary);
    display: flex;
    opacity: 1;
    border-radius: 4px;
  }
  &__content {
    color: map-get($text-colors, primary);
    flex-grow: 1;
    padding: 14px 16px;
    text-align: left;
    font-size: $snackbar-main-size;
  }
  &__actions {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    color: map-get($text-colors, primary);
    margin-right: 16px;
    &-close {
      width: 20px;
      height: 20px;
      border-radius: 10px;
      padding: 0;
      margin: 0;
      border: none;
      cursor: pointer;
    }
  }
}
</style>