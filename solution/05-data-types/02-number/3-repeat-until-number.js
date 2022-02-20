"use strict";

const readNumber = () => {
  let num = null;
  do {
    num = prompt("Введите число", 0);
  } while (!isFinite(num));

  if (num === null || num === "") return null;

  return +num;
};
