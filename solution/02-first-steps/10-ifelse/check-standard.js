/*
Используя конструкцию `if..else`, напишите код, который будет спрашивать: 'Какое "официальное" название JavaScript?'

Если пользователь вводит "ECMAScript", то показать: "Верно!", в противном случае -- отобразить: "Не знаете? ECMAScript!"

*/

let nameOfLanguage = prompt('Какое "официальное" название JavaScript?');
let answer = "Верно!";
let wrongAnswer = "Не знаете? ECMAScript!";
if (nameOfLanguage == "ECMAScript") {
  alert(answer);
} else {
  alert(wrongAnswer);
}
