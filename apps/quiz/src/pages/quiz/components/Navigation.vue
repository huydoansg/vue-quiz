<template>
  <div class="quiz-nav">
    <router-link v-for="p in pages" :key="p.name" :to="p.fullPath">
      <span v-html="p.title"></span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "NavigationQuiz",
  props: {
    pages: { type: Array, default: () => [], required: true }
  }
};
</script>
