Vue.component("my-header",{
    template:`<div>
        <h1 style="color:blue">这里是页头</h1>
        <router-link to="/">跳转到首页</router-link>
        <router-link to="/details">跳转到详情页面</router-link>
        <hr>
    </div>`
})