const snackBarPlugin = {
  install(Vue, { name, component, timeout = 1000 }) {
    this.EventBus = new Vue();
    Vue.component(name, component);
    Vue.prototype.$appSnackbar = {
      show(params) {
        snackBarPlugin.EventBus.$emit('show', {
          timeout,
          ...params
        });
      },
      hide() {
        snackBarPlugin.EventBus.$emit('hide');
      },
      // getEventBus: () => snackBarPlugin.EventBus,
      register(cb) {
        snackBarPlugin.EventBus.$on("show", cb);
      },
      destroy() {
        snackBarPlugin.EventBus.$off("show");
      }
    }
  }
}

export default snackBarPlugin;