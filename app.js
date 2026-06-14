// Етап 2

// назва студії
var studioName = prompt("Введіть назву вашої GameDev студії");

while (studioName.length < 3) {
    studioName = prompt("Замало символів. Введіть назву ще раз");
}

// назва гри
var gameName = prompt("Яку гру ви хочете створити?");

while (gameName.length < 2) {
    gameName = prompt("Замало символів. Введіть назву гри ще раз.");
}

// бюджет
var moneyMoney = Number(prompt("Який у вас бюджет?"));

while (isNaN(moneyMoney)) {
    moneyMoney = Number(prompt("Помилка: використовуйте лише цифри."));
}

alert(`Ваш бюджет: $${moneyMoney}`);

// термін
// do {
//     gameName = prompt("Як називатиметься ваша гра?");
// } while (gameName.length < 2);

// 3 Етап

var gametype = ""

do{
    gametype = prompt("Введіть тип видання гри");
} while (gametype = "deluxe" || "standart");


var premiumfeatures = ["+ new skins", "+ 50000 coins", "+ new weapon"];


 
