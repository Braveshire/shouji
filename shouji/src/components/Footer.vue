<template>
    <div class="footnav">
			<ul>
				<router-link to="/home" active-class="active" tag="li">
					<!-- <li> -->
						<p class="icon-home">&#xe009;</p>
						<em>首页</em>
					<!-- </!--> 
				</router-link>
				
				<li id="footNavlist">
					<p class="icon-home">&#xe025;</p>
					<em>分类</em>
				</li>
				<router-link to="/feilei" active-class="active" tag='li'>
					<!-- <li> -->
						<p class="icon-home2">&#xe02f;</p>
						<em>特卖</em>
					<!-- </!--> 
				</router-link>
				<!-- <a href="fenlei.html">
				</a> -->
				<router-link to="/car" active-class="active" tag='li' >
					<!-- <li style="position: relative;"> -->
						<p class="icon-home">&#xe015;</p>
						<em>购物车</em>
						<span class="shopNum">3</span>
					<!-- </li> -->
				</router-link>
				<!-- <a href="shopcar.html">
					
				</a> -->
				<router-link to="/user" active-class="active" tag='li'>
						<p class="icon-home">&#xe026;</p>
						<em>我的</em>
				</router-link>
				<!-- <a href="myhome.html">
					
				</a> -->
			</ul>
		</div>
</template>

<script>
export default {
    
}


</script>