<template>
  <div class="questions">
    <h1>All questions is comming, please wait ...</h1>
    <div v-for="q in $service.loadQuestions()" :key="q.path" class="question">
      <div v-html="q.question"></div>
      <div v-for="o in q.opts" :key="o.id" v-html="o.text"></div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["$service"],
  name: "QuestionsPage",
  methods: {
    goDetail() {
      /**
       *  handle next question
       *    - store current state: answers
       *    - go to next question
       *    - process in other layer ofcourse
       */
      this.$router.push({ path: "/quiz/q/id" });
    }
  }
};
</script>
