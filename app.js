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

// var premiumfeatures = ["new skins", "50000 coins", "new weapon"];
// var premiumFeaturesCost = [200, 400, 300];
// var premiumBugs = [4, 2, 50];
// var premiumNames = ["New Skins", "50000 Coins", "New Weapon"];

var gametype = prompt("Введіть тип видання гри").toLowerCase();

while(gametype !== "deluxe" && gametype !== "standart") {
        gametype = prompt("Ви ввели неправильний тип гри. Спробуйте ще раз")
    }

switch(gametype) {
    case "deluxe":
        gameFeatures.splice(0, 0, "new skins", "50000 coins", "new weapon");
        featuresCost.splice(0, 0, 200, 400, 300);
        bugCounts.splice(0, 0, 4, 2, 50);
        displayNames.splice(0, 0, "New Skins", "50000 Coins", "New Weapon");
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

alert(`У вас залишились: ${gameFeatures.join(", ")}.`);




// ЕТАП 5

// сума вартості всіх фіч, що залишилися

let sum = 0;

for (let i = 0; i < featuresCost.length; i++) {
    sum += featuresCost.length
}

// Фактор часу

switch(month) {
    case month >= 12:
        moneyMoney *= 1.15
    break;
    case month <= 6:
        moneyMoney *= 0.90
    break;
}

var finMoney = moneyMoney - (moneyMoney - sum)

var finish = alert(
"🎮 Реліз відбувся! Наша гра офіційно стала доступною у Steam." +
"📋 Patch Notes" +
"• Покращена система бою — ціна: 120 монет, багів: 2" +
"• Нові сюжетні місії — ціна: 200 монет, багів: 1" +
"• Режим кооперативної гри — ціна: 150 монет, багів: 3" +
"• Набір ексклюзивних скінів (Deluxe) — ціна: 80 монет, багів: 0" +
"• Додаткові карти (Deluxe) — ціна: 100 монет, багів: 1" +
"Дякуємо за підтримку та бажаємо приємної гри!"
);