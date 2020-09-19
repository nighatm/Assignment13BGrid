
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <p>{{childInfo }}</p>
    <HelloWorld greeting="This is a prop!" @changeColor="updateBackground" />
    <page-footer> </page-footer>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import PageFooter from "./components/footer.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    PageFooter
  },
  methods: {
    updateBackground: function (childData) {
      // document.body.style.background='silver';
      this.childInfo = childData;
    },
  },
  data: function () {
    return {
      childInfo: " ",
    };
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
