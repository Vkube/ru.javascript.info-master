/*

# Две функции - один объект

Возможно ли создать функции `A` и `B` в примере ниже, где объекты равны `new A()==new B()`?


```js no-beautify
function A() { ... }
function B() { ... }

let a = new A;
let b = new B;

alert( a == b ); // true
```

Если да - приведите пример вашего кода.
*/
let obj = {};
function A() {
  return obj;
}
function B() {
  return obj;
}

let a = new A();
let b = new B();

alert(a == b); // true
