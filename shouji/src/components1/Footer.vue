<template>
<div class="footnav">
			<ul>
				<a href="index.html">
					<li>
						<p class="icon-home">&#xe009;</p>
						<em>首页</em>
					</li>
				</a>
				<li id="footNavlist">
					<p class="icon-home">&#xe025;</p>
					<em>分类</em>
				</li>
				<a href="fenlei.html">
					<li>
						<p class="icon-home2">&#xe02f;</p>
						<em>特卖</em>
					</li>
				</a>
				<a href="shopcar.html">
					<li style="position: relative;">
						<p class="icon-home">&#xe015;</p>
						<em>购物车</em>
						<span class="shopNum">3</span>
					</li>
				</a>
				<a href="myhome.html">
					<li>
						<p class="icon-home">&#xe026;</p>
						<em>我的</em>
					</li>
				</a>
			</ul>
		</div>
    <div class="footer">
        <div class="foot-btn" >
            <ul>
                <router-link to="/home" class="home" active-class="home-active" tag="li"><a href="javasceipt:;"></a></router-link>
                <router-link to="/reg" class="write" active-class="write-active" tag="li"><a href="javasceipt:;"></a></router-link>
                <router-link to="/user" class="my" active-class="my-active" tag="li"><a href="javasceipt:;"></a></router-link>
                <!-- <a class="home"><a href="index_m.html"></a></li>
                <li class="write"><a href="javascript:;"></a></li>
                <li class="my"><a href="mydoc_m.html"></a></li> -->
            </ul>
        </div>
    </div>
</template>

<style>
.foot-btn{width:100%;height:0.8rem; background:#fff; position:fixed; left:0; bottom:0; border-top:1px solid #9e9a95;}
.foot-btn ul{width:4.08rem; margin:0 auto;}
.foot-btn ul li{ float:left;}
.foot-btn ul li a{ display:block; width:100%;height:100%;}
.foot-btn ul .home{width:0.44rem;height:0.59rem; background:url(../assets/img/home.png) no-repeat 0 0; background-size:100%; margin-top:0.1rem;}
.foot-btn ul .write{width:0.82rem;height:0.81rem; background:url(../assets/img/write.png) no-repeat 0 0; background-size:100%; margin-left:1.18rem;}
.foot-btn ul .my{width:0.39rem;height:0.63rem; background:url(../assets/img/my.png) no-repeat 0 0;background-size:100%; margin-left:1.18rem; margin-top:0.07rem;}


</style>
