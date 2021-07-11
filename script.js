const questionsAPI = [
    {
      question: "Q1) 'OS' computer abbreviation usually means ?",
      a: "A) Order of Significance",
      b: "B) Open Software",
      c: "C) Operating System",
      d: "D) Optical Sensor",
      ans: "ans3",
    },
    {
      question: "Q2) Who founded Apple Computer?",
      a: "A) Steve Jobs",
      b: "B) Stephen Fry",
      c: "C) Bill Gates",
      d: "D) Stephen Hawking",
      ans: "ans1",
    },
    {
      question: "Q3) What is the name for a computer pointing device?",
      a: "A) Sound Card",
      b: "B) A Mouse",
      c: "C) Ram",
      d: "D) Monitor",
      ans: "ans2",
    },
    {
      question:
        "Q4) Which of these language is used for Data Science as alternative to Python ?",
      a: "A) R",
      b: "B) Java",
      c: "C) C",
      d: "D) PHP",
      ans: "ans1",
    },
    {
      question: "Q5) Which of these is not a peripheral, in computer terms?",
      a: "A) Keyboard",
      b: "B) Mouse",
      c: "C) Monitor",
      d: "D) Motherboard",
      ans: "ans4",
    },
  ];
  
  const question = document.querySelector(".question");
  const option1 = document.querySelector("#option1");
  const option2 = document.querySelector("#option2");
  const option3 = document.querySelector("#option3");
  const option4 = document.querySelector("#option4");
  const submit = document.querySelector("#submit");
  const answers = document.querySelectorAll(".answer");
  
  const showScore  = document.querySelector('#showScore');
  
  let questionCount = 0;
  let score = 0;
  
  const loadQuestion = () => {
      const questionList = questionsAPI[questionCount];
      
      question.innerHTML = questionList.question;
      option1.innerHTML = questionList.a;
      option2.innerHTML = questionList.b;
      option3.innerHTML = questionList.c;
      option4.innerHTML = questionList.d;
  
  }
  
  loadQuestion();
  
  const disSelectAll = () => {
      answers.forEach((curAnsEle) => curAnsEle.checked = false);
  }
  
  const getCheckedAnswer = () => {
      let answer;
      answers.forEach((curAnsEle) => {
          if(curAnsEle.checked){
              answer = curAnsEle.id;
          }
      })
      return answer;
  }
  
  submit.addEventListener('click', () => {
      const checkedAnswer = getCheckedAnswer();
      if(checkedAnswer === questionsAPI[questionCount].ans){
          score++ ;
      }
      questionCount++;
  
      disSelectAll();
      
      if(questionCount < questionsAPI.length){
          loadQuestion();
      }else{
          showScore.innerHTML = `
              <h3 class="score-text" >Your Score is: ${score}/${questionsAPI.length} 🏆</h3>
              <button class="btn playAgain" onclick="location.reload()">Play Again</button>
          `;
          
          showScore.classList.remove('scoreArea');
      }
      
  });
  