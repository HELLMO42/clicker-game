

$(function() {
	$(".btn").click(function() {
		$(".form-signin").toggleClass("form-signin-left");
    $(".form-signup").toggleClass("form-signup-left");
    $(".frame").toggleClass("frame-long");
    $(".signup-inactive").toggleClass("signup-active");
    $(".signin-active").toggleClass("signin-inactive");
    $(".forgot").toggleClass("forgot-left");   
    $(this).removeClass("idle").addClass("active");
	});
});

$(function() {
	$(".btn-signup").click(function() {
    const pass = document.getElementsByName("password-signup")[0]?.value;
    const conPass = document.getElementsByName("confirmpassword")[0]?.value;
    const username = document.getElementsByName("username-signup")[0]?.value;
    const email = document.getElementsByName("email")[0]?.value;
    

    const passAlert=document.getElementById("passAlert")

    console.log(pass);
    console.log(conPass);
    

    if (!pass || !conPass || !username || !email) {
      passAlert.textContent="Please fill in all fields."
      passAlert.classList.add("active")
      return;
    }

    else if (pass !== conPass) {
      passAlert.textContent="Passwords do not match."
      passAlert.classList.add("active")
    } 
    else{
      passAlert.classList.remove("active")
          $(".nav").toggleClass("nav-up");
          $(".form-signup-left").toggleClass("form-signup-down");
          $(".success").toggleClass("success-left"); 
          $(".frame").toggleClass("frame-short");
          saveUser()
    }
	});
});

$(function() {
	$(".btn-signin").click(function() {
  $(".btn-animate").toggleClass("btn-animate-grow");
  $(".welcome").toggleClass("welcome-left");
  $(".cover-photo").toggleClass("cover-photo-down");
  $(".frame").toggleClass("frame-short");
  $(".profile-photo").toggleClass("profile-photo-down");
  $(".btn-goback").toggleClass("btn-goback-up");
  $(".forgot").toggleClass("forgot-fade");
	});
});