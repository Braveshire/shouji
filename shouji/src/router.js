import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from './pages/Home.vue'
import Car from './pages/Car.vue'
import User from './pages/User.vue'
import Feilei from './pages/Feilei.vue'
import Login from './pages/Login.vue'
import Reg from './pages/Reg.vue'
import Detail from './pages/Detail.vue'
import ErrorPage from './components/ErrorPage.vue'
// import Follow from './pages/Follow.vue'
// import Column from './pages/Column.vue'
let routes = [
    {path:'/home',component:Home},
    {path:'/car',component:Car},
    {path:'/user',component:User},
    {path:'/feilei',component:Feilei},
    {path:'/',redirect:'/home'},
    {path:'/detail/:id',name:'detail',component:Detail,props:true},
    // {path:'/feilei',component:Feilei},
    
    // {path:'/follow',component:Follow},
    // {path:'/column',component:Column},
    {path:'/user',component:User},
    {path:'/login',component:Login},
    {path:'/reg',component:Reg},
    // {path:'/detail/:aid',component:Detail,name:'detail'},
    {path:'/',redirect:''},
    {path:'*',component:ErrorPage}
]
let router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

export default router