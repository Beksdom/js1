// регистрация
var login = prompt('как вас зовут?');
console.log('меня зовут ' + login);

var age = prompt('сколько вам лет?');
console.log('мне ' + age + ' лет/года');

// подтверждение

var ansver1 = prompt( '15 + 15 = ');
console.log('правильный ответ ' + (15+15) + ' ваш ответ ' + ansver1);

var ansver2 = prompt( '78-31');
console.log('правильный ответ ' + (78-31) + ' ваш ответ ' + ansver2);

var ansver3 = prompt( '55 * 69');
console.log('правильный ответ ' + 55*69 + ' ваш ответ ' + ansver3);

var ansver4 = prompt( '98 / 15');
console.log('правильный ответ ' + 98/15 + ' ваш ответ ' + ansver4);

var ansver5 = prompt( '100 % 15');
console.log('правильный ответ ' + 100%15 + ' ваш ответ ' + ansver5);

// использование

var a = +prompt('введите число ');
var b = +prompt('введите число ');
var c = +prompt('введите число ');
var res = alert((a+b+c)/3)