var routes=[
  {path:"/", component: Index},
  //允许/details路径携带一个变量名为lid
  //props:true意为，让lid变量自动成为details组件中的props属性
  {path:"/details/:lid", component: Details, props:true},
  {path:"*", component: NotFound}
];
var router=new VueRouter({ routes })