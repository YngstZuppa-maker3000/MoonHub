const btnRandom = document.getElementById("btnRandomGames");
const btnSinglePlayer = document.getElementById("btnSinglePlayerGames");
const btnTwoPlayers = document.getElementById("btnTwoPlayerGames");

btnRandom.addEventListener('click', function() {
    window.location.href = "./RandomGames_folder/Index_RG.html";
});
btnSinglePlayer.addEventListener('click', function() {
    window.location.href = "./SinglePlayerGames_folder/Index_SPG_page1.html";
});
btnTwoPlayers.addEventListener('click', function() {
    window.location.href = "./TwoPlayerGames_folder/Index_TPG_page1.html";
});