define(['jquery','cookie'], function ($) {
    $("#loginBtn").click(function () {
        $.ajax({
            type:'post',
            url:'/api/login',
            data:$("#loginForm").serialize(),
            dataType:'json',
            success: function (data) {
                if(data.code==200){
                    //把数据保存到cookie中，其他页面共享
                    $.cookie('loginInfo',JSON.stringify(data.result),{path:'/'});
                    //登录成功，跳转页面
                    location.href='/main/index';
                }
            }
        })

        return false;
    })
})