let username = document.querySelector("#username"),
    password = document.querySelector("#password"),
    btnLogIn = document.querySelector("#login")
    getuser = localStorage.getItem("username"),
    getpassword = localStorage.getItem("password");

    btnLogIn.addEventListener("click" , function (e){
      e.preventDefault();
      if(username.value === "" || password.value === ""){
        alert("please fill data");
      }else{
        if (
          getuser &&
          getuser === getuser &&
          getpassword &&
          getpassword === getpassword
        ) {
          console.log("yes");
              
        setTimeout(() => {
          window.location = "index.html";
        });
        }else{
          console.log("username or password is  wrong !!")
        }
      }
    });

