Graphics.prototype.setFontUndo = function(scale) {
  // Actual height 19 (20 - 2)
  this.setFontCustom(atob("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKqKAqooCqigKqKAAAACgAAKAAAoAACgAAAAAAAAACgAAKAAAoAACgAAAAAAKCgAoKAKqqAqqoCqqgKqqAKCgAoKAKqqAqqoCqqgKqqAKCgAoKAAAAAKgoAqCgKqKAqooKiioqKKiooqKiioKKqAoqoCgqAKCoAAAACoCgKgKAiCoCIKgKioAqKgACoAAKgACoAAKgACoqAKioCoIgKgiAoCoCgKgAAAAKqgAqqAKqqAqqoKiioqKKiooqKiioKAKAoAoCgCgKAKAAAACgAAKAAAoAACgAAAAAAKqgAqqAKqqAqqoCgCgKAKAAAACgCgKAKAqqoCqqgCqoAKqgAAAACigAKKAAqoACqgAqoACqgAKqAAqoAAqoACqgAKKAAooAAAAAAoAACgAAKAAAoAAqqACqoAKqgAqqAAKAAAoAACgAAKAAAAAAACoAAKgAAqAACoAAAAAoAACgAAKAAAoAACgAAKAAAoAACgAAKAAAoAACgAAKAAAAAAACgAAKAAAoAACgAAAAAAoAACgAAqAACoAAqAACoAAqAACoAAqAACoAAqAACoAAqAACoAAKAAAoAAAAAACqoAKqgCqqgKqqAoAoCgCgKAKAoAoCqqgKqqAKqgAqqAAAAAqqoCqqgKqqAqqoAAAAKCqAoKoCiqgKKqAoooCiigKKKAoooCqigKqKAKgoAqCgAAAAoAoCgCgKAKAoAoCiigKKKAoooCiigKqqAqqoAqqACqoAAAACqAAKoAAqoACqgAAKAAAoAACgAAKAAqqoCqqgKqqAqqoAAAAKoKAqgoCqigKqKAoooCiigKKKAoooCiqgKKqAoKgCgqAAAAAKqgAqqAKqqAqqoCiigKKKAoooCiigKKqAoqoCgqAKCoAAAACgAAKAAAoAACgAAKAAAoAACgAAKAAAqqoCqqgCqqAKqoAAAACqoAKqgCqqgKqqAoooCiigKKKAoooCqqgKqqAKqgAqqAAAAAKgAAqAAKqAAqoACigAKKAAooACigAKqqAqqoAqqgCqqAAAACgCgKAKAoAoCgCgAAAAoAqCgCoKAKgoAqAAAAAKAAAoAAKoAAqgAKqgAqqAKgqAqCoCgCgKAKAAAAAoKACgoAKCgAoKACgoAKCgAoKACgoAKCgAoKACgoAKCgAAAAKAKAoAoCoKgKgqAKqgAqqAAqgACqAACgAAKAAAAACgAAKAAAoAACgAAKKKAoooCiigKKKAqoACqgACoAAKgAAAAACqqAKqoCqqgKqqAoAACgAAKCoAoKgCiqgKKqAoooCiigKqqAqqoAqqACqoAAAAAqqgCqqAqqoCqqgKKAAooACigAKKAAqqoCqqgCqqAKqoAAAAKqqAqqoCqqgKqqAoooCiigKKKAoooCqqgKqqAKCgAoKAAAAAKqgAqqAKqqAqqoCgCgKAKAoAoCgCgKAKAoAoCgCgKAKAAAACqqgKqqAqqoCqqgKAKAoAoCoKgKgqAKqgAqqAAqgACqAAAAACqoAKqgCqqgKqqAoooCiigKKKAoooCgCgKAKAoAoCgCgAAAAKqoAqqgKqqAqqoCigAKKAAooACigAKAAAoAACgAAKAAAAAAAqqACqoAqqoCqqgKAKAoAoCiigKKKAoqoCiqgKKqAoqoAAAAKqqAqqoCqqgKqqAAoAACgAAKAAAoACqqgKqqAqqoCqqgAAAAoAoCgCgKAKAoAoCqqgKqqAqqoCqqgKAKAoAoCgCgKAKAAAAAAKAAAoAACoAAKgAAKAAAoAACgAAKAqqoCqqgKqoAqqgAAAAKqqAqqoCqqgKqqACqAAKoACqoAKqgCoKgKgqAoAoCgCgAAAAqqgCqqAKqqAqqoAACgAAKAAAoAACgAAKAAAoAACgAAKAAAACqqgKqqAqqoCqqgCoAAKgAAKgAAqAAKgAAqAAKqqAqqoCqqgKqqAAAACqqgKqqAqqoCqqgCoAAKgAAKgAAqAAqqoCqqgKqqAqqoAAAACqoAKqgCqqgKqqAoAoCgCgKAKAoAoCqqgKqqAKqgAqqAAAAAqqoCqqgKqqAqqoCigAKKAAooACigAKqAAqoAAqAACoAAAAAAqqACqoAqqoCqqgKAKAoAoCgKgKAqAqqoCqqgCqqAKqoAAAAKqqAqqoCqqgKqqAooACigAKKgAoqACqqgKqqAKioAqKgAAAAKgoAqCgKqKAqooCiigKKKAoooCiigKKqAoqoCgqAKCoAAAACgAAKAAAoAACgAAKqqAqqoCqqgKqqAoAACgAAKAAAoAAAAAAKqoAqqgCqqgKqqAAAoAACgAAKAAAoCqqgKqqAqqgCqqAAAAAqqACqoAKqoAqqgAAKgAAqAACoAAKgKqoAqqgCqoAKqgAAAACqqgKqqAqqoCqqgACoAAKgACoAAKgAAKgAAqAKqqAqqoCqqgKqqAAAACoKgKgqAqqoCqqgAqgACqAAKoAAqgAqqoCqqgKgqAqCoAAAAKoAAqgACqgAKqAAAqoACqgAKqAAqoCqgAKqAAqgACqAAAAAAoCoCgKgKCqAoKoCiqgKKqAqooCqigKoKAqgoCoCgKgKAAAACqqgKqqAqqoCqqgKAKAoAoAAAAKAAAoAACoAAKgAAKgAAqAAAqAACoAACoAAKgAAKgAAqAAAqAACoAACgAAKAAAACgCgKAKAqqoCqqgKqqAqqoAAA"), 32, atob("DQULDw0RDQUHBw0NBQ0FEQ0FDQ0NDQ0NDQ0FBQsNCw0RDQ0NDQ0NDQ0NDQ0NDw0NDQ0NDQ0NDQ8NDQ0HEQc="), 22+(scale<<8)+(1<<16));
  return this;
};

var IMAGEWIDTH = 117;
var IMAGEHEIGHT = 60;
var r2d2 = require("heatshrink").decompress(atob("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"));

// timeout used to update every minute
var drawTimeout;

// schedule a draw for the next minute
function queueDraw() {
  if (drawTimeout) clearTimeout(drawTimeout);
  drawTimeout = setTimeout(function() {
    drawTimeout = undefined;
    draw();
  }, 60000 - (Date.now() % 60000));
}

function draw() {
  //reset().clearRect(0,24,g.getWidth(),g.getHeight()-IMAGEHEIGHT);
  // draw r2d2
  g.drawImage(r2d2, (g.getWidth()/2)-(IMAGEWIDTH/2), g.getHeight()-IMAGEHEIGHT);
  
  var x = g.getWidth()/2;
  var y = g.getHeight()/2 - 30;
  g.reset();
  // work out locale-friendly date/time
  var date = new Date();
  var timeStr = require("locale").time(date,1).trim();
  var dateStr = require("locale").date(date).toUpperCase();
  
  
  // draw time
  g.setFontAlign(0,0).setFont("Undo:3");
  g.clearRect(0,y-30,g.getWidth(),y+30); // clear the background
  g.drawString(timeStr,x,y);
  // draw date
  y += 40;
  g.setFontAlign(0,0).setFont("Undo");
  g.clearRect(0,y-10,g.getWidth(),y+20); // clear the background
  g.drawString(dateStr,x,y);
  // queue draw in one minute
  queueDraw();
}

// Clear the screen once, at startup
g.clear();
// draw immediately at first, queue update
draw();
// Stop updates when LCD is off, restart when on
Bangle.on('lcdPower',on=>{
  if (on) {
    draw(); // draw immediately, queue redraw
  } else { // stop draw timer
    if (drawTimeout) clearTimeout(drawTimeout);
    drawTimeout = undefined;
  }
});
// Show launcher when middle button pressed
Bangle.setUI("clock");
// Load widgets
Bangle.loadWidgets();
Bangle.drawWidgets();