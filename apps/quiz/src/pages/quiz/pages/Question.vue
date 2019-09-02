<template>
  <div class="question-page">
    <card class="question-card">
      <template #header>
        <h1>Question #{{question.order}}</h1>
      </template>
      <!-- Content here -->
      <quiz :type="question.type" :quiz="question" @changed="handleSelected"></quiz>
      <template #footer>
        <button class="btn-primary" type="button" @click="handleNext">Continue</button>
      </template>
    </card>
  </div>
</template>

<script>
import { atoms } from '@quiz/ui-core';
import Quiz from '../components/quiz';

const { Card } = atoms;

export default {
  name: 'QuestionPage',
  inject: ['$service', 'onLoaded'],
  components: {
    Card,
    Quiz
  },
  props: {
    quizId: { type: String, default: '', required: true },
    questionId: { type: String, default: '', required: true }
  },
  data() {
    return {
      answers: [],
      question: {}
    };
  },
  methods: {
    filterAnswer(answers, answer) {
      const isExist = answers.findIndex(a => a.id === answer.id) > -1;
      if (!isExist) {
        answers.push(answer);
      }
    },
    handleSelected(selectedOpts) {
      this.filterAnswer(this.answers, selectedOpts);
    },
    handleNext() {
      this.$service.saveAndNext(this.question, this.answers);
    }
  },
  created() {
    this.$service.getQuestion(this.quizId, this.questionId);
    this.onLoaded.$on('loaded', (question) => {
      this.question = question;
    });
  }
};
</script>
