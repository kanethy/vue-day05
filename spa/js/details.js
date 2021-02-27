var Details={
  //因为路由字典中写了props:true
  //所以lid参数变量会自动成为props中的属性
  props:["lid"], //和data中的变量用法完全一样，只不过来源不同而已。props来自于外部，data是自己创建的。
  template:`<div>
    <my-header></my-header>
    <h1 style="color:orange">这里是详情页</h1>
    <h2>这里是{{lid}}号商品的详细信息...</h2>
    <button @click="back">返回首页</button>
  </div>`,
  methods:{
    back(){
      this.$router.push("/");
    }
  }
}