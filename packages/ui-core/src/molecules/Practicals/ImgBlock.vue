<template functional>
  <figure :class="props.type" v-on:click="listeners.click">
    <img :src="props.src" />
    <figcaption v-if="slots().default">
      <span>
        <slot></slot>
      </span>
    </figcaption>
  </figure>
</template>
<script>
// *Stateless: it doesn’t keep any state by itself
// *Instanceless: it has no instance, thus no this
export default {
  props: {
    src: {
      required: true,
      type: String
    },
    type: {
      required: true,
      type: String
    }
  }
};
</script>
