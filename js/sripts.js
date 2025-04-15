const canvas = document.getElementById('space-dust');
const ctx = canvas.getContext('2d');
let particles = [];

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', () => {
    resize();
    createParticles(); // Важно пересоздавать частицы при изменении размера
});

resize(); // Вызываем при загрузке страницы
createParticles(); // Создаем частицы при загрузке страницы

function createParticles() {
  particles = Array.from({ length: 140 }, () => ({ // Количество частиц
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 2,
    speed: Math.random() * 0.5 + 0.1,
    angle: Math.random() * Math.PI * 2
  }));
}

function animate() {
  ctx.fillStyle = '#2C2F33'; //фон
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    p.x += Math.cos(p.angle) * p.speed;
    p.y += Math.sin(p.angle) * p.speed;

    ctx.beginPath();
    ctx.fillStyle = `#ffffff`; //частицы
    ctx.arc(p.x, p.y, p.size, 0, Math.PI*2);
    ctx.fill();

    if (p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height) {
      p.x = Math.random() * canvas.width;
      p.y = Math.random() * canvas.height;
    }
  });

  requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
  resize();
  createParticles();
});

resize();
createParticles();
animate();