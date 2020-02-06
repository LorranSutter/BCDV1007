document.addEventListener("DOMContentLoaded",function(){
    let canvas = document.querySelector('canvas');
    let ctx = canvas.getContext('2d');

    function drawCircle(x, y, size) {
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();
      ctx.fillStyle = 'black';
      ctx.arc(x, y, size, 0, 2 * Math.PI);
      ctx.fill();
    }

    let x = 50;
    let y = 50;
    const size = 30;

    drawCircle(x, y, size);

    // Add your code here -- Add event listeners that move the circle around
    // the canvas element when you press the arrow keys.
});

