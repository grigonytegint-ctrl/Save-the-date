function openEnvelope() {
    document.querySelector(".top-flap").style.transform = "rotateX(-160deg)";
    const card = document.getElementById("card");
    card.style.opacity = 1;
    card.style.transform = "translateY(-240px)";
    card.classList.remove("hidden");
}
let flipped = false;
function flipCard() {
    flipped = !flipped;
    const inner = document.querySelector(".card-inner");
    inner.style.transform = flipped ? "rotateY(180deg)" : "rotateY(0deg)";
}
