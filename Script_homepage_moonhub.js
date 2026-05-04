const btnRandom = document.getElementById("btnRandomGames");
const btnSinglePlayer = document.getElementById("btnSinglePlayerGames");
const btnTwoPlayers = document.getElementById("btnTwoPlayerGames");

btnRandom.addEventListener('click', function() {
    window.location.href = "Index_RG.html";
});
btnSinglePlayer.addEventListener('click', function() {
    window.location.href = "Index_SPG_page1.html";
});
btnTwoPlayers.addEventListener('click', function() {
    window.location.href = "Index_TPG_page1.html";
});