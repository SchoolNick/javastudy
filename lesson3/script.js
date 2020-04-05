'use srict';

let money = +prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = new Object();
appData.budget = money;
appData.timeData = time;
appData.expenses = {};
appData.optionalExpenses = [];
appData.incom = [];
appData.savings = false;


for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");

    if ((typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null 
        && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        alert("Ошбика, неверные данные!");
        window.location.reload();
        break;
    }
}

// let i = 0;

// while( i < 2 ) {
//     i++;
//     var a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");

//     if ((typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null 
//         && a != '' && b != '' && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//     } else {
//         alert("Ошбика, неверные данные!");
//         window.location.reload();
//         break;
//     }    
// }

// let i = 0;

// do {
//     i++;
//     var a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");

//     if ((typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null 
//         && a != '' && b != '' && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//     } else {
//         alert("Ошбика, неверные данные!");
//         window.location.reload();
//         break;
//     }  
// } while ( i < 2 );

appData.moneyPerDay = appData.budget /30;

alert("Бюджет на 1 день: " + appData.moneyPerDay + " Рублей");

if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высоский уровень достатка");
} else {
    console.log("Ошибка");
}

