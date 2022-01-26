const quizData = [
    {
        question : "What is the capital of USA ?",
        a: 'Washington DC',
        b: 'Miami',
        c: 'New York',
        d: 'None of the above',
        correct :'a'
    }, {
        question : "Which one isnt a country ?",
        a: 'Hong Kong',
        b: 'South Africa',
        c: 'Egypt',
        d: 'Japan',
        correct :'a'
    }, {
        question : "Where is D.Trump living currently?",
        a: 'India',
        b: 'USA',
        c: 'Iran',
        d: 'Canada',
        correct :'b'
    }, {
        question : "What was kanye last album ?",
        a: 'Linda',
        b: 'Donda',
        c: 'G.O.D',
        d: 'Child',
        correct :'b'
    }
];
const answersEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0; //keep track of the currrent question 
let score = 0;

loadQuiz(); //we need to load quiz, basically call the functioneverytime you submit the quiz

function loadQuiz() {
    

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    deselectAnswers();

}


function getSelected() {
    const answersEls = document.querySelectorAll(".answer");
   
    let answer = undefined;

    answersEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer =  answerEl.id;

        }
        
    });
    return answer;
}

// deselect the option before moving to the next question so that
// next questions options will have no selected options

function deselectAnswers() {
    answersEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}


submitBtn.addEventListener('click', () => {
    //chk to see the answer, if we have the answer we want to go to next ques by loading the current quiz
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;
    }
    if(currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        //TODO: show results
        quiz.innerHTML = `<h2>You answered  
         ${score}/${quizData.length} questions correctly.</h2> <button onclick ="location.reload()"> Reload Quiz</button>`;
    }

});
