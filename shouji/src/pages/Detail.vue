<template>
    <div>
        <div class="tab">
            <ul class="nav">
                <li class="l-btn" @click="goback">详情介绍</li>
            </ul>
            <!-- {{$store.state.detail}} -->
            
            <!-- {{id}} -->
        </div>
        <ul class="detail">
                <li>
                    <img :src="$store.state.detail.src">
                    <p class="title" >{{$store.state.detail.name}}</p>
                    <b class="details">价格为:{{$store.state.detail.price}}</b>
                    <p class="text-box" >{{$store.state.detail.more}}</p>
                </li>
        </ul>
        <div class="action-list">
                <a id="buyNow" class="item addtocart">立刻购买</a>
                <a id="addShoppingCart" class="item buy">加入购物车</a>
        </div>
    </div>
    
</template>

<script>
export default {
    props:['id','dataName'],
    methods: {
        goback(){this.$router.go(-1)}
    },
    data(){
        return {detail:{}}
    },
    mounted() {
        this.$store.dispatch('detail',this.id)
    },
    // mounted(){
    //     console.log(this.$store.state.detail)
    // }
    // mounted(){
    //     let id=this.$route.params.id
    //     // let dataName=this.$route.query.dataName
    //     axios({
    //         url:'data/goods.json'
    //     }).then(
    //         res=>{
    //             // console.log(res.data)
    //             for(var i=0; i<res.data.length;i++){
    //                 if(res.data[i].goodsId==id){
    //                     this.detail=res.data[i]
    //                     console.log(this.detail)
    //                 }
    //             }
    //             }

    //     )
    // },
}
</script>
<style >
    #app{height: 5rem;}
    .detail{height: 7rem;text-align: center;}
    .detail img{width: 50%;height: auto}
    .detail p{width: 80%;margin: 0 auto}
    .action-list{
        padding-left: .7rem;
        line-height: .35rem;
    }
    .action-list a{display: block;float: left;
        background: linear-gradient(90deg,#ffd000,#ff9200);
        border-radius: 9px 2px 2px 9px;
        margin: 0 3px 0 0;
        color: #fff;
        font-size: 14px;
        text-align: center;
        line-height: 35px;
        width: 2.5rem;
        height: auto;
        }
    .nav{width: 100%;text-align:center;font-size: .26rem;color: #fff; background:  #ff9200;opacity: .7;}
    .nav ul{width:6.4rem;height:0.45rem; padding-top:0.15rem; margin:0 auto;}
    .l-btn{width:6.4rem;height:0.38rem; background:url('../assets/img/left-circle.png') no-repeat left; 
    background-size:7%; margin:0 0 0 0.38rem;}

    .title{font-weight: 500;color:paleturquoise;font-size: .22rem}
    .details{color: red;display: block;font-weight: 800;font-size: .24rem}
    .text-box{font-weight: normal;padding-top: .2rem;font-size: .24rem}
</style>