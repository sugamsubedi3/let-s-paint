document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('main');
    const context = canvas.getContext('2d');
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    let hue = 0;
    let lineWidth = 5;
    let color = '#000000'; // Default color is black
  
    function draw(e) {
      if (!isDrawing) return;
      context.strokeStyle = color;
      context.lineWidth = lineWidth;
      context.lineJoin = 'round';
      context.lineCap = 'round';
      context.beginPath();
      context.moveTo(lastX, lastY);
      context.lineTo(e.offsetX, e.offsetY);
      context.stroke();
      [lastX, lastY] = [e.offsetX, e.offsetY];
    }
  
    canvas.addEventListener('mousedown', (e) => {
      isDrawing = true;
      [lastX, lastY] = [e.offsetX, e.offsetY];
    });
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', () => isDrawing = false);
    canvas.addEventListener('mouseout', () => isDrawing = false);
  
    // Change brush color
    document.getElementById('black').addEventListener('click', () => color = '#000000');
    document.getElementById('pink').addEventListener('click', () => color = '#F50057');
    document.getElementById('blue').addEventListener('click', () => color = '#2979FF');
    document.getElementById('yellow').addEventListener('click', () => color = '#FFD600');
  
    // Eraser
    document.getElementById('erase').addEventListener('click', () => color = '#FFFFFF');
  
    // Clear canvas
    document.getElementById('new').addEventListener('click', () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
    });
  
    // Change brush size
    const slider = document.getElementById('slider');
    slider.addEventListener('input', () => {
      lineWidth = slider.value;
      document.getElementById('brushSize').textContent = lineWidth;
    });
  });
  