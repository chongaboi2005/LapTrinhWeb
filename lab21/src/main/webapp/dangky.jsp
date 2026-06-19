<%@page contentType="text/html" pageEncoding="UTF-8"%>
<html>

<style>

input
{
    width: 300px;
    height: 30px;
    border:#0000ff 1px solid;
}

label
{
    display: block;
    width: 300px;
}

.form-group
{
    display: block;
    padding: 5px;
}

.form-group.error input
{
    border-color: red;

}

.form-group.success input
{
    border-color: rgb(17, 150, 155);

}

body
{
    margin:0px;
}

</style>

<body>

<form id="register_form">

<div id="container" style="width: 100%; background-color: antiquewhite; display: flex; justify-content: center; ">

        <div id="noidung" style="width:1000px; background-color: beige;">


        <div class="form-group">
            <label for="username">User name</label>
            <input id="username" />
            <small></small>
        </div>
         <div class="form-group">
            <label for="email">Email</label>
            <input id="email" />
            <small></small>
        </div>
         <div class="form-group">
             <label for="password">Password</label>
            <input id="password" />
            <small></small>
        </div>
        <div class="form-group">
            <label for="confirmpassword">Confirm Password</label>
            <input id="confirmpassword" />
            <small></small>
        </div>

        <button type="submit" value="Register">Register</button>


        </div>

</div>

</form>


<script>
     var form=document.getElementById("register_form");
     var username=document.getElementById("username");
     var email=document.getElementById("email");
     var password=document.getElementById("password");
     var confirmpassword=document.getElementById("confirmpassword");

     form.addEventListener("submit", function(e){

        e.preventDefault();

        var ok=true;

        ok=checkRequired([username,email,password,confirmpassword]);
        
        ok=checkEmail(email);

        ok=checkPasswordMatch(password,confirmpassword);

        if (ok)
        {
            alert("Đăng ký thành công");
            form.reset();
            document.querySelectorAll(".form-group").forEach(phantu=>{
                phantu.className="form-group";
            });
        }

       
     }  

   

    
    );


    function checkRequired(arrayofcontrols)
     {
            isok=true;

           
            arrayofcontrols.forEach(input => {

                if (input.value.trim()==="")
                {
                    showError(input,"Cần nhập liệu");
                    isok=false;
                }
                else
                {
                    showSuccess(input);
                }
                
            });

            return isok;


        
     }


     function checkEmail(input) {

        

    const value = input.value.trim();
  

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

    if (emailRegex.test(value)) {

        showSuccess(input);
        return true;

    } else {

        showError(input, "Email is not valid");
        return false;

    }
}

function checkPasswordMatch(input1, input2)
{
    if (input1.value!=input2.value)
    {
        showError(input2,"Mật khẩu phải khớp");
        return false;
    }
    
    return true;
   

}


     



    function showError(input1,message)
    {
        
        var formgroup=input1.parentElement;
        formgroup.className="form-group error";
        var small=formgroup.querySelector("small");
        small.innerText=message;
    }

    function showSuccess(input1)
    {
        
        var formgroup=input1.parentElement;
        formgroup.className="form-group success";
    }


</script>



</body>

</html>