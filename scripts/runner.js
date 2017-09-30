var quiz = {
  name:"first-quiz",
  question:["one","two","three","four"],
  trueAnswer:[0,1,2,3],
  answers:[
    ["1","2","3","4",],
    ["1","2","3","4",],
    ["1","2","3","4",],
    ["1","2","3","4",],
  ]
}

document.querySelector('#butt').onclick = function(){
  //changes boxes back to light grey
  var answer = document.querySelectorAll('.answer');
  for (i=0 ; i<answer.length; i++) {
      answer[i].style.backgroundColor = '#dedede';//light grey
  }
  //onclick run load() and increment it by one
  this.setAttribute("data-clicks", +load()+1);
  if (!load()){
    this.innerHTML = "restart";
  }
}

function load(){
  var button = document.querySelector('#butt');
  var clicks = button.getAttribute("data-clicks");
  var box = document.querySelector('#quiz-box');
  //for(i=0;i<quiz.answers.length;i++){shuffle(quiz.answers[i]);}
  box.style.display = 'block';
  //after quiz is over replace box with 'complete'
  if(quiz.answers[clicks]==undefined){
    box.style.display = 'none';
    return false;
  }else{
    //writes the values from the question and answers arrays
    document.querySelector('#question p').innerHTML = quiz.question[clicks];
    for(i=0;i<quiz.answers[0].length;i++){
      document.querySelector('#answer-'+i).innerHTML = quiz.answers[clicks][i];
    }
  }
  return clicks;
};

function answer(x){
  //makes each box dark grey
  //the if the chosen box is green if correct or red when wrong
  var button = document.querySelector('#butt');
  var clicks = button.getAttribute("data-clicks");
  var given  = document.querySelector('#answer-'+x);
  var answer = document.querySelectorAll('.answer');
  for (i=0 ; i<answer.length; i++) {
      answer[i].style.backgroundColor = '#95a5a6';//dark grey
  }
  if(x === quiz.trueAnswer[clicks]-1){
    //-1 because a click is required to start quiz
    given.style.backgroundColor = '#4CAF50';//green
  }else{
    given.style.backgroundColor = '#f44336';//red
  }
}
