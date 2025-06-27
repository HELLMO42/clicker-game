$(function() {
  $(".btn").click(function () {
    $(".form-signin").toggleClass("form-signin-left");
    $(".form-signup").toggleClass("form-signup-left");
    $(".frame").toggleClass("frame-long");
    $(".signup-inactive").toggleClass("signup-active");
    $(".signin-active").toggleClass("signin-inactive");
    $(".forgot").toggleClass("forgot-left");
    $(this).removeClass("idle").addClass("active");
  });
});

$(function () {
  $(".btn-signup").click(function () {
    const pass = document.getElementsByName("password-signup")[0]?.value;
    const conPass = document.getElementsByName("confirmpassword")[0]?.value;
    const username = document.getElementsByName("username-signup")[0]?.value;
    const email = document.getElementsByName("email")[0]?.value;

    const passAlert = document.getElementById("passAlert");

    if (!pass || !conPass || !username || !email) {
      passAlert.textContent = "Please fill in all fields.";
      passAlert.classList.add("active");
      return;
    }

    if (pass !== conPass) {
      passAlert.textContent = "Passwords do not match.";
      passAlert.classList.add("active");
      return;
    }

    passAlert.classList.remove("active");
    $(".nav").toggleClass("nav-up");
    $(".form-signup-left").toggleClass("form-signup-down");
    $(".success").toggleClass("success-left");
    $(".frame").toggleClass("frame-short");
    saveUser(username, email, pass);
    
  });
});

$(function () {
  $(".btn-signin").click(function () {
    loginUser();

    $(".btn-animate").toggleClass("btn-animate-grow");
    $(".welcome").toggleClass("welcome-left");
    $(".cover-photo").toggleClass("cover-photo-down");
    $(".frame").toggleClass("frame-short");
    $(".profile-photo").toggleClass("profile-photo-down");
    $(".btn-goback").toggleClass("btn-goback-up");
    $(".forgot").toggleClass("forgot-fade");
  });
});

function saveUser(username, email, password) {
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  const existing = users.find((u) => u.username === username);
  if (existing) {
    alert("Tài khoản đã tồn tại!");
    return;
  }

  const newUser = { username, email, password };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("currentUser", JSON.stringify(newUser));
  alert("Đăng ký thành công!");
  showUserInfo(newUser);
}

function loginUser() {
  const username = document.getElementsByName("username")[0]?.value;
  const password = document.getElementsByName("password")[0]?.value;

  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
    alert("Đăng nhập thành công!");
    showUserInfo(user);
  } else {
    alert("Sai tài khoản hoặc mật khẩu!");
  }
}

function showUserInfo(user) {
  const welcome = document.querySelector(".welcome");
  if (welcome) welcome.textContent = `Welcome, ${user.username}`;
}

window.onload = function () {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (currentUser) {
    showUserInfo(currentUser);
  }
};
