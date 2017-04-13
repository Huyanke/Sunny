// 开启调试日志
// 在应用开发阶段，你可以选择开启 SDK 的调试日志（debug log）来方便追踪问题。调试日志开启后，SDK 会把网络请求、错误消息等信息输出到 IDE 的日志窗口，或是浏览器 Console 或是 LeanCloud 控制台的 云引擎日志 中。
//localStorage.setItem('debug', 'leancloud*')

var APP_ID = 'Kt131usI4o14Szj4YRCMswxQ-gzGzoHsz'
var APP_KEY = 'WdAF8z47j1wpUvkhIT8EN4dc'

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
})

$(function () {

    $('#sendVcode').click(function () {
        AV.Cloud.requestSmsCode({
            mobilePhoneNumber: $('#mobile').val(),
            op: '领取福利',
            ttl: 10,
        }).then(function () {
//          alert('发送成功')
        }, function (err) {
//          alert('发送失败')
        })
    })

    $('#submit').click(function () {

      AV.Cloud.verifySmsCode($('#vcode').val(), $('#mobile').val()).then(function (on) {

//          alert('验证成功')
		    var query = new AV.Query('Mobile');
			query.equalTo('mobile', $('#mobile').val());
		    query.find().then(function (object) {

			   console.log(object);
			   console.log(object.length);

			if(!object.length == 0) {

              var query = new AV.Query('Mobile');
		      var now = new Date();
			  query.lessThanOrEqualTo('createdAt', now);//查询今天之前创建的 Todo
			  query.limit(50);// 最多返回 10 条结果

			  query.find().then(function (data) {
				  console.log(data)
                  var arrid = new Array();
                   for(var i=0;i<data.length;i++){
                     arrid.push(data[i].id)
                   }

		         	var query = new AV.Query('Mobile');
					query.equalTo('mobile', $('#mobile').val());
				    query.find().then(function (object) {

					var newid = [object[0].id];
					var notid=[];
					  for(var n in newid){
					    for(var a in arrid){
					        if(newid[n]==arrid[a]){
					            notid.push(newid[n]);
					        }
					    }
					  }
					  var strid = notid.join("-");

					  if(strid){
					  	location.href = "draw.html?id="+strid;
					  }else {
                        location.href = "sorry.html"
					  }

					}, function (error) {
					  	console.log(error)
					});

			    }, function (error) {

			    });

            }else{
	           var Mobile = AV.Object.extend('Mobile')
	           var mobile = new Mobile()
	            mobile.save({
	                mobile: $('#mobile').val()
	            }).then(function (object) {
	//              alert('保存用户手机成功');
	                console.log(object)
	                console.log(object.id)
	                var query = new AV.Query('Mobile');
				      query.count().then(function (count) {
				      console.log(count);
				      if(count <= 50) {
				      	console.log(1)
				      	console.log(object.id)
				      	location.href = "draw.html?id="+object.id;
				      }else {
	                    location.href = "sorry.html"
				      }
				  }, function (error) {

			    });

		        }, function (err) {
		           $(".key_wrong").fadeIn();
		            setInterval(function(){
		  	  	    $(".key_wrong").fadeOut();
		  	       },3000);
		        })
            }

		 }, function (error) {
			console.log(error)
	    });

      },function(err){
      	  $(".key_wrong").fadeIn();
		   setInterval(function(){
		  $(".key_wrong").fadeOut();
		 },3000);
      });

     });
});


