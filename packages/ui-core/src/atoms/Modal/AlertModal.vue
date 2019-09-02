<template>
  <modal :title="title" :content="content">
    <template #header>
      <div class="modal__header-text">
        <h2 v-text="title"></h2>
      </div>
      <div class="modal__header-actions">
        <button class="snackbar__actions-close" title="Close" @click="$emit('close')">X</button>
      </div>
    </template>
    <template #body>
      <div v-html="content"></div>
    </template>
    <template #footer>
      <button type="button" @click="$emit('ok')">Ok</button>
    </template>
  </modal>
</template>

<script>
import Modal from "./Modal";

export default {
  name: "AlertModal",
  components: {
    Modal
  },
  props: {
    title: { type: String, default: "" },
    content: { type: String, default: "" }
  }
};
</script>