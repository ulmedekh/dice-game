//Тоглогчийн ээлжийг хадгалах хувьсагч
var activePlayer;
//Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var score;
//Тоглогчийн ээлжиндээ цуглуулсан оноог хадгалах хувьсагч
var roundScore;
initGame();

function initGame() {
  activePlayer = 0;
  score = [0, 0];
  roundScore = 0;
  //Эхний оноонуудыг тэглэнэ
  document.getElementById("score-0").textContent = 0;
  document.getElementById("current-0").textContent = score[0];
  document.getElementById("score-1").textContent = 0;
  document.getElementById("current-1").textContent = score[1];
  //Шоо хаях хүртэл шоог харуулахгүй байлгая
  document.querySelector(".dice").style.display = "none";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.add("active");
}

document.querySelector(".btn-new").addEventListener("click", initGame);
//Зөвхөн нэг газар ашиглагдаж байгаа учир Anonymous функц ашиглалаа

document.querySelector(".btn-roll").addEventListener("click", function() {
  //Шооны аль талаараа буусныг хадгалах хувьсагч, 1-6 гэсэн утгыг санамсаргүйгээр олгоно
  var dice = Math.floor(Math.random() * 6 + 1);
  //Харуулахгүй болгосон байгаа шоог харагддаг болгоно
  document.querySelector(".dice").style.display = "block";
  //Шооны src -руу хандаж буусан шоогоороо сольж харуулна
  document.querySelector(".dice").src = "dice-" + dice + ".png";
  //Хэрэв шоо 1 -ээс бусад нөхцөлөөр буусан бол roundScore -ыг нэмэгдүүлээд current -д оноог нь харуулна.
  if (dice !== 1) {
    roundScore += dice;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    switchToNextPlayer();
  }
});

document.querySelector(".btn-hold").addEventListener("click", function() {
  score[activePlayer] += roundScore;
  document.getElementById("score-" + activePlayer).textContent =
    score[activePlayer];
  if (score[activePlayer] >= 10) {
    document.getElementById("name-" + activePlayer).textContent = "WINNER!";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {
    switchToNextPlayer();
  }
});

function switchToNextPlayer() {
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;
  alert(" 1 буулаа 😭 ");
  //Идэвхитэй тоглогчийн ээлжийг шилжүүлнэ
  if (activePlayer == 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  //Шоог нь харуулахгүй болгоно.
  document.querySelector(".dice").style.display = "none";
  //Идэвхтэй тоглогчийн ээлжийг харуулах улаан цэгийг солино
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
}
