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

// ── Star Rating ──────────────────────────────────────────────
const stars = document.querySelectorAll('.star');
let currentRating = 0;

function setStars(value, mode) {
    stars.forEach(s => {
        const v = parseInt(s.dataset.value);
        s.classList.remove('active', 'hovered');
        if (mode === 'hover') {
            if (v <= value) s.classList.add('hovered');
        } else {
            if (v <= value) s.classList.add('active');
        }
    });
}

stars.forEach(star => {
    star.addEventListener('mouseenter', () => setStars(parseInt(star.dataset.value), 'hover'));
    star.addEventListener('mouseleave', () => setStars(currentRating, 'select'));
    star.addEventListener('click', () => {
        currentRating = parseInt(star.dataset.value);
        setStars(currentRating, 'select');
    });
});

// ── Send Review ───────────────────────────────────────────────
const btnSendReview = document.getElementById('btnSendReview');
const reviewNote = document.getElementById('reviewNote');

if (btnSendReview) {
    btnSendReview.addEventListener('click', () => {
        if (currentRating === 0) {
            reviewNote.style.borderColor = '#ff4444';
            reviewNote.placeholder = 'Select at least one star!';
            setTimeout(() => {
                reviewNote.style.borderColor = '#bc13fe';
                reviewNote.placeholder = 'Add a note...';
            }, 2000);
            return;
        }
        const note = reviewNote.value.trim();
        const rating = '★'.repeat(currentRating) + '☆'.repeat(5 - currentRating);
        const subject = encodeURIComponent(`MoonHub Review - ${rating}`);
        const body = encodeURIComponent(
            `Rating: ${rating}\n` +
            (note ? `Note: ${note}\n` : '') +
            `\n— Sent from MoonHub`
        );
        window.open(`https://mail.google.com/mail/?view=cm&to=lazuppabagnata68@gmail.com&su=${subject}&body=${body}`, '_blank');
        currentRating = 0;
        setStars(0, 'select');
        reviewNote.value = '';
    });
}