/*
Напишите функцию `min(a,b)`, которая возвращает меньшее из чисел `a` и `b`.


Пример вызовов:

```js
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
*/



const min=(a,b)=>a<b?a:b;
console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));