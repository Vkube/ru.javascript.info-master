/*
# Привет, object

Напишите код, выполнив задание из каждого пункта отдельной строкой:

1. Создайте пустой объект `user`.
2. Добавьте свойство `name` со значением `John`.
3. Добавьте свойство `surname` со значением `Smith`.
4. Измените значение свойства `name` на `Pete`.
5. Удалите свойство `name` из объекта.

*/
console.log(" Создайте пустой объект `user`.");
let user={};
console.log(user);
console.log(" Добавьте свойство `name` со значением `John`.")
user.name='John';
console.log(user);
console.log("Добавьте свойство `surname` со значением `Smith`.")
user.surname='Smith';
console.log(user);
console.log(" Измените значение свойства `name` на `Pete`.");
user.name='Pete';
console.log(user);

console.log("Удалите свойство `name` из объекта.");
delete user.name;
console.log(user);