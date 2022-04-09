$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:3
            },
            sname:{
                required:true,
                minlength:3
            },
            email:{
                required:true,
                email:true
            },
            password1:{
                required:true,
                minlength:6,
                
            },
            password2:{
                 required:true,
                minlength:6,
             
            }
               
        }
       
    })
})
$(document).ready(function() {
    $("#confirm_password").on('keyup', function() {
      var password = $("#password").val();
      var confirmPassword = $("#confirm_password").val();
      if (password != confirmPassword)
        $("#CheckPasswordMatch").html("Password does not match !").css("color", "red");
      else
        $("#CheckPasswordMatch").html("Password match !").css("color", "green");
    });
  });
  