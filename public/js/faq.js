//console.log('Jalo conexion con JS');

/*------------------------ Jala bien -------------------- //
var question1 = document.getElementById("pregunta1");
console.log(question1)
question1.addEventListener("Click", showAnswer1());

var answer1 = document.getElementById('faq__answer1')
console.log(answer1);

function showAnswer1() {
  var x = document.getElementById('faq__answer1');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}
//------------------------------------------------------- */
var question1 = document.getElementById("pregunta1");
question1.addEventListener("Click", showAnswer1());
function showAnswer1() {
  let  answer1 = document.getElementById('faq__answer1');
  ( answer1.style.display === 'none') ?  answer1.style.display = 'block':  answer1.style.display = 'none';
}
var question2 = document.getElementById("pregunta2");
question2.addEventListener("Click", showAnswer2());
function showAnswer2() {
  let  answer2 = document.getElementById('faq__answer2');
  ( answer2.style.display === 'none') ?  answer2.style.display = 'block':  answer2.style.display = 'none';
}
var question3 = document.getElementById("pregunta3");
question3.addEventListener("Click", showAnswer3());
function showAnswer3() {
  let  answer3 = document.getElementById('faq__answer3');
  ( answer3.style.display === 'none') ?  answer3.style.display = 'block':  answer3.style.display = 'none';
}
var question4 = document.getElementById("pregunta4");
question4.addEventListener("Click", showAnswer4());
function showAnswer4() {
  let  answer4 = document.getElementById('faq__answer4');
  ( answer4.style.display === 'none') ?  answer4.style.display = 'block':  answer4.style.display = 'none';
}
var question5 = document.getElementById("pregunta5");
question5.addEventListener("Click", showAnswer5());
function showAnswer5() {
  let  answer5 = document.getElementById('faq__answer5');
  ( answer5.style.display === 'none') ?  answer5.style.display = 'block':  answer5.style.display = 'none';
}
var question6 = document.getElementById("pregunta6");
question6.addEventListener("Click", showAnswer6());
function showAnswer6() {
  let  answer6 = document.getElementById('faq__answer6');
  ( answer6.style.display === 'none') ?  answer6.style.display = 'block':  answer6.style.display = 'none';
}
var question7 = document.getElementById("pregunta7");
question7.addEventListener("Click", showAnswer7());
function showAnswer7() {
  let  answer7 = document.getElementById('faq__answer7');
  ( answer7.style.display === 'none') ?  answer7.style.display = 'block':  answer7.style.display = 'none';
}
