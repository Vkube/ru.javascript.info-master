/*
У нас есть объект, в котором хранятся зарплаты нашей команды:

```js
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
```

Напишите код для суммирования всех зарплат и сохраните результат в переменной `sum`. Должно получиться `390`.

Если объект `salaries` пуст, то результат должен быть `0`.
*/
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
  getSum(salaries);

  function getSum(obj){
      if (Object.keys(obj).length==0) {
          return 0;
      }
let array= Object.values(obj);
return console.log(array.reduce((a,b)=>a+b,0));
  }



