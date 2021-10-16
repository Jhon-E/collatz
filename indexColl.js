let btn = document.querySelector("#submit");
let num = document.querySelector("#num");
google.charts.load('current', {'packages':['bar']});

let pasos = 0;


const eventoBoton = btn.addEventListener("click", function () {

    let c = num.value;
    let paso = [];
    let cantidad = [];
  if (c != "" || c > 0 && c == Number){ 
    while (c != 1){
          if (c % 2 == 0){
            c /= 2;
          } else {
            c = (3 * c) + 1; 
          }
            cantidad.push(c);
            pasos++;
            paso.push(pasos);
    }
 
        console.log(`%c${pasos}`,`color: green; font-size:20px;`);
        console.log(paso)
        console.log(cantidad)
        pasos = pasos - pasos;

        /* DIBUJA EL GRAFICO */

google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  // Some raw data (not necessarily accurate) 
  var data = google.visualization.arrayToDataTable([
    ['Pasos','Resultado', {role: 'style'}],
  ...Array(paso,...cantidad).fill(0).map((value,index)=>[`paso ${[index + 1]}`,cantidad[index], 'color: black'])
]);

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