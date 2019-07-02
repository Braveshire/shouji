<template>
    <div>
        <div>
		<header>
			<div class="navtitle">
				<a href="index.html">
					<span style=" float: left;"><i class="icon-href">&#x4a;</i>						
					</span>
				</a>
				<span class="n-title">分类</span>				
			<!-- </a> -->
		  </div>
		</header>
		<div style="height: 2.5rem;"></div>
	</div>
	<article class="classify-box">
		<div class="classify-left fl">
			<ul id="tab_btn">
				<li class="pick"><a href="javascript:;">潮流女装</a></li>
				<li><a href="javascript:;">潮流男装</a></li>
				<li><a href="javascript:;">居家小商品</a></li>
				<li><a href="javascript:;">品牌鞋类</a></li>
				<li><a href="javascript:;">皮具箱包</a></li>
				<li><a href="javascript:;">内衣针织</a></li>
				<li><a href="javascript:;">儿童玩具</a></li>
				<li><a href="javascript:;">母婴用品</a></li>
				<li><a href="javascript:;">电子数码</a></li>
				<li><a href="javascript:;">办公用品</a></li>
				<li><a href="javascript:;">体育用品</a></li>
			</ul>
		</div>
		<div class="classify-right">
			<ul>
				<li class="tab_content show">
					<a href="javascript:;">
						<img src="../assets/img/d_sp_04.png">
						<span>衣衫</span>
					</a>
					<a href="javascript:;">
						<img src="../assets/img/scyh0.jpg">
						<span>半身裙</span>
					</a>
					<a href="javascript:;">
						<img src="../assets/img/d_sp_04.png">
						<span>裤子</span>
					</a>
					<a href="javascript:;">
						<img src="../assets/img/d_sp_05.png">
						<span>卫衣</span>
					</a>
					<a href="javascript:;">
						<img src="../assets/img/d_sp_06.png">
						<span>风衣</span>
					</a>
					<a href="javascript:;">
						<img src="../assets/img/d_sp_06.png">
						<span>高帮鞋</span>
					</a>
				</li>
				<li class="tab_content"><a href="javascript:;">2</a></li>
				<li class="tab_content"><a href="javascript:;">3</a></li>
				<li class="tab_content"><a href="javascript:;">4</a></li>
				<li class="tab_content"><a href="javascript:;">5</a></li>
				<li class="tab_content"><a href="javascript:;">6</a></li>
				<li class="tab_content"><a href="javascript:;">7</a></li>
				<li class="tab_content"><a href="javascript:;">8</a></li>
				<li class="tab_content"><a href="javascript:;">9</a></li>
				<li class="tab_content"><a href="javascript:;">10</a></li>
				<li class="tab_content"><a href="javascript:;">11</a></li>
			</ul>
		</div>
	</article>


    </div>
</template>

<script>
import '../assets/js/zepto.min.js'
export default {
    mounted() {
            var tab_Btns_box=document.getElementById('tab_btn');
            var tab_Btns=tab_Btns_box.getElementsByTagName('li');
            var tab_contents=document.getElementsByClassName('tab_content');
            for(var i=0;i<tab_Btns.length;i++){
            tab_Btns[i].index=i;
            tab_Btns[i].onclick=function(){
            for(var i=0;i<tab_Btns.length;i++){
            if(i!==this.index){
            tab_Btns[i].classList.remove('pick')
            }
            }
            tab_Btns[this.index].className="pick";
            for(var j=0;j<tab_contents.length;j++){
            if(j!==this.index){
                tab_contents[j].classList.remove('show');
            }
                tab_contents[this.index].classList.add('show');
            }
            }
            }
    },
}
</script>


