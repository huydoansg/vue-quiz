<script>
export default {
  name: "ErrorBoundary",
  data: () => ({
    error: false,
    info: {},
    vm: {}
  }),
  errorCaptured(err, vm, info) {
    this.error = true;
    this.info = info;
    this.vm = vm;
  },
  render(h) {
    return this.error ? h("p", "Something went wrong") : this.$slots.default[0];
  }
};
</script>
