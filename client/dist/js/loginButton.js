document.getElementById("username").addEventListener("change", function() {
    const username = document.getElementById("username")
    const password = document.getElementById("password")
    const button = document.getElementById("login-button")
    if (username.value && password.value) {
        button.removeAttribute("disabled")
    } else {
        button.setAttribute("disabled", "true")
    }
})

document.getElementById("password").addEventListener("change", function() {
    const username = document.getElementById("username")
    const password = document.getElementById("password")
    const button = document.getElementById("login-button")
    if (username.value && password.value) {
        button.removeAttribute("disabled")
    } else {
        button.setAttribute("disabled", "true")
    }
})