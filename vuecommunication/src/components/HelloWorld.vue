<template>
  <div class="hello">
    <h1>{{ greeting }}</h1>
   <input type="text" v-model="userText"> 
  <p>{{ userText}}</p>
  <!-- <h3>{{ loudText}}</h3> -->
  <!-- <h3 v-html= "loudText"></h3> or we can call the above line this way with v-html -->
 <h3 v-html="loudText" @click="updateParent"></h3>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
   data: function(){
   return {
     userText: "Type something!"
   }
 },
 computed: {
   loudText: function(){
     return this.userText.toUpperCase();
   }
 },
 props: {
   greeting: String
 },
 methods:{
     updateParent: function(){
       this.$emit("changeColor", this.userText);
   },
     footerEvent: function(footerData){
       console.log("Hello World Comp: " +footerData);
 },
 },
     mounted: function(){ 
       this.$root.$on('footer', this.footerEvent )
 }
 
}
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
