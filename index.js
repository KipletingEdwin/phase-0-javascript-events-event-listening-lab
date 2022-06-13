//Adding an Event Listerner


function clickAlert() {
  alert("I was clicked");
}
function addingEventListener() {
  const input = document.getElementById("input");
  input.addEventListener("click", clickAlert);
}


