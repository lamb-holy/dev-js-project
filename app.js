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

var premiumfeatures = ["new skins", "50000 coins", "new weapon"];
var premiumFeaturesCost = [200, 400, 300];
var premiumBugs = [4, 2, 50];
var premiumNames = ["New Skins", "50000 Coins", "New Weapon"];

var gametype = prompt("Введіть тип видання гри").toLowerCase();

while(gametype !== "deluxe" && gametype !== "standart") {
        gametype = prompt("Ви ввели неправильний тип гри. Спробуйте ще раз")
    }

switch(gametype) {
    case "deluxe":
        gameFeatures.concat(premiumfeatures);
        featuresCost.concat(premiumFeaturesCost);
        bugCounts.concat(premiumBugs);
        displayNames.concat(premiumNames);
    break;

    case "standart":
    break;
}

 
// ЕТАП 4
var index = -1;


while (index === -1) {
    var gameFeaturesRow = gameFeatures.join(", ");

    var deleted = prompt(`Видавництво піджимає! Виріжте одну з фіч: ${gameFeaturesRow}`);

    index = gameFeatures.findIndex(feature => feature.toLowerCase() === deleted.toLowerCase());

    if (index !== -1) {
        break;
    }

    alert("Такої фічі немає!");
}

gameFeatures.splice(index, 1);
featuresCost.splice(index, 1);
bugCounts.splice(index, 1);

console.log(gameFeatures);
console.log(featuresCost);
console.log(bugCounts);

// var deleted = gametype.splice(prompt(`Видавництво піджимає! Виріжте одну з фіч: ${gameFeaturesRow}`));

// if (gameype = "standart", deleted = "loot boxes" || "multiplayer" || "storymode") {
//     confirm(`Ви вирізали ${deleted}`);
// } else {
//     deleted = gametype.splice(toUpperCase(prompt(`Назву введено неправильно або такої неіснує. Виріжте одну з фіч: ${gameFeaturesRow}`)));
// }



// ЕТАП 5

let sum = 0;

for (let i = 0; i < featuresCost.length; i++) {
    sum += featuresCost.length
}



if(month > 12){
    moneyMoney *= (1 + 15 / 100)
}



