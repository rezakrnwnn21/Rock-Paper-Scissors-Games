const rockBox = document.getElementById("rock");
const paperBox = document.getElementById("paper");
const scissorBox = document.getElementById("scissor");
const comRock = document.getElementById("comRock");
const comPaper = document.getElementById("comPaper");
const comScissor = document.getElementById("comScissor");

const userChoices = document.querySelectorAll(".choices");
const comChoices = document.querySelectorAll(".box");
const resetChoices = document.getElementById("reset");

let pilihanUser = "";
let pilihanComputer = "";

const kasihBackgroundMerah = (pilihan) => {
  const selectedBox = document.getElementById(pilihan);
  selectedBox.style.backgroundColor = "rgb(178,34,34)";
};

const computerMemilih = () => {
  const pilihanYangTersedia = ["comRock", "comPaper", "comScissor"];
  const rndInt = Math.floor(Math.random() * 3);
  const pilihanKomputer = pilihanYangTersedia[rndInt];
  pilihanComputer = pilihanYangTersedia[rndInt];
  kasihBackgroundMerah(pilihanKomputer);
  hasilPertandingan();
};

rockBox.onclick = () => {
  rockBox.style.backgroundColor = "rgb(45, 85, 255)";
  pilihanUser = "rock";
  computerMemilih();
  disableClick();
};

paperBox.onclick = () => {
  paperBox.style.backgroundColor = "rgb(45, 85, 255)";
  pilihanUser = "paper";
  computerMemilih();
  disableClick();
};

scissorBox.onclick = () => {
  scissorBox.style.backgroundColor = "rgb(45, 85, 255)";
  pilihanUser = "scissor";
  computerMemilih();
  disableClick();
};

const disableClick = () => {
  userChoices.forEach((element) => element.classList.add("disableClick"));
};

const hasilPertandingan = () => {
  if (pilihanUser === "rock" && pilihanComputer === "comRock") {
    const info = document.querySelector(".informasi");
    info.innerHTML = "Draw";
  } else if (pilihanUser === "rock" && pilihanComputer === "comPaper") {
    const info = document.querySelector(".informasi");
    info.innerHTML = "Lose";
  } else if (pilihanUser === "rock" && pilihanComputer === "comScissor") {
    const info = document.querySelector(".informasi");
    info.innerHTML = "Win";
  } else if (pilihanUser === "paper" && pilihanComputer === "comPaper") {
    const info = document.querySelector(".informasi");
    info.innerHTML = "Draw";
  } else if (pilihanUser === "paper" && pilihanComputer === "comScissor") {
    const info = document.querySelector(".informasi");
    info.innerHTML = "Lose";
  } else if (pilihanUser === "paper" && pilihanComputer === "comRock") {
    const info = document.querySelector(".informasi");
    info.innerHTML = "Win";
  } else if (pilihanUser === "scissor" && pilihanComputer === "comScissor") {
    const info = document.querySelector(".informasi");
    info.innerHTML = "Draw";
  } else if (pilihanUser === "scissor" && pilihanComputer === "comRock") {
    const info = document.querySelector(".informasi");
    info.innerHTML = "Lose";
  } else if (pilihanUser === "scissor" && pilihanComputer === "comPaper") {
    const info = document.querySelector(".informasi");
    info.innerHTML = "Win";
  } else {
    const info = document.querySelector(".informasi");
    info.innerHTML = "Apaan Tu!";
  }
};

resetChoices.onclick = () => {
  userChoices.forEach((element) => {
    element.classList.remove("disableClick");
    element.style.backgroundColor = "bisque";
  });
  comChoices.forEach((element) => {
    element.classList.remove("disableClick");
    element.style.backgroundColor = "bisque";
  });
  const info = document.querySelector(".informasi");
  info.innerHTML = "";
};
