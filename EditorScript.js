document.URL = "http:www.Quizel.com";

var addq = document.getElementById("addq");
var navbar = document.getElementById("navbar");
var Ten = 0;
var NumNam = 1;
var Down = 758;

addq.onclick = function() {
  CreateQuestion();
}
function CreateQuestion() {
  Q2 = navbar.appendChild(document.createElement("button")).id = "Q" + NumNam;
  id = document.getElementById("Q" + NumNam).id;
  QuestionCheck(document.getElementById(id));
  document.getElementById(id).style.fontFamily = 'Oswald';
  document.getElementById(id).style.fontSize = 50 + "px";
  document.getElementById(id).style.backgroundColor = 0;
  document.getElementById(id).style.background = 0;
  document.getElementById(id).style.border = 0;
  document.getElementById(id).style.top = Ten + "px";
  document.getElementById(id).innerHTML = "Q" + NumNam;
  NumNam += 1;
  if (NumNam > 10) {
    document.getElementById("addq").style.marginTop =+ Down + "px";
    Down = Down + 75;
  }
  Ten += 10;
}

function QuestionCheck(element) {
  element.onclick = function() {
  alert('Yay!');
}
}