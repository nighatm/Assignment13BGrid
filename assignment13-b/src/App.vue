<template>
  <div id="app">
    <show-tweets></show-tweets>
  </div>
</template>

<script>
import ShowTweets from "./components/gridlistview.vue";

export default {
  name: "App",
  components: {
    ShowTweets: ShowTweets,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
