<template>
  <quiz-base :quiz="quiz">
    <template #default="{answers, path, opts}">
      <ul>
        <li v-for="o in opts" :key="o.id">
          <label>
            <input type="radio" :value="o.id" :name="path" @change="$emit('changed', o)" />
            <span v-html="o.text" />
          </label>
        </li>
      </ul>
    </template>
  </quiz-base>
</template>

<script>
import QuizBase from "./QuizBase";

export default {
  name: "SingleQuiz",
  components: { QuizBase },
  props: {
    quiz: { type: Object, default: () => {} }
  }
};
</script>
