let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");
let button = document.getElementsByName("shoot");
let result = document.getElementById("result");
let choice = document.getElementById("choice");

let user;
let computer;

let choices = ["rock", "paper", "scissor"];

const addAndRemoveBorder = (add, remove1, remove2, class1, class2) => {
    add.classList.add(class1)
    add.classList.add(class2)
    remove1.classList.remove(class1)
    remove1.classList.remove(class2)
    remove2.classList.remove(class1)
    remove2.classList.remove(class2)
}

const whoWin = (userVar, computerVar) => {
    let winner;
    if (userVar == computerVar) {
        winner = "No one"
    } else if (userVar == "rock" && computerVar == "paper") {
        winner = "Computer"
    } else if (userVar == "rock" && computerVar == "scissor") {
        winner = "User"
    } else if (userVar == "paper" && computerVar == "rock") {
        winner = "User"
    } else if (userVar == "paper" && computerVar == "scissor") {
        winner = "Computer"
    } else if (userVar == "scissor" && computerVar == "rock") {
        winner = "Computer"
    } else if (userVar == "scissor" && computerVar == "paper") {
        winner = "User"
    }
    return winner;
}

rock.addEventListener("click", (e) => {
    addAndRemoveBorder(rock, paper, scissor, "border-5", "border-primary")
    user = "rock";
});

paper.addEventListener("click", (e) => {
    addAndRemoveBorder(paper, rock, scissor, "border-5", "border-primary")
    user = "paper";
});

scissor.addEventListener("click", (e) => {
    addAndRemoveBorder(scissor, rock, paper, "border-5", "border-primary")
    user = "scissor";
});

button[0].addEventListener("click", (e) => {
    let computer = choices[Math.floor(Math.random() * 3)];
    if (user == undefined) {
        alert("Please select an option");
        return;
    }
    result.innerText = `${whoWin(user, computer)} wins`;
    choice.innerText = `You selected ${user}. Computer selected ${computer}`;
});
