const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let points = [];
for(let i = 0; i < 20; i++) {
    points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: Math.random() - 0.5,
        dy: Math.random() - 0.5
    });
}

function drawGrid() {
    const step = 50;
    ctx.strokeStyle = '#ddd';
    for(let x = 0; x < canvas.width; x += step) {
        for(let y = 0; y < canvas.height; y += step) {
            ctx.strokeRect(x, y, step, step);
        }
    }
}

function drawPoints() {
    points.forEach(point => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 5, 0, Math.PI * 2);
        ctx.fillStyle = '#f00';
        ctx.fill();
    });
}

function updatePoints() {
    points.forEach(point => {
        point.x += point.dx;
        point.y += point.dy;

        if(point.x < 0 || point.x > canvas.width) point.dx = -point.dx;
        if(point.y < 0 || point.y > canvas.height) point.dy = -point.dy;
    });
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGrid();
    drawPoints();
    updatePoints();
    requestAnimationFrame(animate);
}

animate();