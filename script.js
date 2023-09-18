var bird;
var pipe = [];
function setup() {
  createCanvas(400, 600);
  bird = new Bird();
  pipe.push(new Pipe());
}

function draw() {
  background(0);

  for (var i = pipe.length-1; i >= 0; i--) {
    pipe[i].show();
    pipe[i].update();

    if (pipe[i].hits(bird)) {
      //console.log("HIT");
    }

    if (pipe[i].offscreen()) {
      pipe.splice(i, 1);
    }
  }

  bird.update();
  bird.show();

  if (frameCount % 100 == 0) {
    pipe.push(new Pipe());
  }
}

function keyPressed() {
  if (key == ' ') {
    bird.up();
  }
}