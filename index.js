//Adding an Event Listerner
function clickMe(){
  alert ("I was clicked!");
}
 function addingEventListener (){
   const input =document.getElementById("input"); 
   input.addEventListener("click",clickMe);
 }



