<template>
    <div class="tab">
        <ul>
            <transition-group appear enter-active-class="bounce" leave-active-class="bounceInLeft" appear-active-class="bounce">
                <li v-for="(item,index) of list" :key="index" class="animated">
                    <router-link :to="{name:'detail',params:{id:item.goodsId},query:{dataName:dataName}}">
                        <img :src="item.src">
                        <p>{{item.name}}</p>
                        <span>{{item.price}}</span>
                        <b>{{item.details}}</b>
                    </router-link>
                </li>
            </transition-group>
            
        </ul>
    </div>
</template>

<script>
export default {
    props:['list','dataName']
}
</script>

<style>
.tab img {  
    height: 150px;
    width: auto;
    padding: 5px 7px 5px 0;
    padding-left: 7px;
    display: block;
}
.tab {
    clear: both;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;}
    .tab ul {
    height: auto;
    margin-bottom: 10px;}
    .tab img {
    padding: 5px 7px 5px 0;
    padding-left: 7px;
    display: block;
}
.tab li {float: left;}
.tab li  p {
    height: 60px;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 20px;
    width: 150px;
    padding: 0 5px;
}
.tab li  span {
    height: 40px;
    font-family: Arial, Helvetica, sans-serif;
    color: #f60;
    font-weight: 700;
    font-size: 15px;
    padding: 5px;
    display: block;
    line-height: 40px;
}
.tab li  b {
    display: inline-block;
    font-size: 16px;
    padding-left: 20px;
    padding-bottom: 10px;
    color: #939393;
    font-weight: 500;
}
</style>
