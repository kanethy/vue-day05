<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
export default {
  mounted(){
    this.axios.get("/details",{
      params:{lid:5}
    }).then(result=>{
      console.log(result.data)
    })
  }
}
</script>