// ЕТАП 1
var gameFeatures = ["loot boxes", "multiplayer", "story mode"];
var featuresCost = [200, 600, 400];
var bugCounts = [12, 45, 8];
var displayNames = ["Loot Boxes", "Multiplayer", "Story Mode"];

for(let i = 0; i < bugCounts.length; i++) {
    if(bugCounts[i] > 30) {
        gameFeatures.slice(i, 1)
        featuresCost.slice(i, 1)
        bugCounts.slice(i, 1)
        displayNames.slice(i, 1)
    }
}


// ЕТАП 2

// назва студії
var studioName = prompt("Введіть назву вашої GameDev студії");

while (studioName.length < 3) {
    studioName = prompt("Замало символів. Введіть назву ще раз");
}

// назва гри
var gameName = prompt("Яку гру ви хочете створити?");

while (gameName.length < 5) {
    gameName = prompt("Замало символів. Введіть назву гри ще раз.");
}

// бюджет
var moneyMoney = Number(prompt("Який у вас бюджет?"));

while (isNaN(moneyMoney)) {
    moneyMoney = Number(prompt("Помилка: використовуйте лише цифри."));
}

alert(`Ваш бюджет: $${moneyMoney}`);

// термін
var month = Number(prompt("Скільки місяців триватиме створення гри?"));

while (isNaN(month)) {
    month = Number(prompt("Помилка: використовуйте лише цифри."));
}



// do {
//     gameName = prompt("Як називатиметься ваша гра?");
// } while (gameName.length < 2);

// ЕТАП 3



var gametype = prompt("Введіть тип видання гри")

switch(gametype) {
    case "deluxe":
        gameFeatures.concat(premiumfeatures);
        featuresCost.concat(premiumFeaturesCost);
        bugCounts.concat(premiumBugs);
        displayNames.concat(premiumNames)
    break;

    case "standart":
    break;
    default: 
    prompt("Ви ввели неправильний тип гри. Спробуйте ще раз")
}

// alert("Ви ввели неправильний тип гри")

var premiumfeatures = ["new skins", "50000 coins", "new weapon"];
var premiumFeaturesCost = [200, 400, 300]
var premiumBugs = [4, 2, 50];
var premiumNames = ["New skins", "50000 coins", "New weapon"];



 
// ЕТАП 4




// ЕТАП 5

let sum = 0;

for (let i = 0; i < featuresCost.length; i++) {
    sum += featuresCost.length
}



if(month > 12){
    moneyMoney *= (1 + 15 / 100)
}



