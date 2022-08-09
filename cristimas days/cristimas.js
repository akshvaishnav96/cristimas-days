

let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    let textarea = document.getElementById("textarea");
  if(textarea.value == '' || textarea.value < 1){
  let text = document.getElementById("text");
    
    text.innerHTML= ("please enter the date first")}
    else{
    getdate = ()=>{
  let textarea = document.getElementById("textarea");
  let d = textarea.value;
  let date = new Date(d);
  let y = date.getFullYear();
  let cri = new Date(`25 dec ${y}`);
  let yy;
  if (date > cri) {
    let y2 = cri.getFullYear();
    yy = y2 + 1;
    cri.setFullYear(yy);
  }
  let diff = cri - date;
  let days = diff / 8.64e7;
  
if(days !== 0){
  text.innerHTML = "Cristimas party in" + " " + (days+1) + " " + "days";
}

 else {
    text.innerHTML = "\uD83C\uDF89 Today is Cristimas \uD83C\uDF89";
    text.style.textAlign = "center"
  }
}
getdate()}
});





