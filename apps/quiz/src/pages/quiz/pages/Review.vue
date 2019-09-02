<template>
  <div class="review-page">
    <card>
      <template #header>
        <h1>Your questions & answers</h1>
      </template>
      <!-- Content here -->
      <div class="answers">
        <div v-for="a in answers" :key="a.id" :class="{ 'not-matched': !a.isMatch}">
          <p>
            <span v-text="a.no" />.
            <span v-html="a.question" />
          </p>
        </div>
      </div>
      <template #footer>
        <button class="btn-primary" type="button" @click="handleViewResult">Continue</button>
      </template>
    </card>
  </div>
</template>

<script>
import { atoms } from "@quiz/ui-core";
const { Card } = atoms;

export default {
  name: "ReviewPage",
  inject: ["$service", "goToResult"],
  components: {
    Card
  },
  props: {
    quizId: { type: String, default: "", required: true }
  },
  data() {
    return {
      answers: []
    };
  },
  methods: {
    handleViewResult() {
      this.goToResult(this.quizId);
    }
  },
  created() {
    this.answers = this.$service.loadAnswers(this.quizId);
  }
};
</script>
