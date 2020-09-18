<template>
  <div id="container">
    <button @click="changeGrid" id="change">Change Grid View</button>
    <div v-on:click="changeGrid()" :class="{showgrid:isGrid}">
      <div>
        <h4 v-for="tweet in tweets" v-bind:key="tweet">
          {{ tweet.id}}
          <br />
          {{tweet.content}}
        </h4>
      </div>
      <h3 id="showTw"></h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "show-tweets",
  required: true,

  methods: {
    changeGrid: function () {
      if (this.isGrid == true) {
        this.isGrid = false;
        document.getElementById("showTw");
      } else if (this.isGrid == false) {
        this.isGrid = true;
        document.getElementById("showTw");
      } else {
        document.getElementById("showTw").innerHTML = "SomeThing went wrong";
      }
    },
  },

  data: function () {
    return {
      tweets: [
        { content: "Fun teaching geniuses,Fun teaching geniuses", id: "Alex" },
        {
          content: "fun taking the full stack,fun taking the full stack",
          id: "Sie",
        },
        {
          content: "hello to tweet3, it's fun,hello to tweet3, it's fun",
          id: "Aadam",
        },
        { content: "keep calm and do coding", id: "nighat" },
        {
          content: "fun taking the full stack,fun taking the full stack",
          id: "Sie",
        },
        {
          content: "hello to tweet3, it's fun,hello to tweet3, it's fun",
          id: "Aadam",
        },
        { content: "keep calm and do coding", id: "nighat" },
      ],
      isGrid: true,
    };
  },
};
</script>

<style scoped>
.showgrid {
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
}
h4 {
  border-style: solid;
  border-width: thick;
  background-color: cadetblue;
}
</style>