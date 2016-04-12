$(function(){
	var index=0;
	$(".mm1").eq(0).css("transform","rotateX(0deg) rotateY(0deg) translateZ(200px)");
	$(".mm1").eq(1).css("transform","rotateX(90deg) rotateY(0deg) translateZ(200px)");
	$(".mm1").eq(2).css("transform","rotateX(180deg) rotateY(0deg) translateZ(200px)");
	$(".mm1").eq(3).css("transform","rotateX(270deg) rotateY(0deg) translateZ(200px)");
	$(".mm2").eq(0).css("transform","rotateX(0deg) rotateY(0deg) translateZ(200px)");
	$(".mm2").eq(1).css("transform","rotateX(90deg) rotateY(0deg) translateZ(200px)");
	$(".mm2").eq(2).css("transform","rotateX(180deg) rotateY(0deg) translateZ(200px)");
	$(".mm2").eq(3).css("transform","rotateX(270deg) rotateY(0deg) translateZ(200px)");
	$(".mm3").eq(0).css("transform","rotateX(0deg) rotateY(0deg) translateZ(200px)");
	$(".mm3").eq(1).css("transform","rotateX(90deg) rotateY(0deg) translateZ(200px)");
	$(".mm3").eq(2).css("transform","rotateX(180deg) rotateY(0deg) translateZ(200px)");
	$(".mm3").eq(3).css("transform","rotateX(270deg) rotateY(0deg) translateZ(200px)");
	$(".mm4").eq(0).css("transform","rotateX(0deg) rotateY(0deg) translateZ(200px)");
	$(".mm4").eq(1).css("transform","rotateX(90deg) rotateY(0deg) translateZ(200px)");
	$(".mm4").eq(2).css("transform","rotateX(180deg) rotateY(0deg) translateZ(200px)");
	$(".mm4").eq(3).css("transform","rotateX(270deg) rotateY(0deg) translateZ(200px)");
	$(".mm5").eq(0).css("transform","rotateX(0deg) rotateY(0deg) translateZ(200px)");
	$(".mm5").eq(1).css("transform","rotateX(90deg) rotateY(0deg) translateZ(200px)");
	$(".mm5").eq(2).css("transform","rotateX(180deg) rotateY(0deg) translateZ(200px)");
	$(".mm5").eq(3).css("transform","rotateX(270deg) rotateY(0deg) translateZ(200px)");
	$(".mm6").eq(0).css("transform","rotateX(0deg) rotateY(0deg) translateZ(200px)");
	$(".mm6").eq(1).css("transform","rotateX(90deg) rotateY(0deg) translateZ(200px)");
	$(".mm6").eq(2).css("transform","rotateX(180deg) rotateY(0deg) translateZ(200px)");
	$(".mm6").eq(3).css("transform","rotateX(270deg) rotateY(0deg) translateZ(200px)");
	
	setInterval(function(){
	$("#wrap div").css("transition","transform 1s");
	index++;
	$(".mm1").eq(0).css("transform","rotateX("+index*90+"deg) rotateY(0deg) translateZ(200px)");
	$(".mm1").eq(1).css("transform","rotateX("+(index+1)*90+"deg) rotateY(0deg) translateZ(200px)");
	$(".mm1").eq(2).css("transform","rotateX("+(index+2)*90+"deg) rotateY(0deg) translateZ(200px)");
	$(".mm1").eq(3).css("transform","rotateX("+(index+3)*90+"deg) rotateY(0deg) translateZ(200px)");
	setTimeout(function(){
	$(".mm2").eq(0).css("transform","rotateX("+index*90+"deg) rotateY(0deg) translateZ(200px)");
	$(".mm2").eq(1).css("transform","rotateX("+(index+1)*90+"deg) rotateY(0deg) translateZ(200px)");
	$(".mm2").eq(2).css("transform","rotateX("+(index+2)*90+"deg) rotateY(0deg) translateZ(200px)");
	$(".mm2").eq(3).css("transform","rotateX("+(index+3)*90+"deg) rotateY(0deg) translateZ(200px)");
	setTimeout(function(){
	$(".mm3").eq(0).css("transform","rotateX("+index*90+"deg) rotateY(0deg) translateZ(200px)");
	$(".mm3").eq(1).css("transform","rotateX("+(index+1)*90+"deg) rotateY(0deg) translateZ(200px)");
	$(".mm3").eq(2).css("transform","rotateX("+(index+2)*90+"deg) rotateY(0deg) translateZ(200px)");
	$(".mm3").eq(3).css("transform","rotateX("+(index+3)*90+"deg) rotateY(0deg) translateZ(200px)");
	setTimeout(function(){
	$(".mm4").eq(0).css("transform","rotateX("+index*90+"deg) rotateY(0deg) translateZ(200px)");
	$(".mm4").eq(1).css("transform","rotateX("+(index+1)*90+"deg) rotateY(0deg) translateZ(200px)");
	$(".mm4").eq(2).css("transform","rotateX("+(index+2)*90+"deg) rotateY(0deg) translateZ(200px)");
	$(".mm4").eq(3).css("transform","rotateX("+(index+3)*90+"deg) rotateY(0deg) translateZ(200px)");
	setTimeout(function(){
	$(".mm5").eq(0).css("transform","rotateX("+index*90+"deg) rotateY(0deg) translateZ(200px)");
	$(".mm5").eq(1).css("transform","rotateX("+(index+1)*90+"deg) rotateY(0deg) translateZ(200px)");
	$(".mm5").eq(2).css("transform","rotateX("+(index+2)*90+"deg) rotateY(0deg) translateZ(200px)");
	$(".mm5").eq(3).css("transform","rotateX("+(index+3)*90+"deg) rotateY(0deg) translateZ(200px)");
	setTimeout(function(){
	$(".mm6").eq(0).css("transform","rotateX("+index*90+"deg) rotateY(0deg) translateZ(200px)");
	$(".mm6").eq(1).css("transform","rotateX("+(index+1)*90+"deg) rotateY(0deg) translateZ(200px)");
	$(".mm6").eq(2).css("transform","rotateX("+(index+2)*90+"deg) rotateY(0deg) translateZ(200px)");
	$(".mm6").eq(3).css("transform","rotateX("+(index+3)*90+"deg) rotateY(0deg) translateZ(200px)");
	},200)
	},200)
	},200)
	},200)
	},200)},3000);
	})