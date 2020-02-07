// This is exercise #2 from
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Events

document.addEventListener("DOMContentLoaded",function() { // notice the event here!
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
    
    function collision(x,y,size) {
      console.log(`${x} ${y}`);
      if (x + size > canvas.width) {
        return true;
      } else if (x - size < 0) {
        return true;
      } else if (y + size > canvas.height) {
        return true;
      } else if (y - size < 0) {
        return true;
      }
      return false;
    }

    let x = 50;
    let y = 50;
    const size = 30;

    drawCircle(x, y, size);

    // Add your code here -- Add event listeners that move the circle around

    let body = document.querySelector("body");
    body.addEventListener("keydown", event => {
      let diff = 5;
      if(event.isComposing || event.keyCode == 87 || event.keyCode == 119) {
        if (!collision(x,y-diff,size)) {
          y -= diff;
        }
      } else if(event.isComposing || event.keyCode == 68 || event.keyCode == 100) {
        if (!collision(x,x+diff,size)) {
          x += diff;
        }
      } else if(event.isComposing || event.keyCode == 83 || event.keyCode == 115) {
        if (!collision(x,y+diff,size)) {
          y += diff;
        }
      } else if(event.isComposing || event.keyCode == 65 || event.keyCode == 97) {
        if (!collision(x,x-diff,size)) {
          x -= diff;
        }
      }
      drawCircle(x,y,size);
    });

    // the canvas element when you press the arrow keys.
    // Hint: you can find some of the information you'll need in the
    // documentation for the keyDown event:
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event

});

