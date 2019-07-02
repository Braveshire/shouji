import {UPDATE_DETAIL}from './type'
import axios from 'axios'
export default{
    // [UPDATE_DETAIL]:({commit,state},payload)=>{}
    detail:async({commit,state},payload)=>{
        let res= await axios({url:'data/goods.json'}) 
        res.data.forEach((item)=> {
            // console.log(item.goodsId,payload) 
            if(item.goodsId==payload){
                res.data=item
            }
        });
        commit(UPDATE_DETAIL,res.data)
    }
}