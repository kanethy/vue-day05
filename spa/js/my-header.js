Vue.component("my-header",{
  template:`<div>
    <h1 style="color:blue">这里是页头</h1>
    <ul>
      <li><router-link to="/">首页</router-link></li>
      <li><router-link to="/details">详情页</router-link></li>
    </ul>
    <hr>
  </div>`
})