<template>
<!--将app.vue中<router-view>上方的div剪切到这里-->
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    
</template>

<!--如果整个组件中没有js内容，则整个script可以省略-->
<!--<script>
export default {
    
}
</script>-->

<style>
/*把app.vue中#nav的样式剪切到这里*/
    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }
</style>