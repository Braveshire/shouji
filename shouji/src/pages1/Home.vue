<template>
    <div class="home">
        <Swiper></Swiper>
        <List></List>
    </div>
</template>
<script>
import Swiper from '../components/Swiper'
import List from '../components/List'

export default {
    components:{
        Swiper, List
    },
    mounted() {
        axios({
            // url:'http://localhost:3000/api/home'
            url:'/api/banner'
        }).then(
            res=>console.log(res.data)
        )
        
    },
}
</script>