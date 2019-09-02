<template>
  <div class="home">
    <div class="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/quiz">Quiz</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-link class="quiz-nav" :to="QuizPage.path">
      <img alt="Vue logo" src="../assets/logo.png" />
      <span v-html="QuizPage.description"></span>
    </router-link>
  </div>
</template>

<script>
import { QuizPages, DefaultPath, DialogType } from "@constants";

export default {
  name: "home",
  data() {
    return {
      QuizPage: { ...QuizPages.welcome, path: DefaultPath }
    };
  }
};
</script>

<style lang="scss">
@import "@scss/pages/home.scss";
</style>
