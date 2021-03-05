const num1 = prompt("Введите число");
const num2 = prompt("Введите систему изчислений");

console.log(parseInt(10).toString(2));

function checkNumber(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    alert("Некоректный ввод");
  }

  alert(`число ${num1} в ${num2} системе:` + parseInt(num1).toString(num2));
  alert(`сумма чисел: ${num1 + num2}, частное чисел: ${num1 - num2}`);
}

checkNumber(num1, num2);
