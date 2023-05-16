const hamburger = document.querySelector(".hamburger");
 const navMenu = document.querySelector(".nav-menu") ;
 
 hamburger.addEventListener("click",() => {
 hamburger.classList.toggle("active");
 navMenu.classList.toggle("active");
})
 document.querySelectorAll(".linkitems").forEach(n => n.addEventListener("click", () => {
 hamburger.classList.remove("active");
 navMenu.classList.remove("active");

 }))
 document.addEventListener("DOMContentLoaded", function() {

    var fadeComplete = function(e) { stage.appendChild(arr[0]); };

    var stage = document.getElementById("slider");
    var arr = stage.getElementsByTagName("span");
    for(var i=0; i < arr.length; i++) {
        arr[i].addEventListener("animationend", fadeComplete, false);

    }

}, false);

 