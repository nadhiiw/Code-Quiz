var resultsContainer = document.getElementById('score');
var submitButton = document.getElementById('submit');
var quizContainer = document.getElementById('quiz');
var startButton = document.getElementById('start-btn');
var rulesContainer = document.getElementById('info_box');
var timeEl = document.getElementById('countdown')
var exitEl = document.querySelector('.exit')
var conButton = document.querySelector('.restart')
var quizBox = document.querySelector('.quiz_box')
var questionIndex = 0;
var totalScore =0;

// create the button where you click on the page
conButton.addEventListener('click', setTime)
startButton.addEventListener('click', startGame);

// where to the start the quiz create the function 
function startGame(){
console.log('Started');
startButton.classList.add('hide');
rulesContainer.classList.remove('hide');

}


// create the time 
var secondsLeft = 120;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;

    timeEl.textContent = secondsLeft;
    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
    }
    
  }, 1000);
  showQuestion();
}

// create the question on the page add the div on the html
function showQuestion(){
    rulesContainer.classList.add('hide')
    quizBox.classList.remove('hide')
    var currentQuestion = myQuestions[questionIndex];
    var title = document.createElement('h1');
    title.textContent = currentQuestion.question;
    quizContainer.append(title);

    currentQuestion.answer.forEach(function(answer){
        var button = document.createElement('button');
        button.classList.add('answer')
        button.setAttribute('value', answer);
        button.textContent = answer;
        button.onclick = answerCheck;
        quizContainer.append(button);

    })
    chooseNextScreen();
    
}


// make sure we get the answer, so create the button for the answer
function answerCheck(){
    if(this.value !== myQuestions[questionIndex].correctAnswer){
        console.log('wrong')
        secondsLeft-=5;
    }else{
        console.log('corret')
    }
    totalScore = 0;
    questionIndex++;
    showQuestion();

}

// create the question 
var myQuestions = [
    {
        question:" _____ JavaScript is also called client-side JavaScript.",
        answer: [
            "Microsoft",
            "Navigator",
            "LiveWire",
            "Native"
        ],        
        correctAnswer:"Navigator"     
    },
    {
        question:" _____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation.",
        answer: [
            "Client-side",
            "Server-side",
            "Local",
            "Native"
        ],
        correctAnswer:"Client-side"
    },
    {
        question:"______ tag is an extension to HTML that can enclose any number of JavaScript statements.",
        answer:[
            "<BODY>",
            " <HEAD>",
            " <SCRIPT>",
            "<TITLE>"
        ],
        correctAnswer:"<SCRIPT>"
    },
    {
        question:"What is the correct syntax for referring to an external script called abc.js?",
        answer:[
            "<script href=abc.js>",
            " <script src=abc.js>",
            " <script name=abc.js>",
            "None of the above"
        ],
        correctAnswer:"<script src=abc.js>"
    }
]