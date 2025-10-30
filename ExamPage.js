var previous = document.querySelector(".previous");
var number = document.querySelector(".number");
var next = document.querySelector(".next");
var submit = document.querySelector(".submit");
var timer = document.querySelector(".timer");
var ques = document.querySelector(".questions");
var choicesText = document.querySelectorAll(".answers label");
var inputs = document.querySelectorAll(".answers input");
var marks = document.querySelector(".mark");
var marklist = document.querySelector(".marked-list");

var question1 = {
    questionText:"What is Cristiano Ronaldo’s full name ?",
    choices:["Cristiano Ronaldo da Silva Santos",
        "Cristiano Ronaldo dos Santos Aveiro",
        "Cristiano Ronaldo de Oliveira",
        "Cristiano Ronaldo Junior"],
    answerText:"Cristiano Ronaldo dos Santos Aveiro",
}

var question2 = {
    questionText: "When was Cristiano Ronaldo born?",
    choices: ["1980", "1985", "1990", "1995"],
    answerText: "1985"
};

var question3 = {
    questionText: "Which country is Cristiano Ronaldo from?",
    choices: ["Spain", "Portugal", "Brazil", "Italy"],
    answerText: "Portugal"
};

var question4 = {
    questionText: "Which club did Ronaldo join in 2023?",
    choices: ["Manchester United", "Real Madrid", "Al Nassr", "Juventus"],
    answerText: "Al Nassr"
};

var question5 = {
    questionText: "What number does Ronaldo usually wear?",
    choices: ["7", "9", "10", "11"],
    answerText: "7"
};

var question6 = {
    questionText: "Which club did Ronaldo play for before Real Madrid?",
    choices: ["Sporting Lisbon", "Manchester United", "Juventus", "AC Milan"],
    answerText: "Manchester United"
};

var question7 = {
    questionText: "How many Ballon d’Or awards has Ronaldo won?",
    choices: ["3", "4", "5", "6"],
    answerText: "5"
};

var question8 = {
    questionText: "What is Ronaldo’s famous nickname?",
    choices: ["CR7", "Roni", "The King", "Golden Boy"],
    answerText: "CR7"
};

var question9 = {
    questionText: "Which position does Ronaldo usually play?",
    choices: ["Goalkeeper", "Defender", "Forward", "Midfielder"],
    answerText: "Forward"
};

var question10 = {
    questionText: "Which country did Ronaldo win the Euro Cup with?",
    choices: ["Spain", "Portugal", "France", "England"],
    answerText: "Portugal"
};

var arr =[question1,question2,question3,question4,question5,question6,question7,question8,question9,question10];
//----------------------------------------------------------------------

var dublicateRandom =[];
var random;
var currentIndex=0;

for (let i = 0; i < arr.length; i++) {
    let r;
    do {
        r = Math.floor(Math.random() * arr.length);
    } while (dublicateRandom.includes(r));
    dublicateRandom.push(r);
}




//-------------------------------------------------------------------------


    function mark (){
            var list;
            marks.addEventListener("click",function(){

                if(marks.textContent=="Mark"){

                console.log("ffffffffff");
            
                list = document.createElement("li");
                //--------------------------------------------------------------
            



                //-------------------------------------------------------
                list.dataset.index=random;
                list.addEventListener("click",function(){
                    currentIndex = dublicateRandom.indexOf(parseInt(this.dataset.index));
                    RandomQuestion();
                    number.textContent = currentIndex + 1;
                    mark.textContent="unmark"

                    // currentIndex=random;
                    // RandomQuestion();
                    // arr[currentIndex].questionText
                });
                //-------------------------------------------------------
                var text = document.createTextNode(arr[random].questionText);
                list.appendChild(text);
                marklist.appendChild(list);
                //----------------------------------------
                // if(marklist.contains(list)){
                //     marks.textContent="unmark";
                // }
                // //------------------------------------
                marks.textContent="unmark";


                }
                else if(marks.textContent=="unmark"){

                    console.log("hhhhhhhh");
                    

                    var items = marklist.getElementsByTagName("li");
                for (var i = 0; i < items.length; i++) {
                    if (items[i].textContent == arr[random].questionText) {
                        marklist.removeChild(items[i]);
                        break; 
                    }
                }
                
                marks.textContent="Mark";

            }})
        }
//-------------------------------------------------
// var dublicateRandom =[];
// var random;
// var ttt=[];
// var number;
// var currentIndex=0;
//------------------------------------------------

function RandomQuestion (){
    
    
    // do{
    //     random =Math.floor(Math.random()*arr.length);
    //             console.log(random);
    // }while(dublicateRandom.includes(random))
        
    // dublicateRandom.push(random);
    //---------------------------------------------------------
    // console.log(dublicateRandom);
    
    random=dublicateRandom[currentIndex];
    ques.textContent=arr[random].questionText;
    // ttt.push(arr[random].questionText);
    

    for (let index = 0; index < choicesText.length; index++) {
        choicesText[index].textContent = arr[random].choices[index];
        inputs[index].value=arr[random].choices[index];
        // console.log(inputs[index].value);
        inputs[index].addEventListener("input",function() {
            if(inputs[index].value == arr[random].answerText){


            console.log("true")
        }else{
            console.log("false")
        }
        })

//---------------------------------
        mark();
        //---------------
        }
    }

    mark();
window.addEventListener("load",function(){
    RandomQuestion();
    // mark();
    
})

previous.addEventListener("click",function(){

    // ques.textContent=dublicateRandom[dublicateRandom.length-1].questionText;
    // ques.textContent=ttt[ttt.length-1].questionText;
    if(currentIndex>0){
        currentIndex--;
        RandomQuestion()
    }
    // RandomQuestion();
    
    number.textContent = Number(number.textContent)-1;

    if(Number(number.textContent)==1){
            previous.style.display="none";
    }
    if(Number(number.textContent)<10){
            next.style.display="block";
        }
})

next.addEventListener("click",function(){

    if(currentIndex<arr.length-1){
        currentIndex++
        RandomQuestion();
    }
    

    
    number.textContent = Number(number.textContent)+1 ;

    if(Number(number.textContent)==10){
            next.style.display="none";
        }

        if(Number(number.textContent) > 1){
        previous.style.display="block";
    }
})

submit.addEventListener("click",function(e){
    
    location.href="http:GradesPage.html";
    // if(history.back() == "http:ExamPage.html"){
    //     e.preventDefault();
    // }
    
})

window.onload=setInterval(() => {
    if(Number(timer.textContent)==0){
        location.href="http:TimeOutPage.html";
    }
    timer.textContent-=1
    
}, 1000);
