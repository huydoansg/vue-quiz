<template>
  <section class="app-snackbars">
    <transition-group name="flip-list">
      <snack-bar
        class="app-snackbars__snack-bar"
        v-for="m in messages"
        :key="m.id"
        :message="m.message"
        @close="onClose(m)"
      />
    </transition-group>
  </section>
</template>
<script>
import { atoms } from '@quiz/ui-core';

const { SnackBar } = atoms;

export default {
  name: 'AppSnackBar',
  components: {
    SnackBar
  },
  data() {
    return {
      messages: []
    };
  },
  methods: {
    close(id) {
      const filteredList = this.messages.filter(i => i.id != id);
      this.messages = filteredList;
    },
    onClose(message) {
      this.close(message.id);
    },
    autoClose(message) {
      setTimeout(() => {
        this.close(message.id);
      }, message.timeout);
    },
    displayMessage(params) {
      const autoClose = params.autoClose || true;
      const id = new Date().getTime();
      const message = {
        id,
        autoClose,
        ...params
      };
      this.messages.push(message);
      if (autoClose) {
        this.autoClose(message);
      }
    }
  },
  beforeCreate() {
    this.$appSnackbar.register(params => this.displayMessage(params));
  },
  beforeDestroy() {
    this.$appSnackbar.destroy();
  }
};
</script>
<style lang="scss">
@import "@scss/components/_app-snack-bar.scss";
</style>
