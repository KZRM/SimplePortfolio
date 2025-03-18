const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');

let mouseX = 0;
let mouseY = 0;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawDots();
}

function drawDots() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const spacing = 24;
    const radius = 1;
    const baseOpacity = 0.2;
    const hoverOpacity = 0.6;
    const maxDistance = 300;

    for (let x = 0; x < canvas.width; x += spacing) {
        for (let y = 0; y < canvas.height; y += spacing) {
            const dx = x - mouseX;
            const dy = y - mouseY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const factor = Math.max(0, 1 - distance / maxDistance);
            let opacity = baseOpacity + factor * (hoverOpacity - baseOpacity);
            opacity = Math.min(1, Math.max(0, opacity));

            ctx.beginPath();
            ctx.arc(x, y, radius, 0, 2 * Math.PI);
            ctx.fillStyle = 'Orange';
            ctx.globalAlpha = opacity;
            ctx.fill();
        }
    }
}

window.addEventListener('resize', resizeCanvas);
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    drawDots();
});

resizeCanvas();