define(['jquery','cookie'], function ($) {
    $("#loginBtn").click(function () {
        $.ajax({
            type:'post',
            url:'/api/login',
            data:$("#loginForm").serialize(),
            dataType:'json',
            success: function (data) {
                if(data.code==200){
                    //�����ݱ��浽cookie�У�����ҳ�湲��
                    $.cookie('loginInfo',JSON.stringify(data.result),{path:'/'});
                    //��¼�ɹ�����תҳ��
                    location.href='/main/index';
                }
            }
        })

        return false;
    })
})