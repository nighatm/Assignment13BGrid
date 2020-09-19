<template>
  <div class="hello">
   <h1>{{ user}}</h1>
   <h3 @click="incrementAge">{{ userAge}}</h3>
   <h4>{{ loudUser}}</h4>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: function(){
    return{
      user: this.$store.state.userName,
      // userAge: this.$store.state.userAge,
      loudUser: this.$store.getters.loudUserName
    }
  },
  methods: {
    incrementAge: function(){
      // this.$store.commit("changeUserAge", this.userAge + 1),
      this.$store.dispatch("updateLater")
    }
  },
  computed: {
    userAge: function(){
      return this.$store.state.userAge;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
