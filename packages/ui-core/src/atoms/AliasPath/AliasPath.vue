<template>
  <section class="alias-path-container">
    <h1>Alias path configuration</h1>
    <h2 v-text="msg"></h2>
    <ul>
      <li>Add <strong>vue.config.js</strong> file to root of project</li>
      <li>
        Update the content as you wish, eg:
        <pre>
          // vue.config.js
          const path = require('path');
          module.exports = {
            configureWebpack: {
              resolve: {
                alias: {
                  "@your_path": path.resolve(__dirname, 'src/your_path')
                }
              }
            }
          }
        </pre>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "AliasPath",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
