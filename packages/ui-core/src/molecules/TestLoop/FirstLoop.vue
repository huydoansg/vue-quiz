<template>
  <section class="demo-first-loop">
    <h1>Demo Performance of First Loop</h1>
    <div class="actions">
      <button @click="onChange">Click to change</button>
      <button @click="onRemove">Remove Element at Idx</button>
    </div>
    <div class="list" v-if="source.length">
      <p v-for="s in source" :key="s.id" v-text="s.text"></p>
    </div>
    <div v-else>No data.</div>
  </section>
</template>

<script>
const getTimeStamp = x => Math.round(new Date().getTime() / 1000) + x;
export default {
  name: "FirstLoop",
  props: {
    total: { type: Number, default: 10000 }
  },
  data() {
    return {
      source: []
    };
  },
  methods: {
    onRemove(e) {
      console.time("FirstLoop - Removed at Idx", e);
      const idxNeedChange = 8;
      this.source.splice(idxNeedChange, 1);
      console.timeEnd("FirstLoop - Removed at Idx");
    },
    onChange(e) {
      console.time("FirstLoop - Changed at Idx ", e);
      const idxNeedChange = 10;
      this.source[idxNeedChange].text = `I changed here at ${getTimeStamp(
        idxNeedChange
      )}`;
      console.timeEnd("FirstLoop - Changed at Idx");
    }
  },
  created() {
    console.group("FirstLoop");
    console.time("FirstLoop - Time");
    const tmp = [];
    for (let idx = 0; idx < this.total; idx++) {
      tmp.push({
        id: idx,
        text: `${idx} at ${getTimeStamp(idx)}`
      });
    }
    this.source = tmp;
    console.timeEnd("FirstLoop - Time");
    console.groupEnd();
  }
};
</script>

<style scoped lang="scss">
.demo-first-loop {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 5px;
  color: lightseagreen;
}
.list {
  text-align: left;
  opacity: 0.5;
}
</style>
