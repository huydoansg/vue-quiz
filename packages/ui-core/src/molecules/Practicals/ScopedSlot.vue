<template>
  <div class="scoped-slot-demo">
    <!-- <slot name="sidebar" v-slot="msg">
      <span>{{ msg }}</span>
      <ul>
        <li>Home is here</li>
      </ul>
    </slot>-->
    <slot name="propsTest" :count="count" :addOne="addOne" />
  </div>
</template>
<script>
export default {
  name: "ScopedSlot",
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    };
  },
  methods: {
    addOne() {
      this.count++;
    }
  }
};
</script>
