const closeButton = document.getElementById("close-error")
const errorMsg = document.getElementById("error")

closeButton.onclick = () => {
  errorMsg.style.visibility = 'hidden'
}
