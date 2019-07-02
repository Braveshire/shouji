<template>
<div>
    <Swiper></Swiper>
    <List :list="List" :dataName="'home'"></List>
</div>
</template>

<script>
import Swiper from '../components/Swiper'
import List from '../pages/List'
export default {
    components:{
        Swiper,List
    },
    data() {
        return {List:[]}
    },
    mounted() {
        axios({
            url:'/data/goods.json'
        }).then(
            // res=>{console.log(res.data)}
            res=>{this.List=res.data}
        )
    },
}
</script>

