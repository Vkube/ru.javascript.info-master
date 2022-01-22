/*
Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

1, если значение больше нуля,
-1, если значение меньше нуля,
0, если значение равно нулю.
Предполагается, что пользователь вводит только числа.
*/

let number = prompt("Введите число");

if (typeof number == "number" || number > 0) {
  console.log(1);
  alert(1);
} else if (number < 0) {
  console.log(-1);
  alert(-1);
} else {
  console.log(0);
  alert(0);
}
