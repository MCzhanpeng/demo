window.onload=function(){
	
	var oImg=document.getElementsByTagName('img')[0],x=0,lastx=0;
	for(var i=1;i<77;i++){
		var newImg=document.createElement("img");
		newImg.src="img/miaov ("+i+").jpg";
		newImg.style.display="none";
		document.body.appendChild(newImg);
	}
	var aImg=document.getElementsByTagName('img');
	var num=1;
	for(var i=0;i<aImg.length;i++){
		aImg[i].onload=function(){
			num++;
			document.title=parseInt(num/aImg.length*100)+"%"
			if(num==aImg.length){
				alert("图片加载完毕");
			}
		}
	}
	var oLastImg=oImg;
	document.onmousedown=function(e){
		var e=e||event;
		var disx=e.clientX-x;
		document.onmousemove=function(e){
			x=parseInt((e.clientX-disx)/10);
			var l=0;
			if(x>0){
				l=Math.ceil(x/77)*77-x;
			}else{
				l=-(Math.floor(-x/77)*77+x);
			}
			if(oLastImg!=aImg[l]){
					oLastImg.style.display='none';
					aImg[l].style.display='block';
					oLastImg=aImg[l];
				}
			document.onmouseup=function(){
				document.onmousemove=null;
				document.onmouseup=null;
			}
		}
		return false;
	  }
  }