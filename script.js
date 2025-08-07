document.getElementById("LoginBtn").addEventListener("click", function () {
    const email = document.getElementById("email").value;
    const errorMsg = document.getElementById("error-msg");
    const successMsg = document.getElementById("success-msg");
  
    if (email.includes("@") && email.includes(".")) {
      errorMsg.textContent = "";
      successMsg.style.display = "block";
    } else {
      errorMsg.textContent = "Email inválido";
      successMsg.style.display = "none";
    }
  });