const form = document.getElementById("sign-up");

const displayPwdError = function () {
    const pwdError = document.createElement("p");
    pwdError.textContent = "* Passwords do not match"
    pwdError.setAttribute("class", "matching-error")

    const pwd = document.getElementById("pwd");
    
    if (!document.querySelector(".matching-error")) {
        form.appendChild(pwdError)
    }
}

form.addEventListener("submit", (e) => {
    
    const pwd = document.getElementById("pwd");
    const pwdConfirm = document.getElementById("pwd-confirm");

    if (pwd.value !== pwdConfirm.value) {
        e.preventDefault()
        displayPwdError()
        pwd.classList.add("error");
        pwdConfirm.classList.add("error")
    }
})