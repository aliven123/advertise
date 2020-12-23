import '../css/index.less';
import base from '../assets/js/common.js';
const addElement=function(){
	// 动态加载图片的逻辑
	//补全函数
	// img_ctn个数=盒子宽度/img_ctn的宽度
	// 需要补充的盒子个数=img_ctn个数-加载的图片个数 % img_ctn个数
	const location_ctn=$('#aupool_advertise').children('.location_ctn').eq(0);
	const img_ctn=location_ctn.children('.img_ctn');
	const avaliable_num=Number.parseInt(location_ctn.width()/img_ctn.outerWidth(true));
	let add_num=avaliable_num-img_ctn.length;//需要补充的img_ctn的个数；
	// console.log(avaliable_num,img_ctn.length);
	// console.log(avaliable_num,add_num);
	if(img_ctn.length-avaliable_num>0){
		add_num=avaliable_num-img_ctn.length%avaliable_num
	}
	// console.log(add_num);
	$('.location_ctn').children('.location_use').remove();
	for(let i=0;i<add_num;i++){
		location_ctn.append(`
			<div class="img_ctn location_use boxs"
				style="visibility:hidden;height:1px"
			>
				<a
					style="background:none"
				>
				</a>
			</div>
		`)
	};
	
};
window.onload=function(){
	setTimeout(()=>{
		addElement();
	},10)
	
	$(window).on('resize',function(){
		addElement();
	})
}