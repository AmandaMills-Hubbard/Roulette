let chosenNum = document.getElementById("boardNum");
const chosenColor = document.querySelector(".colors");
const button = document.querySelector("button");
const betNum = document.querySelector("#betNum");
const betColor = document.querySelector("#betColor");
let numberTotal = 0;
let colorTotal = 0;
let wins = 0;
let losses = 0;

button.addEventListener('click', () => {
    let winningNumber = Math.floor(Math.random()* chosenNum.length)
    let winningColor = board[winningNumber]

    document.querySelector("#random").innerHTML = winningNumber
    document.querySelector("#randomColor").innerHTML = winningColor

//Conditional that determines:
// 1) If your number selection is the winning number.
// 2) How much money is won.
// 3) Increase win/lose counter by one per game.

  if((chosenNum.value === winningNumber)){
    document.querySelector("#result").innerHTML = "winner"
    numberTotal += betNum.value * 10
    wins+=1
    document.querySelector("#wins").innerHTML = wins
  }else{
    document.querySelector("#result").innerHTML = "loser"
    losses+=1
    document.querySelector("#losses").innerHTML = losses
  }

//Conditional that determines:
// 1) If your color selection is the winning number.
// 2) How much money is won.
// 3) Increase win/lose counter by one per game.

  if((chosenColor.value === winningColor)){
    document.querySelector("#resultTwo").innerHTML = "win"
    colorTotal += betColor.value * 10
    wins+=1
    document.querySelector("#wins").innerHTML = wins
  }else{
    document.querySelector("#resultTwo").innerHTML = "loser"
    losses+=1
    document.querySelector("#losses").innerHTML = losses
  }

  let total = numberTotal + colorTotal
  document.querySelector("#total").innerHTML = "$" + total
  })

fetch("messages", {
  method: 'put',
  headers: {"Content-Type": "application/json"
},
  body: JSON.stringify({
    'wins': wins,
    'losses': losses,
    'total': total
  })
})
const board = {
  1: "red",
  2: "black",
  3: "red",
  4: "black",
  5: "red",
  6: "black",
  7: "red",
  8: "black",
  9: "red",
  10: "black",
  11: "black",
  12: "red",
  13: "black",
  14: "red",
  15: "black",
  16: "red",
  17: "black",
  18: "red",
  19: "red",
  20: "black",
  21: "red",
  22: "black",
  23: "red",
  24: "black",
  25: "red",
  26: "black",
  27: "red",
  28: "black",
  29: "black",
  30: "red",
  31: "black",
  32: "red",
  33: "black",
  34: "red",
  35: "black",
  36: "red"
}
