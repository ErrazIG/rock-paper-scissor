"user strict";

function init() {
  const storageUserBestCount = localStorage.getItem("UserBestcount");
  const storageAiBestCount = localStorage.getItem("AiBestCount");

  const userCount = document.querySelector("#userCount");
  const bestUserCount = document.querySelector("#bestUserCount");
  const aiCount = document.querySelector("#aiCount");
  const bestAiCount = document.querySelector("#bestAiCount");
  const result = document.querySelector("#result");

  const rock = document.querySelector("#rock");
  const paper = document.querySelector("#paper");
  const scissors = document.querySelector("#scissors");

  const aiChoice = document.querySelector("#aiChoice");

  const setup = document.querySelector("#setup");
  const playerName = document.querySelector("#playerName");
  const btnPlayerName = document.querySelector("#btnPlayerName");
  const playerNameError = document.querySelector("#playerNameError");
  const playerNameDisplay = document.querySelector("#playerNameDisplay");

  btnPlayerName.addEventListener("click", () => {
    if (playerName.value != "") {
      setup.style.display = "none";
      playerNameDisplay.textContent = `Best score ${playerName.value.charAt(0).toUpperCase() + playerName.value.slice(1)}`;
    } else {
      playerNameError.textContent = "Please Enter your name !";
    }

  })

  bestUserCount.textContent = storageUserBestCount;
  bestAiCount.textContent = storageAiBestCount;

  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function wonOrLost() {
    if (userCount.textContent == 3) {
      result.textContent = "You Win";
      bestUserCount.textContent++;
      reset();
    } else if (aiCount.textContent == 3) {
      result.textContent = "You Loose";
      bestAiCount.textContent++;
      reset();
    }
  }

  function resetImg() {
    setTimeout(function () {
      aiChoice.src = "medias/rockpaper.gif";
    }, 1500);
  }

  function reset() {
    localStorage.setItem("UserBestcount", bestUserCount.textContent) ?? "0";
    localStorage.setItem("AiBestCount", bestAiCount.textContent) ?? "0";
    result.textContent = "PLAY";
    userCount.textContent = 0;
    aiCount.textContent = 0;
  }

  const restartGame = document
    .querySelector("#restartGame")
    .addEventListener("click", () => {
      bestUserCount.textContent = 0;
      bestAiCount.textContent = 0;
      userCount.textContent = 0;
      aiCount.textContent = 0;
      localStorage.setItem("UserBestcount", bestUserCount.textContent);
      localStorage.setItem("AiBestCount", bestAiCount.textContent);
    });

  rock.addEventListener("click", () => {
    let aiInt = randomInteger(1, 3);
    console.log(aiInt);

    if (aiInt == 1) {
      aiChoice.src = "";
      aiChoice.src = "medias/rock.png";
      result.textContent = "DRAW";
      resetImg();
    } else if (aiInt == 2) {
      aiChoice.src = "";
      aiChoice.src = "medias/paper.png";
      result.textContent = "LOST";
      aiCount.textContent++;
      resetImg();
      wonOrLost();
    } else {
      aiChoice.src = "";
      aiChoice.src = "medias/scissor.png";
      result.textContent = "WON";
      userCount.textContent++;
      resetImg();
      wonOrLost();
    }
  });

  paper.addEventListener("click", () => {
    let aiInt = randomInteger(1, 3);
    console.log(aiInt);

    if (aiInt == 1) {
      aiChoice.src = "";
      aiChoice.src = "medias/rock.png";
      result.textContent = "WON";
      userCount.textContent++;
      resetImg();
      wonOrLost();
    } else if (aiInt == 2) {
      aiChoice.src = "";
      aiChoice.src = "medias/paper.png";
      result.textContent = "DRAW";
      resetImg();
    } else {
      aiChoice.src = "";
      aiChoice.src = "medias/scissor.png";
      result.textContent = "LOST";
      aiCount.textContent++;
      resetImg();
      wonOrLost();
    }
  });

  scissors.addEventListener("click", () => {
    let aiInt = randomInteger(1, 3);
    console.log(aiInt);

    if (aiInt == 1) {
      aiChoice.src = "";
      aiChoice.src = "medias/rock.png";
      result.textContent = "LOST";
      aiCount.textContent++;
      resetImg();
      wonOrLost();
    } else if (aiInt == 2) {
      aiChoice.src = "";
      aiChoice.src = "medias/paper.png";
      result.textContent = "WON";
      userCount.textContent++;
      resetImg();
      wonOrLost();
    } else {
      aiChoice.src = "";
      aiChoice.src = "medias/scissor.png";
      result.textContent = "DRAW";
      resetImg();
    }
  });
}

init();
