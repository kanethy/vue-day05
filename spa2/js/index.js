var Index={
    template:`<div>
    <my-header></my-header>
    <h1 style="color:green">这里是首页</h1>

    <router-link to="/details/5">查看5号商品的详情</router-link>
    <button @click="goto(6)">查看6号商品的详情</button>
    </div>`,
    methods:{
        goto(lid){
            this.$router.push(`/details/${lid}`)
        }
    }
}