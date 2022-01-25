/*
Создайте функцию-конструктор `Calculator`, который создаёт объекты с тремя методами:

- `read()` запрашивает два значения при помощи `prompt` и сохраняет их значение в свойствах объекта.
- `sum()` возвращает сумму введённых свойств.
- `mul()` возвращает произведение введённых свойств.


Например:

```js
let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
```
*/
function Calculator(){
    this.number_1=this.number_1;
    this.number_2=this.number_2;

    this.read=function(){
        this.number_1 = +prompt("Введите первое значение");
        this.number_2 = +prompt("Введите второе значение");
    }
    this.sum= function(){
        return this.number_1+this.number_2;
    }
    this.mul=function(){
        return this.number_1*this.number_2;
    }
}
let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );