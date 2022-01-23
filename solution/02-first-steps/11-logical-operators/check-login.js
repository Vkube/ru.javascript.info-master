let permissionUser = prompt("Кто вы?");

if (permissionUser == "Админ") {
  let password = prompt("Введите пароль");
  if (password == "Я главный") {
    alert("Здравствуйте!");
  } else {
    alert("Неверный пароль");
  }
} else {
  alert("Я вас не знаю");
}
