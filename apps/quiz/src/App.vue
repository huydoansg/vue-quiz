<template>
  <div class="pages">
    <router-view />
    <app-dialog />
    <app-snack-bar />
  </div>
</template>

<script>
export default {
  name: 'AppRoot'
};
</script>
<style lang="scss">
@import "@scss/index.scss";
</style>
