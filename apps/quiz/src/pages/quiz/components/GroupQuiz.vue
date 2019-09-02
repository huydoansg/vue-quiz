<template>
  <section class="group-quiz">
    <card class="group-quiz__quiz" v-for="g in groups" :key="g.id">
      <h3 class="group-quiz__quiz-name" v-text="g.name"></h3>
      <p class="group-quiz__quiz-time">{{ g.time }} min(s)</p>
      <p class="group-quiz__quiz-desc" v-html="g.description"></p>
      <template #footer>
        <button class="btn-primary" type="button" @click="$emit('start', g)">Start this quiz</button>
      </template>
    </card>
  </section>
</template>
<script>
import { atoms } from "@quiz/ui-core";
const { Card } = atoms;

export default {
  name: "GroupQuiz",
  components: {
    Card
  },
  props: {
    groups: {
      type: Array,
      default: () => [],
      required: true
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@scss/components/_group-quiz.scss";
</style>