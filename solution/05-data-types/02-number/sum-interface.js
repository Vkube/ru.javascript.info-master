/*
Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

[demo]

P.S. Есть «подводный камень» при работе с типами.
*/
function sum() {
  let number_1 = +prompt("Введите первое число");
  let number_2 = +prompt("Введите второе число");
  let sum = number_1 + number_2;
  return sum;
}
