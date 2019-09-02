<template>
  <component :is="isQuizType()" :quiz="quiz" @changed="opt => $emit('changed', opt)"></component>
</template>

<script>
import SingleQuiz from './SingleQuiz.vue';
import MultipleQuiz from './MultipleQuiz.vue';
import { QuestionType } from '@constants';

export default {
  name: 'Quiz',
  components: { SingleQuiz, MultipleQuiz },
  props: {
    type: { type: String, default: QuestionType.SINGLE },
    quiz: { type: Object, default: () => {} }
  },
  methods: {
    isQuizType() {
      switch (this.type) {
        case QuestionType.MULTIPLE:
          return 'multiple-quiz';
        case QuestionType.SINGLE:
        default:
          return 'single-quiz';
      }
    }
  }
};
</script>
<style lang="scss">
@import "@scss/components/_quiz.scss";
</style>
