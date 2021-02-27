<template>
  <div class="home">
  <!--每一个组件都应该有一个专属的class名-->
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>我的第一个脚手架项目！</h1>
    <h2>我的名字:{{uname}}</h2>
    <button @click="duang">click me</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      uname:"lulu"
    }
  },
  methods:{
    duang(){
      alert("Duang!")
    }
  },
  mounted(){
    this.axios.get("/index").then(result=>{
      console.log(result.data)
    })
  }
}
</script>
  
<style>
/*style中的所有选择器，都要以这个统一的class名开头*/
.home>h1{
  background-color:red;
  color:yellow
}
</style>