var data;

function preload() {
   data = loadTable("https://raw.githubusercontent.com/profesorfaco/dno037-2017-07/gh-pages/data/titanic_passengers.csv", "true", "header");
}

function setup() {
   canvas = createCanvas(windowWidth, windowHeight * 0.8);
   canvas.parent('top');
   canvas.position(0, 0);
   canvas.style('z-index', '-1');
   noLoop();
   noStroke();
}

function windowResized() {
   resizeCanvas(windowWidth, windowHeight * 0.8);
}

function draw() {
   background(0, 191, 162);
   var total_primera = 0;
   var total_segunda = 0;
   var total_tercera = 0;
   var muertos_primera = 0;
   var muertos_segunda = 0;
   var muertos_tercera = 0;
   var muerto_en_primera = 0;
   var muerto_en_segunda = 0;
   var muerto_en_tercera = 0;
   var muerta_en_primera = 0;
   var muerta_en_segunda = 0;
   var muerta_en_tercera = 0;
   //con esto cuento el total de pasajeros por clase
   for (var a = 0; a < data.getRowCount(); a++) {
      if (data.get(a, 2) == 1) {
         total_primera++
      } else if (data.get(a, 2) == 2) {
         total_segunda++
      } else if (data.get(a, 2) == 3) {
         total_tercera++
      }
   }
   //con esto, que incluye una doble condición de muerto y clase, cuento los fallecidos por clase
   for (var b = 0; b < data.getRowCount(); b++) {
      if ((data.get(b, 1) == 0) && (data.get(b, 2) == 3)) {
         muertos_tercera++
      } else if ((data.get(b, 1) == 0) && (data.get(b, 2) == 2)) {
         muertos_segunda++
      } else if ((data.get(b, 1) == 0) && (data.get(b, 2) == 1)) {
         muertos_primera++
      }
   }

   for (var c = 0; c < data.getRowCount(); c++) {
     if ((data.get(c, 1) == 0) && (data.get(c, 2) == 3) && (data.get(c, 5) == "male")) {
        muerto_en_tercera++
     } else if ((data.get(c, 1) == 0) && (data.get(c, 2) == 2) && (data.get(c, 5) == "male")) {
        muerto_en_segunda++
     } else if ((data.get(c, 1) == 0) && (data.get(c, 2) == 1) && (data.get(c, 5) == "male")) {
        muerto_en_primera++
     }else if ((data.get(c, 1) == 0) && (data.get(c, 2) == 3) && (data.get(c, 5) == "female")) {
        muerta_en_tercera++
     }else if ((data.get(c, 1) == 0) && (data.get(c, 2) == 2) && (data.get(c, 5) == "female")) {
        muerta_en_segunda++
     }else if ((data.get(c, 1) == 0) && (data.get(c, 2) == 1) && (data.get(c, 5) == "female")) {
        muerta_en_primera++
     }
   }

   //todo esto se imprime en su consola de JavaScript
   print("En el Titanic viajaban " + data.getRowCount() + " pasajeros.");
   print("Eran " + total_primera + " pasajeros los que viajaban en la primera clase, de ellos fallecieron " + muertos_primera + ". De los muertos, " + muerto_en_primera + " eran hombres y " + muerta_en_primera + " eran mujeres.");
   print("Eran " + total_segunda + " pasajeros los que viajaban en la segunda clase, de ellos fallecieron " + muertos_segunda + ". De los muertos, " + muerto_en_segunda + " eran hombres y " + muerta_en_segunda + " eran mujeres.");
   print("Eran " + total_tercera + " pasajeros los que viajaban en la tercera clase, de ellos fallecieron " + muertos_tercera + ". De los muertos, " + muerto_en_tercera + " eran hombres y " + muerta_en_tercera + " eran mujeres.");
   //esto dibuja los círculos blancos, del total de pasajeros.
   fill(255);
   ellipse((width / 4), (height / 3), (total_primera / 3), (total_primera / 3));
   ellipse((width / 4 * 2), (height / 3), (total_segunda / 3), (total_segunda / 3));
   ellipse((width / 4 * 3), (height / 3), (total_tercera / 3), (total_tercera / 3));
   //estos dibuja los círculos negros, de total de facellecidos.
   fill(0, 94, 80);
   ellipse((width / 4), (height / 3), (muertos_primera / 3), (muertos_primera / 3));
   ellipse((width / 4 * 2), (height / 3), (muertos_segunda / 3), (muertos_segunda / 3));
   ellipse((width / 4 * 3), (height / 3), (muertos_tercera / 3), (muertos_tercera / 3));

   fill(0);
   ellipse((width / 4), (height / 1.5), (muerto_en_primera / 3), (muerto_en_primera / 3));
   ellipse((width / 4 * 2), (height / 1.5), (muerto_en_segunda / 3), (muerto_en_segunda / 3));
   ellipse((width / 4 * 3), (height / 1.5), (muerto_en_tercera / 3), (muerto_en_tercera / 3));

   fill(125);
   ellipse((width / 4), (height / 1.5), (muerta_en_primera / 3), (muerta_en_primera / 3));
   ellipse((width / 4 * 2), (height / 1.5), (muerta_en_segunda / 3), (muerta_en_segunda / 3));
   ellipse((width / 4 * 3), (height / 1.5), (muerta_en_tercera / 3), (muerta_en_tercera / 3));
}
