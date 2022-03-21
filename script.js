// console.log("hello.js");

// var b = "hello";
// console.log(b);

// document.getElementById("para").innerHTML = "hello";

// var age = prompt("enter your age ?");
// console.log(age)
// document.getElementById("para").innerHTML = `Your age is ${age}`;

// var num1 = 5.5;
// console.log(num1 * 10);
// num1 = num1 + 1;
// num1++;
// num1--;
// num1 % 3;

// function func() {
//     console.log("hello");
// }
// func();

// function func() {
//     var age = prompt("Your age ?");
//     var name = prompt("Your Name");
//     console.log(age, name);
//     document.getElementById("para").innerHTML = `Hello ${name} , Your age is ${age}`
// }
// func()

// function addNum(num1, num2) {
//     var num3 = num1 + num2;
//     console.log(num3)
// }
// addNum(2, 6)

// function addNum(num1, num2 = 7) {
//     var num3 = num1 + num2;
//     console.log(num3)
// }
// addNum(2)

// var num = 1;
// while (num <= 10) {
//     console.log(num);
//     num++;
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// let num = 0;
// let bool = false;
// let name = "new";
// let obj = { first: "amit", last: "kumar" };
// let undefined;
// let nothing = null;
// let array = ["a", "b"];

// let string1 = "hello,world"
// let strong2 = "world"
// console.log(string1.length);
// console.log(string1.indexOf("ell"));
// console.log(string1.slice(2, 6));
// console.log(string1.split(","));
// console.log(string1.split(""));

// let fruits = ["banana", "mango"];
// fruits = new Array("kiwi", "melon");

// fruits[0] = "new"
// alert(fruits[0]);

// for (let i = 0; i <= fruits.length - 1; i++) {
//     console.log("converted to string", `${fruits[i].toString()}`)
// }
// console.log(fruits, fruits.pop(), fruits);

// console.log(fruits.join("*"));

// fruits.shift()
// console.log(fruits);

// fruits.unshift()
// console.log(fruits);

// fruits.unshift("melon")
// console.log(fruits);

// let veg = ["potato", "tomato"]
// console.log(fruits.concat(veg))

// let veg = ["potato", "tomato"]
// console.log(veg.reverse())

// let numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 11];
// console.log(numbs.sort())
// console.log(numbs.sort(function (a, b) { return a - b }));
// console.log(numbs.sort(function (a, b) { return b - a }));

// let array = [];
// for (let i = 0; i <= 10; i++) {
//     array.push(i);
// }
// console.log(array)

// let data = {
//     name: "amit",
//     sirname: "kumar",
//     fullname: function () { console.log(`${this.name} ${this.sirname}`) }
// }
// data.fullname();

// var age = prompt("your age ?");
// if ((age >= 13) && (age <= 19)) {
//     console.log("teen")
// }
// else {
//     console.log("not teen")
// }

// switch (3) {
//     case 2: text = "2";
//         break;
//     case 3: text = "3"
//         break;
//     default: text = "none"
// }
// console.log(text)

// let data = [{ name: "john" }, { name: "amit" }]
// console.log(data[0].name);
// data[0].name = "rabbit";
// console.log(data[0].name);
// console.log(JSON.parse(data)[1])

// challenge 1
function getdays() {
    var birthyr = prompt("Enter Your Birth year !!!")
    var indays = (2022 - birthyr) * 365;
    var h3 = document.createElement("h3");
    var text = document.createTextNode(`Your are ${indays} days old`);
    h3.setAttribute("id", "indays");
    h3.appendChild(text);
    document.getElementById("showdays").appendChild(h3);
    console.log(text)
}
function reset() {
    document.getElementById("indays").remove();
}

// challenge 2
function createcat() {
    var img = document.createElement("img");
    img.setAttribute("src", "https://thecatapi.com/api/images/get?format=src&type=gif&size=small");
    document.getElementById("showcats").appendChild(img);
}

// challenge 3
function rpsGame(yourChoice) {
    var userChoice = yourChoice.id
    var botChoice = rItems(rChoice());
    // alert(botChoice + " " + userChoice);
    var result = whoWin(botChoice, userChoice);
    var message = winMessage(result);
    frontEndAnswer(message, userChoice, botChoice);
}
function rChoice() {
    return Math.floor(Math.random() * 3);
}
function rItems(random) {
    return ["rock", "paper", "scissor"][random]
}
function whoWin(bot, user) {
    var data = {
        "rock": { "scissor": 1, "rock": 0.5, "paper": 0 },
        "paper": { "rock": 1, "paper": 0.5, "scissor": 0 },
        "scissor": { "paper": 1, "scissor": 0.5, "rock": 0 }
    }
    var botScore = data[bot][user];
    var userScore = data[user][bot];
    // alert([botScore, userScore]);
    return [botScore, userScore];
}
function winMessage([botScore, userScore]) {
    if (userScore === 0) {
        return { message: "You lost", color: "red" };
    } else if (userScore === 0.5) {
        return { message: "You tied", color: "yellow" };
    } else {
        return { message: "You win", color: "green" };
    }
}
function frontEndAnswer(message, userChoice, botChoice) {
    var imgData = {
        "rock": document.getElementById("rock").src,
        "paper": document.getElementById("paper").src,
        "scissor": document.getElementById("scissor").src
    }

    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissor").remove();

    var userDiv = document.createElement("div");
    var messageDiv = document.createElement("div");
    var botDiv = document.createElement("div");

    userDiv.innerHTML = `<img src=${imgData[userChoice]} height="100px" width="100px" style="border-radius: 10px;
    box-shadow: 1px 3px 15px -3px #000000; padding: 10px;">`;
    botDiv.innerHTML = `<img src=${imgData[botChoice]} height="100px" width="100px" style="border-radius: 10px; padding: 10px;
    box-shadow: 1px 3px 15px -3px #000000;">`;
    messageDiv.innerHTML = `<h2 style="color:${message.color}">${message.message}</h2>`;

    document.getElementById("newcontainer").appendChild(botDiv);
    document.getElementById("newcontainer").appendChild(messageDiv);
    document.getElementById("newcontainer").appendChild(userDiv);
}

// challange 4
var allButtons = document.getElementsByTagName("button");
var copyButtons = [];
for (let i = 0; i < allButtons.length; i++) {
    copyButtons.push(allButtons[i].classList[1]);
}
function buttoncolor(clickedButton) {
    if (clickedButton.value === "red") {
        buttonRed();
    }
    else if (clickedButton.value === "yellow") {
        buttonYellow();
    }
    else if (clickedButton.value === "blue") {
        buttonBlue();
    }
    else if (clickedButton.value === "green") {
        buttonGreen();
    }
    else if (clickedButton.value === "random") {
        buttonRandom();
    }
    else if (clickedButton.value === "reset") {
        buttonReset();
    }
}
function buttonRed() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add("red");
    }
}
function buttonYellow() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add("yellow");
    }
}
function buttonGreen() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add("green");
    }
}
function buttonBlue() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add("blue");
    }
}
function buttonRandom() {
    var data = ["red", "green", "yellow", "blue"]
    for (let i = 1; i <= allButtons.length; i++) {
        var random = Math.floor(Math.random() * 4);
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(data[random]);
    }
}
function buttonReset() {
    for (let i = 1; i <= allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(copyButtons[i]);
    }
}

// challange 5
let data = {
    "you": { "scoreSpan": "#your-score", "div": ".your-img", "score": 0 },
    "dealer": { "scoreSpan": "#dealer-score", "div": ".dealer-img", "score": 0 },
    'cards': ['2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', 'JS', 'QS', 'KS', 'AS'],
    'cardsMap': { '2S': 2, '3S': 3, '4S': 4, '5S': 5, '6S': 6, '7S': 7, '8S': 8, '9S': 9, '10S': 10, 'JS': 11, 'QS': 12, 'KS': 13, 'AS': 14 },
    'sounds': {
        'hit': new Audio('sounds/swish.m4a'),
        'win': new Audio('sounds/cash.mp3'),
        'losse': new Audio('sounds/aww.mp3')
    },
    'wins': 0,
    'draws': 0,
    'losses': 0,
}
const You = data["you"];
const Dealer = data["dealer"];
const hitSound = new Audio("sounds/swish.m4a");
const winSound = new Audio("sounds/cash.mp3");
const lossSound = new Audio("sounds/aww.mp3");

document.querySelector(".hit").addEventListener("click", blackJack);
document.querySelector(".deal").addEventListener("click", blackJackDeal);
document.querySelector(".stand").addEventListener("click", dealerLogic);

function blackJack() {
    let card = randomCard();
    blackjackHit(You, card);
    updatScore(card, You);
    showScore(You)
}
function blackjackHit(turn, card) {
    if (turn['score'] <= 21) {
        let cardImage = document.createElement("img");
        cardImage.src = `img/Cards/${card}.jpg`;
        cardImage.setAttribute("style", "height:100px;border-radius:10px")
        document.querySelector(turn["div"]).appendChild(cardImage);
        hitSound.play()
    }
}
function blackJackDeal() {
    let winner = computeWinner();
    showResult(winner);

    let yourImage = document.querySelector(".your-img").querySelectorAll("img");
    let dealerImage = document.querySelector(".dealer-img").querySelectorAll("img");
    for (let i = 0; i < yourImage.length; i++) {
        yourImage[i].remove();
    }
    for (let i = 0; i < dealerImage.length; i++) {
        dealerImage[i].remove();
    }
    You["score"] = 0;
    Dealer["score"] = 0;
    document.querySelector("#your-score").textContent = 0;
    document.querySelector("#your-score").style.color = "white";
    document.querySelector("#dealer-score").textContent = 0;
    document.querySelector("#dealer-score").style.color = "white";
}
function randomCard() {
    let number = [Math.floor(Math.random() * 13)];
    return data["cards"][number];
}
function updatScore(card, activeplayer) {
    activeplayer["score"] += data["cardsMap"][card];
}
function showScore(activeplayer) {
    if (activeplayer['score'] > 21) {
        document.querySelector(activeplayer['scoreSpan']).textContent = "BUST!";
        document.querySelector(activeplayer['scoreSpan']).style.color = "red";
    } else {
        document.querySelector(activeplayer['scoreSpan']).textContent = activeplayer['score'];
    }
}
function dealerLogic() {
    let card = randomCard();
    blackjackHit(Dealer, card);
    updatScore(card, Dealer);
    showScore(Dealer)
    if (Dealer["score" > 15]) {
        let winner = computeWinner();
        showResult(winner);
    }
}
function computeWinner() {
    let winner;
    if (You["score"] <= 21) {
        if ((You["score"] > Dealer["score"]) || (Dealer["score"] > 21)) {
            winner = You;
            data['wins']++;
            console.log("you won");
        } else if (You["score"] < Dealer["score"]) {
            winner = Dealer;
            data['losses']++;
            console.log("you lost");
        }
        else if (You["score"] == Dealer["score"]) {
            data['draws']++;
            console.log("you tied");
        }
    } else if (You['score'] > 21 && Dealer['score'] <= 21) {
        winner = Dealer;
        data['losses']++;
        console.log("you lost");
    } else if (You['score'] > 21 && Dealer['score'] > 21) {
        data['draws']++;
        console.log("you tied");
    }
    return winner;
}
function showResult(winner) {
    let message, messageColor;
    if (winner === You) {
        document.querySelector('#wins').textContent = data['wins'];
        message = 'You won!';
        messageColor = 'green';
        winSound.play();
    } else if (winner === Dealer) {
        document.querySelector('#losses').textContent = data['losses'];
        message = 'You lost!';
        messageColor = 'red';
        lossSound.play();
    } else {
        document.querySelector('#draws').textContent = data['draws'];
        message = 'You drew!';
        messageColor = 'black';
    }
    document.querySelector('#letsplay').textContent = message;
    document.querySelector('#letsplay').style.color = messageColor;
}

// challange 6
const url = "https://randomuser.me/api/?results=10";
fetch(url).then(res => res.json()).then(data => {
    let users = data.results;
    // console.log(users)
    for (let i = 0; i <= users.length; i++) {
        var div = document.createElement("div");
        var image = document.createElement("img");
        let p = document.createElement("p");
        p.append(document.createTextNode(`${users[i].name.title} ${users[i].name.first} ${users[i].name.last}`));
        image.src = users[i].picture.large;
        div.appendChild(image);
        div.appendChild(p);
        document.getElementById("showUsers").appendChild(div);
    }
})






