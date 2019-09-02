<template>
  <quiz-base :quiz="quiz">
    <template #default="{answers, path, opts}">
      <ul>
        <li v-for="o in opts" :key="o.id">
          <label>
            <input type="checkbox" :value="o.id" @change="$emit('changed', o)" />
            <span v-html="o.text" />
          </label>
        </li>
      </ul>
    </template>
  </quiz-base>
</template>

<script>
import QuizBase from './QuizBase.vue';

export default {
  name: 'MultipleQuiz',
  components: { QuizBase },
  props: {
    quiz: { type: Object, default: () => {} }
  }
};
</script>
