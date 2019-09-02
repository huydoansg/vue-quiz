<template>
  <section class="app-dialogs">
    <component
      v-for="dialog in dialogs"
      :key="dialog.id"
      :is="dialogType(dialog)"
      :title="dialog.title"
      :content="dialog.content"
      @confirm="onConfirm(dialog)"
      @ok="onOk(dialog)"
      @close="onClose(dialog)"
      @cancel="onCancel(dialog)"
    />
  </section>
</template>
<script>
import { atoms } from "@quiz/ui-core";
const { AlertModal, ConfirmationModal } = atoms;
import { DialogType } from "@constants";

export default {
  name: "AppDialog",
  components: {
    AlertModal,
    ConfirmationModal
  },
  data() {
    return {
      dialogs: []
    };
  },
  methods: {
    onConfirm(dialog) {
      this.handleCallback(dialog.onConfirm);
      this.handleClose(dialog);
    },
    onOk(dialog) {
      this.handleCallback(dialog.onOk);
      this.handleClose(dialog);
    },
    onCancel(dialog) {
      this.handleCallback(dialog.onCancel);
      this.handleClose(dialog);
    },
    onClose(dialog) {
      this.handleCallback(dialog.onClose);
      this.handleClose(dialog);
    },
    handleCallback(cb) {
      if (typeof cb === "function") {
        cb();
      }
    },
    handleClose({ id }) {
      this.dialogs = this.dialogs.filter(d => d.id != id);
    },
    dialogType({ type }) {
      switch (type) {
        case DialogType.Confirmation:
          return "confirmation-modal";
        case DialogType.Alert:
        default:
          return "alert-modal";
      }
    },
    showDialog(params) {
      const id = new Date().getTime();
      const dialog = {
        id,
        ...params
      };
      this.dialogs.push(dialog);
    }
  },
  beforeCreate() {
    this.$appDialog.register(params => this.showDialog(params));
  },
  beforeDestroy() {
    this.$appDialog.destroy();
  }
};
</script>

<style lang="scss">
@import "@scss/components/_app-dialog.scss";
</style>