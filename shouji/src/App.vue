<template>
  <div id="app">
    <Header v-show="$root.$data.bNav"></Header>
    <transition appear enter-active-class="bounce animated" leave-active-class="bounceInLeft animated" appear-active-class="hinge">
      <router-view></router-view>
    </transition>
    <!-- <Home></Home> -->
    <Footer v-show="$root.$data.bFoot"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Fenlei from './pages/Feilei'
import Car from './pages/Car'
import User from './pages/User'
import axios from 'axios'
import Login from './pages/Login'
import Reg from './pages/Reg'
export default {
  name:'app',
  components:{
    Header,Footer,Home,Fenlei,User,Login,Reg
  },
  watch:{
    $route:{
      handler(to){
        let path = to.path;
        console.log(path)

        if(/home|footer/.test(path)){
          this.$root.$data.bNav=true;
          this.$root.$data.bFoot=true;
        }
        if(/car|user/.test(path)){
          this.$root.$data.bNav=false;
          this.$root.$data.bFoot=true;
        }
        // if(/user/.test(path)){
        //   this.$root.$data.bNav=false;
        //   this.$root.$data.bFoot=true;
        // }

      },
      immediate:true
    }
  },
}
</script>
