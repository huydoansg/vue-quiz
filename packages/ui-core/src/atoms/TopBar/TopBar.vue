<template>
  <section class="top-bar">
    <div class="top-bar__left">
      <slot name="left">
        <button type="button" @click="$emit('back')">Back</button>
      </slot>
    </div>
    <div class="top-bar__middle">
      <slot />
    </div>
    <div class="top-bar__right">
      <slot name="right">
        <button type="button" @click="$emit('next')">Next</button>
      </slot>
    </div>
  </section>
</template>
<script>
export default {
  name: "TopBar"
};
</script>

<style lang="scss">
.top-bar {
  display: flex;
  justify-content: space-between;
  height: map-get($layout-heights, topbar);
  padding: 8px 15px;
  flex-shrink: 0;
  .middle {
    flex-grow: 1;
  }
}
</style>
