$(function () {
    // $('.register').width(innerWidth)

    $('#name input').blur(function () {
        if ($(this).val() == '') return

        // console.log(123)
        if ($(this).val().length >= 6 && $(this).val().length <= 20) { // 符合要求
            $.get('/bailian/checkname/', {'name': $(this).val()}, function (response) {
                // console.log(123)
                // console.log(response)
                $('#name .text').html(response.msg)
                if (response.status) {   // 可用
                    $('#name').removeClass('has-error').addClass('has-success')
                    $('#name span').removeClass('glyphicon-remove').addClass('glyphicon-ok')
                    $('#name .text').removeClass('red').addClass('green')
                } else {    // 不可用
                    $('#name').removeClass('has-success').addClass('has-error')
                    $('#name span').removeClass('glyphicon-ok').addClass('glyphicon-remove')
                    $('#name .text').removeClass('green').addClass('red')
                }
            })
        } else {    // 不符合要求
            $('#name').removeClass('has-success').addClass('has-error')
            $('#name span').removeClass('glyphicon-ok').addClass('glyphicon-remove')
        }
    })


    // 密码验证
    $('#password input').blur(function () {
        if ($(this).val() == '') return
        var reg = /^[a-zA-Z\d_]{6,12}$/
        if (reg.test($(this).val())) {   // 符合
            $('#password p').html('格式:密码格式正确').removeClass('red').removeClass('help').addClass('green')
            $('#password').removeClass('has-error').addClass('has-success')
            $('#password span').removeClass('glyphicon-remove').addClass('glyphicon-ok')

            // $('#password span').show()
        } else {   // 不符合
            $('#password p').html('6-12位，数字、字母、下划线').removeClass('help').addClass('red')
            $('#password').addClass('has-error').removeClass('has-success')
            $('#password span').addClass('glyphicon-remove').removeClass('glyphicon-ok')

            // $('#password span').hide()
        }
    })
// 第二次密码输入验证
    $('#password-d input').blur(function () {
        if ($(this).val() == '') return
        var f_val = $('#password input').val()
        var d_val = $(this).val()

        if (f_val == d_val) {   // 符合
            $('#password-d p').html('格式：两次输入相同').removeClass('red').removeClass('help').addClass('green')
            $('#password-d').removeClass('has-error').addClass('has-success')
            $('#password-d span').removeClass('glyphicon-remove').addClass('glyphicon-ok')
        } else {   // 不符合
            $('#password-d p').html('两次密码输入不一致').removeClass('help').addClass('red')
            $('#password-d').addClass('has-error').removeClass('has-success')
            $('#password-d span').addClass('glyphicon-remove').removeClass('glyphicon-ok')
        }
    })


// 手机号验证
    $('#phone input').blur(function () {
        if ($(this).val() == '') return

        var reg = /^1[34578]\d{9}$/

        if (reg.test($(this).val())) { // 符合要求
            $('#phone').removeClass('has-error').addClass('has-success')
            $('#phone span').removeClass('glyphicon-remove').addClass('glyphicon-ok')
            $('#phone p').html('格式：输入正确').removeClass('red').addClass('green')

        } else {    // 不符合要求
            $('#phone').removeClass('has-success').addClass('has-error')
            $('#phone span').removeClass('glyphicon-ok').addClass('glyphicon-remove')
            $('#phone p').html('格式输入错误').removeClass('green').addClass('red')

        }
    })
    // 邮箱验证
    $('#email input').blur(function () {
        if ($(this).val() == '') return

        var reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
        if (reg.test($(this).val())) { // 符合要求
            // 发起ajax请求　　>>> 　邮箱是否可用　？？？
            // jQuery.post( url [, data ] [, success(data, textStatus, jqXHR) ] [, dataType ] )
            console.log(123)

            $.get('/bailian/checkemail/', {'email': $(this).val()}, function (response) {
                console.log(response)
                $('#email .text').html(response.msg)
                if (response.status) {   // 可用
                    $('#email').removeClass('has-error').addClass('has-success')
                    $('#email span').removeClass('glyphicon-remove').addClass('glyphicon-ok')
                    $('#email .text').removeClass('red').addClass('green')
                } else {    // 不可用
                    $('#email').removeClass('has-success').addClass('has-error')
                    $('#email span').removeClass('glyphicon-ok').addClass('glyphicon-remove')
                    $('#email .text').removeClass('green').addClass('red')
                }
            })

        } else {    // 不符合要求
            $('#email').removeClass('has-success').addClass('has-error')
            $('#email span').removeClass('glyphicon-ok').addClass('glyphicon-remove')
        }
    })

    // 为了校验数据格式是否正确，所以点击注册时，触发点击事件
    // 在点击事件中，进行数据校验
    // 校验没问题，即发起ajax请求【注册】
    $('#subButton').click(function () {
        var isRegister = true   // 默认可以注册

        $('input').each(function () {
            if ($(this).val() == '') {
                isRegister = false
            }
        })

        console.log(isRegister)

        if (isRegister) {
            $('#register-view').submit()
        }
    })
})