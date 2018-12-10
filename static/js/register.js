$(function(){
	//判断用户名
	var flag1 = false;
	var flag2 = false;
	var flag3 = false;
	var flag4 = false;
	var flag5 = false;
	var flag6 = false;
	var flag7 = false;
	var flag8 = false;
	
		$("#inpt-show1").keyup(function(){
			var reg = /^[a-zA-Z0-9]{6,20}$/;
			var reg1 = /[a-zA-Z]/;
			var str = $(this).get(0).value;
			if(reg.test(str) && reg1.test(str)){
				$(this).parent().next("span").find("img").get(0).src = "../images/yes.png";
				$(this).parent().next("span").find("a").css("display","none");
				flag1 = true;
			}
			else{
				if(str.length <6 || str.length>20){
					$(this).parent().next("span").find("a").html("用户名长度只能在6-20位字符之间").css("display","inline-block");
				}
				else{
					$(this).parent().next("span").find("a").html("用户名只能由字母或字母和数字组合").css("display","inline-block");
				}
				$(this).parent().next("span").find("img").get(0).src = "../images/no.png";
				flag1 = false;
			}
		})
		$("#inpt-show1").blur(function(){
			$(this).parent().next("span").css("display","inline-block");
			var reg = /^[a-zA-Z0-9]{6,20}$/;
			var reg1 = /[a-zA-Z]/;
			var str = $(this).get(0).value;
			if(reg.test(str) && reg1.test(str)){
				$(this).parent().next("span").find("img").get(0).src = "../images/yes.png";
				$(this).parent().next("span").find("a").css("display","none");
			}
			else{
				$(this).parent().next("span").find("img").get(0).src = "../images/yn.png";
				$(this).parent().next("span").find("a").css("display","inline-block");
			}
		})
	//判断密码
	$("#inpt-show2").keyup(function(){
		var str = $(this).val();
		$(this).parent().next("span").css("display","inline-block");
		$(this).parent().next("span").find("ul").css("display","inline-block")
		if(str.length >= 8 && str.length <= 20){
			if(str.length<12){
				$(this).parent().next("span").find("li").eq(0).addClass("backcolor").siblings("li").removeClass("backcolor");
			}
			else if(str.length<16 && str.length>=12){
				$(this).parent().next("span").find("li").eq(1).addClass("backcolor").siblings("li").removeClass("backcolor");
			}
			else if(str.length>=16){
				$(this).parent().next("span").find("li").eq(2).addClass("backcolor").siblings("li").removeClass("backcolor");
			}
			$(this).parent().next("span").find("img").get(0).src = "../images/yn.png";
			flag2 = true;
		}
		else{
			flag2 = false;
		}
	})
	$("#inpt-show2").blur(function(){
		$(this).parent().next("span").css("display","inline-block");
		var str = $(this).val();
		if(str.length<=0){
			$(this).parent().next("span").find("img").get(0).src = "../images/yn.png";
			$(this).parent().next("span").find("a").html("请输入密码");
			$(this).parent().next("span").find("ul").css("display","none");
		}
		else if(str.length >= 8 && str.length <= 20){
			$(this).parent().next("span").find("img").get(0).src = "../images/yes.png";
			$(this).parent().next("span").find("a").html("  ")
			$(this).parent().next("span").find("ul").css("display","none")
		}
	})
	//确认密码
	$("#inpt-show3").keyup(function(){
		var str = $(this).val();
		var str1 = $("#inpt-show2").val();
		$(this).parent().next("span").css("display","inline-block");
		if(str == str1){
			$(this).parent().next("span").find("img").get(0).src = "../images/yes.png";
			$(this).parent().next("span").find("a").html("  ");
			flag3 = true;
		}
		else{
			$(this).parent().next("span").find("img").get(0).src = "../images/no.png";
			$(this).parent().next("span").find("a").html("确认密码与登录密码不一致");
			flag3 = false;
		}
	})
	$("#inpt-show3").blur(function(){
		var str = $(this).val();
		var str1 = $("#inpt-show2").val();
		$(this).parent().next("span").css("display","inline-block");
		if(str == str1 && str.length>=8 ){
			$(this).parent().next("span").find("img").get(0).src = "../images/yes.png";
			$(this).parent().next("span").find("a").html("  ");
		}
		else{
			$(this).parent().next("span").find("img").get(0).src = "../images/no.png";
			$(this).parent().next("span").find("a").html("确认密码与登录密码不一致");
		}
	})
	//验证手机号
	$("#inpt-show4").keyup(function(){
		var str = $(this).val();
		$(this).parent().next("span").css("display","inline-block");
		var reg = /^1[34578]\d{9}$/;
		if(reg.test(str)){
			$(this).parent().next("span").find("img").get(0).src = "../images/yes.png";
			$(this).parent().next("span").find("a").html(" ");
			flag4 = true;
		}
		else{
			$(this).parent().next("span").find("img").get(0).src = "../images/no.png";
			$(this).parent().next("span").find("a").html("手机号格式错误");
			flag4 = false;
		}
	})
	$("#inpt-show4").blur(function(){
		var str = $(this).val();
		$(this).parent().next("span").css("display","inline-block");
		var reg = /^1[34578]\d{9}$/;
		if(!reg.test(str)){
			$(this).parent().next("span").find("img").get(0).src = "../images/yn.png";
			$(this).parent().next("span").find("a").html("请输入手机号");
		}
	})
	//验证码
	var verifyCode = new GVerify("v_container");
	$("#inpt-show5").blur(function(){
		$(this).parent().next("span").css("display","inline-block");
		var res = verifyCode.validate(document.getElementById("inpt-show5").value);
	
		console.log(res);
		if(res){
			$(this).parent().next("span").find("img").get(0).src = "../images/yes.png";
			$(this).parent().next("span").find("a").html(" ");
			flag5 = true;
		}
		else{
			$(this).parent().next("span").find("img").get(0).src = "../images/no.png";
			$(this).parent().next("span").find("a").html("验证码不正确");
			flag5 = false;
		}
	})
	$("#inpt-show6").keyup(function(){
		var str = $(this).val();
		var str1 = $(this).next("input").get(0).name;
		$(this).parent().next("span").css("display","inline-block");
		if(str == str1){
			$(this).parent().next("span").find("img").get(0).src = "../images/yes.png";
			$(this).parent().next("span").find("a").html(" ");
			flag6 = true;
		}
		else{
			$(this).parent().next("span").find("img").get(0).src = "../images/no.png";
			$(this).parent().next("span").find("a").html("验证码不正确");
			flag6 = false;
		}
	})
	$("#inpt-show6").next("input").click(function(){
		$(this).get(0).name = 1000 + parseInt(Math.random()*899);
		var str = $(this).get(0).name;
		var timer = setTimeout(function(){
			alert("【百联e城】:您的注册验证码是" + str + "。请妥善保管好您的验证码，切勿泄露他人。")
		},3000);
	})
	//邮箱验证
	$("#inpt-show7").keyup(function(){
		$(this).parent().next("span").css("display","inline-block");
		var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
		var str = $(this).val();
		if(reg.test(str)){
			$(this).parent().next("span").find("img").get(0).src = "../images/yes.png";
			$(this).parent().next("span").find("a").html(" ");
			flag7 = true;
		}
		else{
			$(this).parent().next("span").find("img").get(0).src = "../images/no.png";
			$(this).parent().next("span").find("a").html("邮箱格式不正确");
			flag7 = false;
		}
	})
	$("#check").click(function(){
		if($("#check").is(':checked')){
			flag8 = true;
		}
		else{
			flag8 = false;
		}
		console.log(flag8);
	})
	
	

	
	
	$("#inpt-show8").click(function(e){
		e.preventDefault();
		
		var ainpt = $("#inpt-show1").get(0).value;
		var binpt = $("#inpt-show2").get(0).value;
		var cinpt = $("#inpt-show4").get(0).value;
		console.log(ainpt + " + " + binpt + " + " + cinpt);
		var xhr = new XMLHttpRequest();
                
                xhr.open("post", "http://localhost/e/js/02_register.php", true);
                xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                var str = "username="+  ainpt  + "&password=" + binpt + "&phone=" + cinpt;
                //console.log(str);
                xhr.send(str);
                xhr.onreadystatechange = function () {
                    if (xhr.readyState==4 && xhr.status==200) {
                        console.log(xhr.responseText);
                        //json解析
                        //如果注册成功则进入登录页面
                        //如果失败则弹出提示信息
                        var obj = JSON.parse(xhr.responseText);
                   	
                   		if(obj.status == 1){
	                   		alert("注册成功");
	                   		location.href = "login.html";
	                   	}
                   		
                    }
                }
                
                
                
//		if(flag1 && flag2 && flag3 && flag4 && flag5 && flag6 && flag7 && flag8){
////			$.cookie("usename", $("#inpt-show1").get(0).value, {expires:10, path:"/"});
////			$.cookie("password", $("#inpt-show2").get(0).value, {expires:10, path:"/"});
//			location.href = "login.html";
//		}
//		else{
//			alert("您的填写信息有误！");
//		}
	})
	
	
	//



	
	
	///mysql

})	