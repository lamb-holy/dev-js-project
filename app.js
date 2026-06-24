// ЕТАП 1
var gameFeatures = ["loot boxes", "multiplayer", "story mode"];
var featuresCost = [200, 600, 400];
var bugCounts = [12, 45, 8];


for (let i = 0; i < bugCounts.length; i++) {
    if (bugCounts[i] > 30) {
        gameFeatures.slice(i, 1)
        featuresCost.slice(i, 1)
        bugCounts.slice(i, 1)
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

console.log(moneyMoney);

// термін
var month = Number(prompt("Скільки місяців триватиме створення гри?"));

while (isNaN(month)) {
    month = Number(prompt("Помилка: використовуйте лише цифри."));
}


// ЕТАП 3



var gametype = prompt("Введіть тип видання гри").toLowerCase();

while (gametype !== "deluxe" && gametype !== "standart") {
    gametype = prompt("Ви ввели неправильний тип гри. Спробуйте ще раз")
}

switch (gametype) {
    case "deluxe":
        gameFeatures.push("new skins", "+50.000 coins", "new weapon");
        featuresCost.push(200, 400, 300);
        bugCounts.push(4, 2, 50);
        // displayNames.push("New Skins", "+50.000 Coins", "New Weapon");
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



console.log("фічі" + featuresCost.length)

let sum = 0;
for (let i = 0; i < featuresCost.length; i++) {
    sum += featuresCost[i];
}


if (month > 12) {
    sum *= 1.15;
} else if (month < 6) {
    sum *= 0.90; 
}



var rest = moneyMoney - sum;


console.log("зал" + rest)





console.log("sum:" + sum)



if (rest > 0) {
    if (gametype === "deluxe") {
        alert(
            `🎮 Реліз відбувся! Наша гра офіційно стала доступною у Steam.\n\n` +
            `📋 Patch Notes\n\n` +
            `•${gameFeatures[0]}, ${featuresCost[0]}, ${bugCounts[0]} \n` +
            `•${gameFeatures[1]}, ${featuresCost[1]}, ${bugCounts[1]} \n` +
            `•${gameFeatures[2]}, ${featuresCost[2]}, ${bugCounts[2]} \n` +
            `•${gameFeatures[3]}, ${featuresCost[3]}, ${bugCounts[3]} \n` +
            `•${gameFeatures[4]}, ${featuresCost[4]}, ${bugCounts[4]} \n\n` +
            `Дякуємо за підтримку та бажаємо приємної гри!`
        );
    } else if(gametype === "standart") {
        alert(
            `🎮 Реліз відбувся! Наша гра офіційно стала доступною у Steam.\n\n` +
            `📋 Patch Notes\n\n` +
            `•${gameFeatures[0]}, ${featuresCost[0]}, ${bugCounts[0]} \n` +
            `•${gameFeatures[1]}, ${featuresCost[1]}, ${bugCounts[1]} \n\n` +
            `Дякуємо за підтримку та бажаємо приємної гри!`
        );
    } 
} else {
    alert(`Нажаль ваша компанія стала банкрутом`)
}

