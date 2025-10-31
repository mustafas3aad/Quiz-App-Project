// window.addEventListener("popstate",function(e){
//     if(document.referrer.includes("ExamPage.html") ){
//         e.preventDefault();
//     }
// })


var score = document.querySelector("div p span");

var grade = window.localStorage.getItem("score");

score.textContent = `${grade}`;

var image1 = document.querySelector(".score-uP");
var image2 = document.querySelector(".score-down");
var image3 = document.querySelector(".score-equall");

if(grade <= 5 && grade > 0)
    image1.src="/sad.jpg";
else if(grade>5 && grade<=10)
    image2.src="/happy.tmp.webp";
else if (grade == 0)
    image3.src="/angry.jpg";



