const quizData=[
    {
        question: 'full form of html',
        a: 'hyper text markup language',
        b: 'httpppp',
        c: 'hyper test language',
        d: 'hypree',
        correct: 'a'
    },{
        question: 'prime minister of india',
        a: 'pm modi',
        b: 'narendra modi',
        c: 'hyper test language',
        d: 'hypree',
        correct: 'b'
    },{
        question: 'India national sports',
        a: 'pm modi',
        b: 'narendra modi',
        c: 'hockey',
        d: 'kabadii',
        correct: 'c'
    },{
        question: 'chief minister of maharashtra',
        a: 'pm modi',
        b: 'narendra modi',
        c: 'hyper test language',
        d: 'udhav thackrey',
        correct: 'd'
    }
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswer();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
  
}

function getSelected(){
    
    let answer = undefined;
    answerEls.forEach((answerEl) => {
       if (answerEl.checked){
           answer = answerEl.id;
       }
    });
    return answer;
}

function deselectAnswer(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
        
        });
}

submitBtn.addEventListener("click", ()=>{
    const answer = getSelected();

    if(answer){
        if (answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz< quizData.length){
            loadQuiz();
        }else{
            quiz.innerHTML = `<h2>you answerd correctly at ${score}/${quizData.length} questions.</h2>
            
            <button onclick="location.reload()">Reload<button>`;
        }
    }
});



