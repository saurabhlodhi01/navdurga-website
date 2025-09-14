// Fireworks Animation
const canvas = document.getElementById('fireworks');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let fireworks = [];
function Firework(x, y) {
  this.x = x; this.y = y; this.particles = [];
  for(let i=0;i<50;i++){
    this.particles.push({
      x: x,
      y: y,
      vx: (Math.random()-0.5)*5,
      vy: (Math.random()-0.5)*5,
      alpha: 1
    });
  }
}
function animateFireworks(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  fireworks.forEach((f,i)=>{
    f.particles.forEach(p=>{
      p.x += p.vx; p.y += p.vy; p.alpha -= 0.02;
      ctx.fillStyle = `rgba(255,0,255,${p.alpha})`;
      ctx.beginPath();
      ctx.arc(p.x,p.y,2,0,Math.PI*2);
      ctx.fill();
    });
  });
  fireworks = fireworks.filter(f=>f.particles.some(p=>p.alpha>0));
  requestAnimationFrame(animateFireworks);
}
canvas.addEventListener('click',(e)=>{ fireworks.push(new Firework(e.clientX,e.clientY)); });
animateFireworks();

// Slideshow
let slides = document.querySelectorAll('.slide');
let index = 0;
setInterval(()=>{
  slides[index].classList.remove('active');
  index = (index+1)%slides.length;
  slides[index].classList.add('active');
},3000);

// Greeting cards fade-in
const cards = document.querySelectorAll('.card');
window.addEventListener('scroll', ()=>{
  cards.forEach(card=>{
    const rect = card.getBoundingClientRect();
    if(rect.top < window.innerHeight - 50) card.classList.add('show');
  });
});

// Music play/pause
const aarti = document.getElementById('aarti');
const btn = document.getElementById('playPause');
btn.addEventListener('click', ()=>{
  if(aarti.paused) aarti.play();
  else aarti.pause();
});



// multiple flowers array
const flowerImages = [
  "/images/flower1.png",
  "/images/flower2.png",
  "/images/flower3.png",
  "/images/flower4.png"
];

function createFlower() {
  const flower = document.createElement("div");
  flower.classList.add("flower");

  // random image
  const randomImg = flowerImages[Math.floor(Math.random() * flowerImages.length)];
  flower.style.backgroundImage = `url(${randomImg})`;

  // random position
  flower.style.left = Math.random() * window.innerWidth + "px";

  // random size
  const size = 20 + Math.random() * 40;
  flower.style.width = size + "px";
  flower.style.height = size + "px";

  // random animation duration
  const duration = 5 + Math.random() * 5;
  flower.style.animationDuration = duration + "s";

  document.querySelector(".falling-flowers").appendChild(flower);

  // remove after fall
  setTimeout(() => {
    flower.remove();
  }, duration * 1000);
}

// हर 300ms में नया फूल गिरता रहेगा
setInterval(createFlower, 300);
