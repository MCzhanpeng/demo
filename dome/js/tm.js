$(function(){
	var index=0;
	var index1=0;
	$("#main").focus(function(){
		$("label").css({color:"#999"});
		var timer=setInterval(function(){
			if($("#main").val()!=""){$("label").hide();clearInterval(timer);}
		},10)
	});
	$("#main").blur(function(){
		$("label").css({color:"#000"});
		if($("#main").val()=="")$("label").show();
	});
	setInterval(function(){
		index++;
		if(index>1)index=0;
		$("ul.news1").animate({left:-250*index+"px"},500);
		
		
	},3000);
	setTimeout(function(){
		runs();},600);
	function runs(){
	setInterval(function(){
		
		index1++;
		if(index1>1)index1=0;
		$("ul.news2").animate({left:-250*index+"px"},500);console.log(index+"-"+index1);},3000);
	}
	
})
