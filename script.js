function playMeow() {
  const audio = new Audio("assets/meow.mp3");
  audio.volume = 0.5;
  audio.play();
}

function heartBurst(count = 8) {
  for (let i = 0; i < count; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = ["💖","💕","💘"][Math.floor(Math.random()*3)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (2 + Math.random()*2) + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
  }
}

document.addEventListener("click", () => {
  playMeow();
  heartBurst(10);
});
