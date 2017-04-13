  //	屏幕自适应
	var html = document.getElementsByTagName("html")[0];

	function getSize() {
		var width = document.documentElement.clientWidth || document.body.clientWidth;
		var fontSize = (20 / 750) * width;
		return fontSize;
	}
	html.style.fontSize = getSize() + "px";
	window.onresize = function() {
	    setTimeout(function() {
		  html.style.fontSize = getSize() + "px";
	    }, 100);
	};

     var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
     $(".hulai").css("height",height);