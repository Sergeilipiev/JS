var lan = prompt ("Какой язык выбрать?\n1-Русский\n2-Английский\n3-Немецкий");
lan = parseInt(lan);
switch (lan) {
  case 1: lan = "Русиш";
    break;
  case 2: lan = "English";
    break;
  case 3: lan = "Deutch";
    break;
      default: lan = "Вы ввели неверное число";
};
alert(lan);
