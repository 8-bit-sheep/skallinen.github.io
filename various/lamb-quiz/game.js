const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById("questionCounter");
const scoreText = document.getElementById("score");
const episodeNameText = document.getElementById("episodeName");
const courseNameText = document.getElementById("courseName");
const urlNameText = document.getElementById("episodeurl");
// state
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let questions = [];
   
    const CORRECT_BONUS = 10;
    const MAX_QUESTIONS = 50;
    const startGame = () => {
        questionCounter = 0;
        score = 0;
        availableQuestions = [...questions];
        getNewQuestion();
    }

const getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
        localStorage.setItem("mostRecentScore", score);
        return window.location.assign("end.html");
    }

    questionCounter++;
    questionCounterText.innerText = questionCounter + "/" + MAX_QUESTIONS
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    episodeNameText.innerText = currentQuestion.episode;
    courseNameText.innerText = currentQuestion.course;
    question.innerText = currentQuestion.question;
    urlNameText.href = currentQuestion.url;
    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    })
  
availableQuestions.splice(questionIndex, 1);
acceptingAnswers = true;

}


choices.forEach(choice => {
    choice.addEventListener("click", e => {
       if(!acceptingAnswers) return;
       acceptinganswers = false;
       const selectedChoice = e.target;
       const selectedAnswer = selectedChoice.dataset["number"];
       const classToApply = (selectedAnswer === currentQuestion.answer)? "correct":"incorrect";

       if(classToApply === "correct") {
           incrementScore(CORRECT_BONUS);
       }
    
       console.log(classToApply);
       console.log(selectedAnswer);

       selectedChoice.parentElement.classList.add(classToApply);
       setTimeout(() => {
           selectedChoice.parentElement.classList.remove(classToApply);
           getNewQuestion();
       }, 500);
    })
})

const incrementScore = num => {
    score += num;
    scoreText.innerText = score;
}


const id =  window.location.search.split("=")[1];


d3.csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vSfBk-rwrIauBPn7iuoLXBxP2sSYOXRYCbJ2GflzSK6wxGVGDr_fAqORJ0JWPdajFLxnGegmrlI26HB/pub?output=csv")
    .then((data) => {
        questions = data.filter(question => {
            if(id === "0") return true
            else return question.courseId === id;
        });
        startGame();
        // draw chart in here!
    })
    .catch(function(error){
        // handle error   
    })
