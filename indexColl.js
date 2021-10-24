let btn = document.querySelector("#submit");
let num = document.querySelector("#num");
let boxR = document.querySelector('.result');
google.charts.load('current', {'packages':['bar']});

// FUNCION MAIN CONJETURA DE COLLATZ
const eventoBoton = btn.addEventListener("click", function () {
    let pasos = 0;
    let c = num.value;
    let paso = [];
    let cantidad = [];

  //VALIDACIÓN DEL INPUT
  if (c != "" || c > 0 && c == Number){ 

    //ALGORITMO DE LA CONJETURA
    while (c != 1){
          //SI ES PAR DIVIDIRLO ENTRE 2
          if (c % 2 == 0){
            c /= 2;
          } // SINO MULTIPLICARLO POR 3 Y SUMARLE 1 
          else {
            c = (3 * c) + 1; 
          }
          //CONTADOR DE LOS PASOS E INSTANCIA EL ARRAY _PASO_
            cantidad.push(c);
            pasos++;
            paso.push(pasos);
    }
 
/* console.log(`%c${pasos}`,`color: green; font-size:20px;`);
console.log(paso)
console.log(cantidad) */
//ESTO SIRVE PARA QUE NO SE ACUMULEN LOS PASOS SI EL USUARIO DIGITA VARIOS INPUT'S
pasos = pasos - pasos;

let re = `<div class = "msg">
          <h2><b>Se redujo (<span>${num.value}</span>) en <span>${paso[paso.length-1]}</span> pasos.</b></h2>
          </div>`
          console.log(c)
boxR.innerHTML = re;


/* DIBUJA EL GRAFICO */
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  // DATA DEL GRAFICO
  var data = google.visualization.arrayToDataTable([
    ['Pasos','Resultado', {role: 'style'}],
  ...Array(paso,...cantidad).fill(0).map((value,index)=>[`paso ${[index + 1]}`,cantidad[index], 'color: black'])
]);
  //OPCIONES DEL GRAFICO
  var options = {
    chart: {
      title: 'Gráfico interactivo'
    },
    hAxis: {
      textStyle:{color: '#F0A500'}
  },
    fontName: 'Comic Neue',
    colors: '#F0A500',
    backgroundColor: '#082032',
    chartArea: {
      'backgroundColor': {
          'fill': '#082032',
          'opacity': 100,
          'stroke': '#F0A500'
       },
   }
  };

  var chart = new google.charts.Bar(document.getElementById('line_chart'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
}
 } else {alert("Por favor, digite un valor numerico.")}
})