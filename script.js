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
    box-shadow: 1px 3px 15px -3px #000000;" >`;
    botDiv.innerHTML = `<img src=${imgData[botChoice]} height="100px" width="100px" style="border-radius: 10px;
    box-shadow: 1px 3px 15px -3px #000000;">`;
    messageDiv.innerHTML = `<h2 style="color:${message.color}">${message.message}</h2>`;

    document.getElementById("newcontainer").appendChild(botDiv);
    document.getElementById("newcontainer").appendChild(messageDiv);
    document.getElementById("newcontainer").appendChild(userDiv);
}

// challange 4









