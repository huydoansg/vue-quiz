<template>
  <section class="demo-second-loop">
    <h1>Demo Performance of Second Loop</h1>
    <div class="list" v-if="source.length">
      <p v-for="s in source" :key="s.id" v-text="s.text"></p>
    </div>
    <div v-else>No data.</div>
  </section>
</template>

<script>
const getTimeStamp = x => Math.round(new Date().getTime() / 10000) + x;
export default {
  name: "SecondLoop",
  props: {
    total: { type: Number, default: 10000 }
  },
  data() {
    return {
      source: []
    };
  },
  created() {
    console.group("SecondLoop");
    console.time("SecondLoop - Time");
    for (let idx = 0; idx < this.total; idx++) {
      this.source.push({
        id: idx,
        text: `${idx} at ${getTimeStamp(idx)}`
      });
    }
    console.timeEnd("SecondLoop - Time");
    console.groupEnd();
  }
};
</script>

<style scoped lang="scss">
.demo-second-loop {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 5px;
  color: goldenrod;
}
.list {
  text-align: left;
  opacity: 0.5;
}
</style>
