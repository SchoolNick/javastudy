'use srict';

let money = prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

// let expenses = new Object();
// expenses.a1 = prompt("Введите обязательную статью расходов в этом месяце"),
//     expenses.a2 = prompt("Во сколько обойдется?"),
//     expenses.a3 = prompt("Введите обязательную статью расходов в этом месяце"),
//     expenses.a4 = prompt("Во сколько обойдется?"),
//     expenses.getName = function () {
//         return (this.a1 + ' : ' + this.a2,
//                 this.a3 + ' : ' + this.a4);
//     }
    /*Задаём пользователю вопросы:
    “Введите обязательную статью расходов в этом месяце”
    “Во сколько обойдется?”
    Записать ответы в объект expenses в формате: 
    expenses: { “ответ на первый вопрос” : “ответ на второй вопрос” }*/

let appData = new Object();
appData.budget = money;
appData.timeData = time;
appData.expenses = {};
appData.optionalExpenses = [];
appData.incom = [];
appData.savings = false;

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    a2 = prompt("Во сколько обойдется?", ""),
    a3 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    a4 = prompt("Во сколько обойдется?", "");

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

console.log(appData.expenses);

alert("Бюджет на 1 день: " + appData.budget / 30 + " Рублей");

// Всего типов данныйх в JS 6
// Инфа в косоль выводится с помощью команды console.log();
// При или возвращает тру, если хотя бы одно значение тру
// При и возвращает тру, когда всё тру, иначе фолз