'use srict';

let money = prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

let expenses = new Object();
expenses.firsQuastion = prompt("Введите обязательную статью расходов в этом месяце"),
    expenses.secondQuastion = prompt("Во сколько обойдется?"),
    expenses.getName = function () {
        return (this.firsQuastion + ' : ' + this.secondQuastion);
    }
    /*Задаём пользователю вопросы:
    “Введите обязательную статью расходов в этом месяце”
    “Во сколько обойдется?”
    Записать ответы в объект expenses в формате: 
    expenses: { “ответ на первый вопрос” : “ответ на второй вопрос” }*/

let appData = new Object();
appData.moneyData = money;
appData.timeData = time;
appData.expenses = expenses.getName();
appData.optionalExpenses = NaN;
appData.incom = NaN;
appData.savings = false;

console.log(appData.expenses);

alert("Бюджет на 1 день: " + money / 30 + " Рублей");

// Всего типов данныйх в JS 6
// Инфа в косоль выводится с помощью команды console.log();
// При или возвращает тру, если хотя бы одно значение тру
// При и возвращает тру, когда всё тру, иначе фолз