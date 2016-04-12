$(function(){
	var index=0;
		var xdeg=0;
		var ydeg=-10;
		var xs=0;
		var ys=0;
	var timer=setInterval(function(){
	$("#wrap ul li").eq(index).css({
		transform:"rotateY("+index*360/11+"deg) translateZ(350px)",
		transition:"transform 0.2s"
	});
	index++;
	console.log(index);
	if(index>11)clearInterval(timer);
	},200);
	$(document).mousedown(function(e){
	var x1 = e.clientX;
	var y1 = e.clientY;
		$(this).bind("mousemove",function(e){
			xs = e.clientX - x1;
					ys = e.clientY - y1;
					x1 = e.clientX;
					y1 = e.clientY;
					xdeg += xs*0.3;
					ydeg -= ys*0.1;			
			$('#wrap').css('transform',"perspective(800px) rotateX("+ydeg+"deg) rotateY("+xdeg+"deg)");

		})
	});
	$(document).mouseup(function(){
		$(this).unbind("mousemove");
	});
})