<template>
  <div class="result-page">
    <card>
      <template #header>
        <h1>Result</h1>
      </template>
      <div>
        <p class="result-page__correct">Correct: {{ result.correct }}/{{result.total}}</p>
        <p class="result-page__wrong">Wrong: {{ result.wrong }}/{{result.total}}</p>
        <p class="result-page__missed">Missed {{ result.missed }}/{{result.total}}</p>
      </div>
      <!-- Content here -->
      <template #footer>
        <button class="btn-primary" type="button" @click="handleBack">Back to Home</button>
      </template>
    </card>
  </div>
</template>

<script>
import { atoms } from '@quiz/ui-core';

const { Card } = atoms;

export default {
  name: 'ResultPage',
  inject: ['$service'],
  components: {
    Card
  },
  props: {
    quizId: { type: String, default: '', required: true }
  },
  data() {
    return {
      result: {
        correct: 90,
        wrong: 0,
        missed: 10,
        total: 100
      }
    };
  },
  methods: {
    handleBack() {
      this.$router.push({ path: '/' });
    }
  },
  created() {
    this.result = this.$service.getQuizResult(this.quizId);
  }
};
</script>
