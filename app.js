let firstScreen = document.querySelector(".section1");
let nextScreen = document.querySelector(".section2");
let sendButton = document.querySelector(".send-button").style.display = ("none");
let input = document.querySelector(".input1");
let startQuiz = document.querySelector(".startaQuiz");
let welcomeHeader = document.querySelector(".welcome");
let mainForm = document.querySelector(".form2");
let sendButton1 = document.querySelector(".send-button1");
let sendDown = document.querySelector('sendDown');
let finishedScreen = document.querySelector(".finished");
let pointsLabel = document.querySelector(".points-label");

//Personligheter nedan

let pers1 = document.querySelector(".Personality1");
let pers2 = document.querySelector(".Personality2");
let pers3 = document.querySelector(".Personality3");
let pers4 = document.querySelector(".Personality4");


startQuiz.addEventListener("click", startQuizFunction);

sendButton1.addEventListener("click", handleForm); //Skickar antalet poäng til finishedscreen

//sendButton.addEventListener("click", continueNext); //skickar dig till section2


function continueNext() {
    firstScreen.classList.toggle("hidden");
    nextScreen.classList.toggle("hidden");
}

function startQuizFunction() {
    mainForm.classList.toggle("hidden");
    welcomeHeader.classList.toggle("hiddenDirect");
}

function inputHidden() { //Gömmer submit knappen om input är tom
    var letterNumber = /^[0-9]+$/;

    if (input.value == "" || input.value.match(letterNumber)) {
        document.querySelector(".send-button").style.display = ("none");
    }
    else {
        document.querySelector(".send-button").style.display = ("block");
        var inputP = document.querySelector(".input1");

    input.addEventListener("keypress", function(event) {
    
  if (event.key === "Enter") {
    event.preventDefault();
    document.querySelector(".send-button").click();
  }
});
    }
}
  

function showValue() {//visar namn input i diven med id' "ID"
    var name = input.value;
    document.getElementById('ID').innerHTML = name;
    //document.getElementById('namnForm').style.display = "none";
    document.querySelector("#sect2").classList.remove("hidden");
    document.querySelector(".section1").classList.toggle("hidden");
    }


function showDiv() {
    document.getElementById('namnForm').style.display = "block";
}

function handleForm() {
    
    let points = 0;
    let answers = document.querySelectorAll("input[type='radio']:checked");
    for (let answer = 0; answer < answers.length; answer++) {
        points += parseInt(answers[answer].value, 10);

    }

    if (points<6) {
        alert("Du måste kryssa i alla svar!");
    }
    
    else{
        nextScreen.classList.toggle("hidden");
        pointsLabel.innerHTML = points;
        finishedScreen.classList.toggle("hidden");
    
        if (points == 6) {
            pers1.classList.toggle("hidden");
        }
        else if (points == 7) {
            pers2.classList.toggle("hidden");
        }
        else if (points == 8) {
            pers3.classList.toggle("hidden");
        }
        else if (points == 9){
            pers4.classList.toggle("hidden");
        }
    }

    
}



//Observerar vilka objekt som är på skärmen och togglar då på "show". Annars så har varje div en "blurred".
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }

    });
});

const blurredElements = document.querySelectorAll(".blurred");
blurredElements.forEach((el) => observer.observe(el));