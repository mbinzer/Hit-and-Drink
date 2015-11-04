
 function draw(x,y) {
      var canvas = document.getElementById('canvas');
      var c = canvas.getContext('2d');
      c.save();
      c.clearRect(0,0,550,400);
      c.fillStyle = "rgba(0,200,0,1)";
      c.fillRect (x, y, 50, 50);
      c.restore();
      x += 2;
      y += 3;
      var wait = setTimeout(draw, 20, x, y);
    }