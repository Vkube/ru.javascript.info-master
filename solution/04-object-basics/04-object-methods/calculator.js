/*
Создайте объект `calculator` (калькулятор) с тремя методами:

- `read()` (читать) запрашивает два значения и сохраняет их как свойства объекта.
- `sum()` (суммировать) возвращает сумму сохранённых значений.
- `mul()` (умножить) перемножает сохранённые значения и возвращает результат.

```js
let calculator = {
  // ... ваш код ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
```


*/

let calculator = {
  read() {
    this.number_1 = +prompt("Введите первое значение");
    this.number_2 = +prompt("Введите второе значение");
  },
  sum() {
    return this.number_1 + this.number_2;
  },
  mul() {
    return this.number_1 * this.number_2;
  },
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
