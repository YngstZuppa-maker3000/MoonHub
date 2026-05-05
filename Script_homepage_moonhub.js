//Buttons homepage
const btnRandom = document.getElementById("btnRandomGames");
const btnSinglePlayer = document.getElementById("btnSinglePlayerGames");
const btnTwoPlayers = document.getElementById("btnTwoPlayerGames");

if (btnRandom) {
    btnRandom.addEventListener('click', function() {
        window.location.href = "./RandomGames_folder/Index_RG.html";
    });
}
if (btnSinglePlayer) {
    btnSinglePlayer.addEventListener('click', function() {
        window.location.href = "./SinglePlayerGames_folder/Index_SPG_page1.html";
    });
}
if (btnTwoPlayers) {
    btnTwoPlayers.addEventListener('click', function() {
        window.location.href = "./TwoPlayerGames_folder/Index_TPG_page1.html";
    });
}

//Button Movement section
const btnMoveRG = document.getElementById("btnMovementRG");
const btnMoveSPG= document.getElementById("btnMovementSPG");
const btnMoveTPG= document.getElementById("btnMovementTPG");

function toggleSideMenu() {
    const sideMenu = document.getElementById("sideMenu");
    const menuOverlay = document.getElementById("menuOverlay");
    if (sideMenu && menuOverlay) {
        if (sideMenu.classList.contains("open")) {
            sideMenu.classList.remove("open");
            menuOverlay.classList.remove("active");
            setTimeout(() => { 
                if(!sideMenu.classList.contains("open")) menuOverlay.style.display = "none"; 
            }, 500);
        } else {
            menuOverlay.style.display = "block";
            // Trigger reflow
            void menuOverlay.offsetWidth;
            sideMenu.classList.add("open");
            menuOverlay.classList.add("active");
        }
    }
}

if (btnMoveRG) btnMoveRG.addEventListener('click', toggleSideMenu);
if (btnMoveSPG) btnMoveSPG.addEventListener('click', toggleSideMenu);
if (btnMoveTPG) btnMoveTPG.addEventListener('click', toggleSideMenu);

const closeMenuBtn = document.getElementById("closeMenuBtn");
if (closeMenuBtn) closeMenuBtn.addEventListener('click', toggleSideMenu);

const menuOverlay = document.getElementById("menuOverlay");
if (menuOverlay) menuOverlay.addEventListener('click', toggleSideMenu);