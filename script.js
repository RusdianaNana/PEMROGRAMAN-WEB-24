// Efek hover interaktif 3D pada kartu
document.querySelectorAll(".card, .profile-card").forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / 20).toFixed(2);
    const rotateY = ((x - centerX) / 20).toFixed(2);
    card.style.transform = `rotateX(${ -rotateX }deg) rotateY(${ rotateY }deg) scale(1.05)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });
});
