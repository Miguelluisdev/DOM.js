export default document.getElementById("copyToClipboard").addEventListener("click", function(ev){
  const resultInput = document.getElementById("result");
  const btn = ev.currentTarget
  if (btn.innerText = "Copy"){
    btn.innerText = "Copied"
    btn.classList.add("success")
    navigator.clipboard.writeText(resultInput.value)

  } else{
    btn.innerText = "Copy"
    btn.remove("success")
  }

} )
