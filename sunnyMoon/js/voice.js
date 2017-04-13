  var countdown=60;

  function settime(obj) {
      var mobile = $(".mobile").val();
		if(mobile == ""){
	       $(".no_wrong").fadeIn();
	       setInterval(function(){
	  	  	$(".no_wrong").fadeOut();
	  	   },3000);
		  return false;
		}
	  if(/^1[3|4|5|8]\d{9}$/.test(mobile)){

	   } else{
	        $(".phone_wrong").fadeIn();
	      setInterval(function(){
	  	  	$(".phone_wrong").fadeOut();
	  	  },3000)
	      return false;
     }

    if (countdown == 0) {
        obj.removeAttribute("disabled");
        obj.style.color = "#fff";
        obj.innerHTML = "获取";
        countdown = 60;
        return;
    } else {
        obj.setAttribute("disabled", true);
        obj.style.color = "#898989";
        obj.innerHTML = countdown + "s";
        countdown--;
    }
   setTimeout(function() {
    settime(obj) },1000);
}


   $(".sub_btn").bind("click", function() {
        var mobile = $(".mobile").val();
   	    if(mobile == ""){
	       $(".no_wrong").fadeIn();
	       setInterval(function(){
	  	  	$(".no_wrong").fadeOut();
	  	   },3000);
		  return false;
		}
   	    if(/^1[3|4|5|8]\d{9}$/.test(mobile)){

	     } else{
	        $(".phone_wrong").fadeIn();
	      setInterval(function(){
	  	  	$(".phone_wrong").fadeOut();
	  	  },3000)
	      return false;
        }

      var vcode = $(".vcode").val();
        if(vcode == ""){
			 $(".nokey_wrong").fadeIn();
          setInterval(function(){
      	  	 $(".nokey_wrong").fadeOut();
      	  },3000)
			return false;
		}

        if(/^\d{6}$/.test(vcode)){

	     } else{
	        $(".key_wrong").fadeIn();
	      setInterval(function(){
	  	  	$(".key_wrong").fadeOut();
	  	  },3000)
	      return false;
        }
   })