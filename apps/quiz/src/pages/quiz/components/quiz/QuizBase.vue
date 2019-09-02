<template>
  <section class="q-container">
    <div class="q-question" v-html="quiz.question"></div>
    <div class="q-opts">
      <slot :path="quiz.path" :answers="quiz.answers" :opts="quiz.opts"></slot>
    </div>
  </section>
</template>
<script>
export default {
  name: "QuizBase",
  props: {
    quiz: { type: Object, default: () => {} }
  }
};
</script>
