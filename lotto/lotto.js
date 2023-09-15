// var clicked=0;
// function saveButtonClick(button) {
//     if(clicked <6){
//       console.log("Number picked:", button.innerText)
//       clicked++
//     }
//     else{
//         button.disabled=true
//         alert("Reached limit")
//     }
   
// }

var lotto = document.querySelector(".lotto")
var clicked =0;
var picked=[]
var gen=[]
var user=document.querySelector(".user")
var random=document.querySelector(".random")
var start=document.querySelector(".start")
var reset = document.querySelector(".reset");
var match=document.querySelector(".match")
for( var i=1; i<37; i++){
    var btn= document.createElement("button")
    btn.innerText=i
    btn.classList.add("btns")
    btn.style.background = "white";
    lotto.appendChild(btn)
    
    btn.addEventListener("click", function() {
        if (clicked < 6 && this.style.background=="white") {
              
          console.log("Number picked:", this.innerText);
          picked.push(this.innerText)
          this.style.background="yellow"

          clicked++;
        } else if (this.style.background == "yellow") {
            this.style.background = "white";
            var ind = picked.indexOf(this.innerText);
            picked.splice(ind, 1);
            console.log(picked);
            clicked--;
          } 
         
        
     
        
         else if (picked.length == 6) {
            this.disabled = true;
            alert("Reached limit");
          }
    })
   
    
}

start.addEventListener("click", function () {
  if (clicked === 6) {
    user.innerText += " "+ picked +"; "
    clicked++
    while (gen.length !=6) {
      var rand = Math.floor(Math.random() * 36) + 1;
      if(gen.indexOf(rand)==-1){
      random.innerText +=" " +  rand + ", ";
      gen.push(rand)
      
    }}
    match.innerText=""
    var isMatch= false;
    for (var i = 0; i < picked.length; i++) {
      if (gen.includes(parseInt(picked[i]))) {
        match.innerText += " " + picked[i] + ",";
        isMatch = true;
      } 
      else {
        var btnNumber = parseInt(picked[i]);
        var button = document.querySelector(
          "button.btns:nth-child(" + btnNumber + ")"
        );
        button.style.background = "red";
      }
      
    
  }
   if (match.innerText === "") {
     match.innerText = "No Match";
   } else {
     match.innerText = "Matched Numbers:" + match.innerText;
   }
}

 
 else {
    alert("Please pick 6 numbers first.");
  }
});
reset.addEventListener("click", function () {
  clicked = 0;
  picked = [];
  gen = [];
  user.innerText = "User Numbers:";
  random.innerText = "Random Numbers:";
  match.innerText = "";
  var buttons = document.querySelectorAll(".btns");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.background = "white";
    buttons[i].disabled = false;
  }
});







