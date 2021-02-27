var Details={
    props:["lid"],
    template:`<div>
        <my-header></my-header>
        <h1 style="color:orange">这里是详情页面</h1>
        <h2>这里是{{lid}}号商品的详情页面</h2>
        <button @click="back">返回首页</button>
    </div>`,
    methods:{
        back(){
            this.$router.push("/")
        }
    }
}