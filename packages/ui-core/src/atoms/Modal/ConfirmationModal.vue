<template>
  <modal :title="title" :content="content">
    <template #header>
      <h2 v-text="title"></h2>
    </template>
    <template #body>
      <div v-html="content"></div>
    </template>
    <template #footer>
      <button type="button" class="secondary" @click="$emit('cancel')">
        Cancel
      </button>
      <button type="button" class="primary" @click="$emit('confirm')">
        Confirm
      </button>
    </template>
  </modal>
</template>

<script>
import Modal from "./Modal";

export default {
  name: "ConfirmationModal",
  components: {
    Modal
  },
  props: {
    title: { type: String, default: "Confirmation" },
    content: { type: String, default: "" }
  }
};
</script>
