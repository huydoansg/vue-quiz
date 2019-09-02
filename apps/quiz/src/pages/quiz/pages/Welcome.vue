<template>
  <section class="welcome-page">
    <div class="welcome-page__header">
      <h1>Welcome to Quiz journey!</h1>
    </div>
    <group-quiz :groups="groups" @start="handleStart"></group-quiz>
  </section>
</template>

<script>
import { atoms } from "@quiz/ui-core";
const { Card } = atoms;

import GroupQuiz from "../components/GroupQuiz";

export default {
  name: "WelcomePage",
  inject: ["$service"],
  components: {
    Card,
    GroupQuiz
  },
  data() {
    return {
      groups: []
    };
  },
  methods: {
    handleStart(group) {
      this.$service.start(group);
    }
  },
  mounted() {
    this.groups = this.$service.listGroup();
  }
};
</script>
