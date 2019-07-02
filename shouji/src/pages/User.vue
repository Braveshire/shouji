<template>
    <div>
        <header>
			<div class="navtitle">
				<a href="javascript:history.back(-1)">
					<span style=" float: left;"><i class="icon-href">&#x21;</i>						
					</span>
				</a>
				<span class="n-title">个人中心</span>
				<a href="index.html"><span style="float: right; margin-right: 10px;">
					<i class="icon-href">&#xe009;</i>
				</span>
			</a>
			</div>
		</header>
		<section>
		<div style="background-color: #FFFFFF; padding: 15px; margin-top: 40px;">
			<ul class="userinfo">
				<li>
					<img src="../assets/img/user.jpg" />
				</li>
				<li>
					<p style="font-size: 16px;">13355436666</p>
				</li>
				<li >
					<a @click="logout">注销</a>
				</li>
			</ul>
			<ul class="moneyinfo">
				<li>
					<p style="color: #999;">可用积分</p>
					<p class="redfont">20分</p>
				</li>
				<li>
					<p style="color: #999;">可用余额</p>
					<p class="redfont">￥0.00</p>
				</li>
				<li>
					<button class="tip-btn red" style="width: 55%;">去充值</button>
				</li>
			</ul>			
		</div>		
		<ul class="menulist">		
			<a href="orderList.html">
				<li style="margin-bottom: 10px;"><i class="icon-end">&#x68;</i>
					<span>全部订单</span>
					<i class="icon-end" style="float: right;">&#x35;</i>
				</li>
			</a>
			<a href="duobao.html">
				<li>
					<i class="icon-end">&#xe0ed;</i>
					<span>待付款</span>
					<i class="icon-end" style="float: right;">&#x35;</i>
					<em>5</em>
				</li>
			</a>
			<a href="zhongjinag.html">
				<li>
					<i class="icon-end">&#x7d;</i>
					<span>代发货</span>
					<i class="icon-end" style="float: right;">&#x35;</i>
					<em>5</em>
				</li>
			</a>
			<a href="#">
				<li><i class="icon-end">&#xe023;</i>
					<span>已发货</span>
					<i class="icon-end" style="float: right;">&#x35;</i>
					<em>5</em>
				</li>
			</a>
			<a href="#">
				<li><i class="icon-end">&#xe030;</i>
					<span>已完成</span>
					<i class="icon-end" style="float: right;">&#x35;</i>
				</li>
			</a>
			<a href="chongzhi.html">
				<li style="margin:10px 0;"><i class="icon-end">&#xe0ed;</i>
					<span>充值记录</span>
					<i class="icon-end" style="float: right;">&#x35;</i>
				</li>
			</a>
			<a href="#">
				<li style="margin:10px 0;"><i class="icon-end">&#xe01d;</i>
					<a href="address.html"><span>地址管理</span></a>
					<i class="icon-end" style="float: right;">&#x35;</i>
				</li>
			</a>
		</ul>
		</section>
		<div class="footnav">

			<ul>
				<a href="index.html"><li>
					<p class="icon-home">&#xe009;</p>
					<em>首页</em>
				</li></a>
				<li id="footNavlist">
					<p class="icon-home">&#xe025;</p>
					<em>分类</em>
				</li>
				<a href="fenlei.html"><li>
					<p class="icon-home2">&#xe02f;</p>
					<em>特卖</em>
				</li></a>
				<a href="shopcar.html"><li  style="position: relative;">
					<p class="icon-home">&#xe015;</p>
					<em>购物车</em>
					<span class="shopNum">3</span>
				</li></a>
				<a href="myhome.html"><li>
					<p class="icon-home">&#xe026;</p>
					<em>我的</em>
				</li>
				</a>	
			</ul>
		</div>
    </div>
</template>

<script>
export default {
	data() {
		return {
			
		}
	},
	methods:{
		logout(){
			axios({url:'/api/logout',method:'put'}).then(res=>{
				if(res.data.err===0){
						this.$router.push('/login')
					}
			}
			)
		}
	}
}
</script>