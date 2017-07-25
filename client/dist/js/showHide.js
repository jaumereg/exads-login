document.getElementById("visibility").addEventListener("click", function() {
    const password = document.getElementById("password")
    const button = document.getElementById("visibility")
    if (password.getAttribute("type") == "password") {
        password.setAttribute("type", "text")
        button.style.color = '#333'
    } else {
        password.setAttribute("type", "password")
        button.style.color = '#b3b3b3'
    }
})