const addPlayersBtn = document.querySelector(".addPlayers");
const calculateTotalsBtn = document.querySelector(".calculateTotals");

addPlayersBtn.addEventListener("click", () => {
  const player1GamerTagInput = document.querySelector(
    "#player1GamerTagInput"
  ).value;

  const player2GamerTagInput = document.querySelector(
    "#player2GamerTagInput"
  ).value;

  const player3GamerTagInput = document.querySelector(
    "#player3GamerTagInput"
  ).value;

  const player4GamerTagInput = document.querySelector(
    "#player4GamerTagInput"
  ).value;

  if (
    player1GamerTagInput &&
    player2GamerTagInput &&
    player3GamerTagInput &&
    player4GamerTagInput
  ) {
    document.querySelector(".player1GamerTag").textContent =
      player1GamerTagInput;

    document.querySelector(".player2GamerTag").textContent =
      player2GamerTagInput;

    document.querySelector(".player3GamerTag").textContent =
      player3GamerTagInput;

    document.querySelector(".player4GamerTag").textContent =
      player4GamerTagInput;

    document.querySelector(".playerAddingSection").style.display = "none";
  } else {
    window.alert("Issue with player(s) gamer tag");
  }
});

calculateTotalsBtn.addEventListener("click", () => {
  const player1Scores = document.querySelectorAll(".player1Score");
  const player2Scores = document.querySelectorAll(".player2Score");
  const player3Scores = document.querySelectorAll(".player3Score");
  const player4Scores = document.querySelectorAll(".player4Score");

  let player1Total = 0;
  let player2Total = 0;
  let player3Total = 0;
  let player4Total = 0;

  player1Scores.forEach((element) => {
    player1Total += Number(element.textContent);
  });

  player2Scores.forEach((element) => {
    player2Total += Number(element.textContent);
  });

  player3Scores.forEach((element) => {
    player2Total += Number(element.textContent);
  });

  player4Scores.forEach((element) => {
    player4Total += Number(element.textContent);
  });

  document.querySelector(".player1Total").textContent = player1Total;
  document.querySelector(".player2Total").textContent = player2Total;
  document.querySelector(".player3Total").textContent = player3Total;
  document.querySelector(".player4Total").textContent = player4Total;
});

window.onbeforeunload = function () {
  return "Data will be lost if you leave the page, are you sure?";
};
