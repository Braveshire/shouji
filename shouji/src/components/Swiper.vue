<template>
    <section>
			<!--图片轮播效果-->
			<div style="-webkit-transform:translate3d(0,0,0); ;">
				<div id="banner_box" class="box_swipe" style="visibility: visible;">
					<ul style="list-style: none; width: 4480px; transition: 500ms; -webkit-transition: 500ms; -webkit-transform: translate3d(-1280px, 0, 0);">
						<li style="width: 640px; display: table-cell; vertical-align: top;">
							<a onclick="return false;"> <img src="../assets/img/banner1.jpg" alt="1" style="width:100%;"> </a>
						</li>
						<li style="width: 640px; display: table-cell; vertical-align: top;">
							<a onclick="return false;"> <img src="../assets/img/banner2.jpg" alt="2" style="width:100%;"> </a>
						</li>
						<li style="width: 640px; display: table-cell; vertical-align: top;">
							<a onclick="return false;"> <img src="../assets/img/banner3.jpg" alt="3" style="width:100%;"> </a>
						</li>
					</ul>
					<ol>
						<li class="on"></li>
						<li class=""></li>
						<li class=""></li>

					</ol>
				</div>
			</div>
		</section>
</template>

<script>
import '../assets/js/swipe '
export default {
	mounted() {
		$(function() {
				new Swipe(document.getElementById('banner_box'), {
					speed: 500,
					auto: 3000,
					callback: function() {
						var lis = $(this.element).next("ol").children();
						lis.removeClass("on").eq(this.index).addClass("on");
					}
				});

				var $list = $("#footNavlist");
				var $nav = $(".fnlist");
				$list.bind("click", function(even) {
					$nav.css("display", "-webkit-box");
					$list.css("color", "orangered");
					$nav.click(function() {
						$(this).hide();
						$list.css("color", "#666666");
					})
				})

				//获取li的数量
				var bplist = $(".bplist")
				var num = $(".bplist li").length;

				var windowWidth = window.innerWidth;

				//ul的总宽度
				var bpwidth = $(".bplist li").width() * num + 12;
				var liwidth = $(".bplist li").width();

				bplist.css({
					width: bpwidth,
					overflow: "hidden"
				});

				//当前宽度
				var shengyuWidth = bpwidth - windowWidth;
				var yidongWidth = shengyuWidth / (num - 4);
				var offleft = bplist.offset().left;
				var left = offleft;
				var startX = 0;
				var endX = 0;
				var ismove = false;
				var i = 0;

				bplist.bind("touchstart", function(event) {
					startX = Number(event.originalEvent.changedTouches[0].clientX);
				})

				bplist.bind("touchmove", function(event) {
					event.preventDefault();
					ismove = true;
				})

				bplist.bind("touchend", function(event) {
					event.preventDefault();
					endX = Number(event.originalEvent.changedTouches[0].clientX);
					if(ismove) {

						//向左移动
						if(endX - startX < 0) {
							if(shengyuWidth <= 0) {
								shengyuWidth = 0;
								ismove = false;
								return;

							}
							//移动的宽度
							left = left - yidongWidth;
							bplist.animate({
								left: left
							}, 100)

							shengyuWidth = shengyuWidth - yidongWidth;
						}

						//向右移动
						if(endX - startX > 0) {
							if(shengyuWidth >= bpwidth - windowWidth) {
								shengyuWidth = bpwidth - windowWidth;
								ismove = false;
								return;
							}
							left = left + yidongWidth;
							bplist.animate({
								left: left
							}, 100)

							shengyuWidth = shengyuWidth + yidongWidth;
						}
						ismove = false;
					}
				})
			})	
	},
}
</script>

<style>
	.box1 {
		width: 980px;
		position: absolute;
		top: 0px;
		left: 5px;
	}			
	.bcon {
		width: 300px;
		margin-top: 420px;
	}			
	.list_lh {
		height: 20px;
		overflow: hidden;
		margin-left: 30px;
	}			
	.list_lh li {
		padding: 5px;
		font-size: 14px;
		color: white;
	}
	#banner_box ul{
		margin-top: 45px;
	}
</style>