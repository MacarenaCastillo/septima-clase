var url = 'https://api.myjson.com/bins/10i31n';

function setup() {
   loadJSON(url, gotData, 'json');
   canvas = createCanvas(windowWidth, windowHeight * 0.8);
   canvas.parent('top');
   canvas.position(0, 0);
   canvas.style('z-index', '-1');
   noStroke();
   noLoop();
}

function gotData(data) {
   console.log(data);
   var planetas = 0;
   var aridos = 0;
   var tropical = 0;
   var temperado = 0;
   var artico = 0;
   for (var a = 0; a < data.results.length; a++) {
      if (data.results[a].climate =="temperate") {
        temperado++;
      } else if (data.results[a].climate == "frozen") {
        artico++
      } else if (data.results[a].climate == "arid") {
        aridos++
      } else if (data.results[a].climate == "tropical") {
        tropical++
      }
   }
   textSize(20);
   text("En el universo de Star Wars se han mostrado " + data.count + " planetas.", width / 2, 150);
   text("De estos, " + temperado + " tienen clima temperado, " + artico + " tiene clima artico, " + aridos + " tienen clima arido y " + tropical + " tienen clima tropical.", width / 2, 200);
}

function draw() {
   background(0, 191, 162);
   fill(255);
   textAlign(CENTER);
}
