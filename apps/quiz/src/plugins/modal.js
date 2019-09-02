const modalPlugin = {
  install(Vue, { name, component }) {
    this.EventBus = new Vue();
    Vue.component(name, component);
    Vue.prototype.$appDialog = {
      show(params) {
        modalPlugin.EventBus.$emit('show', params);
      },
      hide() {
        modalPlugin.EventBus.$emit('hide');
      },
      register(cb) {
        modalPlugin.EventBus.$on('show', cb);
      },
      destroy() {
        modalPlugin.EventBus.$off('show');
      }
    };
  }
};

export default modalPlugin;
