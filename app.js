const openbtn = document.querySelectorAll(".open-btn");
const closebtn = document.querySelectorAll(".close-btn");
const answer = document.querySelectorAll(".answer");

openbtn.forEach(function(item){
    item.addEventListener("click",function(){
        const rigthAnswer = item.parentElement.parentElement.nextElementSibling;
        const closeBrother = item.nextElementSibling;
        rigthAnswer.classList.toggle("show-answer")
        item.classList.toggle("hide");
        closeBrother.classList.toggle("show");
})})
closebtn.forEach(function(item){
    item.addEventListener("click",function(){
        const rigthAnswer = item.parentElement.parentElement.nextElementSibling;
        const openBrother = item.parentElement.firstElementChild;
        rigthAnswer.classList.toggle("show-answer")
        openBrother.classList.toggle("hide");
        item.classList.toggle("show");
})})


