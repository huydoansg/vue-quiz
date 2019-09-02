<template>
  <div class="quiz-container">
    <top-bar>
      <template #left>&nbsp;</template>
      <h1 v-text="quiz.name"></h1>
      <template #right>&nbsp;</template>
    </top-bar>
    <!-- <navigation :pages="navPages" v-if="showNav && navPages.length > 0" /> -->
    <div class="quiz-container__content">
      <transition name="slide">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { QuestionType, QuestionPerQuiz } from '@constants';
import { TopBar } from '@components';

import * as quizServices from '../services';

export default {
  name: 'QuizIndexPage',
  components: {
    TopBar
  },
  props: {
    basePath: { type: String, default: '', required: true }
  },
  data() {
    return {
      isFetching: false,
      showNav: false,
      current: {},
      quiz: {},
      onLoaded: new Vue()
    };
  },
  provide() {
    return {
      QuestionType,
      goToReview: this.goToReview,
      goToResult: this.goToResult,
      $service: {
        listGroup: this.listGroup,
        start: this.start,
        saveAndNext: this.saveAndNext,
        loadQuestions: this.loadQuestionsOfQuiz,
        loadAnswers: this.loadAnswers,
        getQuestion: this.getQuestion,
        getQuizResult: quizServices.getQuizResult
      },
      onLoaded: this.onLoaded
    };
  },
  methods: {
    goToQuestion(quizId, questionId) {
      this.$router.push({
        path: `/quiz/${quizId}/question/${questionId}`
      });
    },
    filterAnswers(answers = []) {
      return answers.reduce((total, curr) => {
        total.push(curr.id);
        return total;
      }, []);
    },
    listGroup() {
      const quizAsGroup = quizServices.listGroup();
      quizServices.saveQuizAsSource(quizAsGroup);
      return quizAsGroup;
    },
    loadAnswers(quizId) {
      return quizServices.loadAnswers(quizId);
    },
    loadQuestionsOfQuiz() {
      return this.quiz.questions;
    },
    getQuestion(quizId, questionId) {
      this.quiz = quizServices.getQuiz(quizId);
      const question = quizServices.getQuestion(quizId, questionId);
      this.triggerOnLoad(question);
    },
    start(group) {
      const quiz = quizServices.getQuizByGroup(
        group.id,
        group.type,
        group.totalQuestion || QuestionPerQuiz
      );
      this.quiz = quiz;
      quizServices.saveUserQuiz(quiz);
      quizServices.activeQuiz(quiz.id);
      const question = quizServices.getFirstQuestion(quiz.questions);

      this.triggerOnLoad(question);
      this.goToQuestion(this.quiz.id, question.id);
    },
    triggerOnLoad(question) {
      this.current = question;
      this.$nextTick(() => {
        this.onLoaded.$emit('loaded', question);
      });
    },
    saveAndNext(question, answers) {
      quizServices.saveAnswer(
        this.quiz.id,
        question.id,
        this.filterAnswers(answers)
      );
      const isLastQuestion = quizServices.isLast(
        this.quiz.questions,
        this.current
      );
      if (!isLastQuestion) {
        const nextQuestion = quizServices.getNextQuestion(
          this.quiz.questions,
          this.current
        );
        this.triggerOnLoad(nextQuestion);
        this.goToQuestion(this.quiz.id, nextQuestion.id);
      } else {
        this.goToReview(this.quiz.id);
      }
    },
    goToReview(quizId) {
      this.$router.push({ path: `/quiz/${quizId}/review` });
    },
    goToResult(quizId) {
      this.$router.push({ path: `/quiz/${quizId}/result` });
    }
  },
  mounted() {
    const { showNav = false } = this.$route.query;
    this.showNav = showNav;
  },
  computed: {
    navPages() {
      return quizServices.navLinks(this.basePath);
    }
  },
  beforeDestroy() {
    // release event listeners
    this.onLoaded.$off('loaded');
  }
};
</script>
<style lang="scss">
@import "@scss/pages/quiz.scss";
</style>
