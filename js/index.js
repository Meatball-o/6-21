/**
 * Created by 丸子 on 2018/6/23.
 */
!(function () {
  $('.yx-index-header-login').click(function () {
    $('.yx-login-mask').show()
    $('.yx-login').show()
  })
  $('.yx-login-mask').click(function () {
    $(this).hide();
    $('.yx-login').hide()
  })
  $('#username,#password').on('input',function () {
    $("#yx-error-tip").text('')
  })
  function yxLogin() {
    var name = $("#username").val();
    var pass = $("#password").val();
    var param = {
      username: name,
      password: pass
    }
    console.log(param);
    if (name != "" && pass != "") {
      $.ajax({
        url: "http://222.242.225.186:8079/login/user",
        type: 'GET',
        data: param,
        beforeSend: function () {
        },
        success: function (data) {
          if (data == 0) {
            alert("登录成功")
          } else {
            $("#yx-error-tip").text("账号或密码错误")
          }
        }
      });
    } else{
     $("#yx-error-tip").text("账号和密码不能为空")
    }
  }
  $("#yx-login-form").on('submit', yxLogin);
})();
