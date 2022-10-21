import { series } from './data.js';
var seriesTbody = document.getElementById('series');
var promedioSeries = document.getElementById('promedioSeries');
renderSeriesInTable(series);
promedioSeries.innerHTML = "Seasons average: ".concat(getPromedioSeries(series));
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                               <td class=\"text-primary\">").concat(serie.name, "</td>\n                               <td>").concat(serie.channel, "</td>\n                               <td>").concat(serie.seasons, "</td>");
        trElement.addEventListener("click", function () { return renderCard(serie); });
        trElement.classList.add("serieClick");
        seriesTbody.appendChild(trElement);
    });
}
function renderCard(serie) {
    var cardSerie = document.getElementById('cardSerie');
    cardSerie.style.visibility = "visible";
    cardSerie.innerHTML = "<img class=\"card-img-top\" src=".concat(serie.image, " alt=\"Card image cap\">\n                           <div class=\"card-body\">\n                               <h5 class=\"card-title\">").concat(serie.name, "</h5>\n                               <p class=\"card-text\">").concat(serie.description, "</p>\n                               <a href=").concat(serie.link, ">").concat(serie.link, "</a>\n                           </div>");
}
function getPromedioSeries(series) {
    var promedio = 0;
    var suma = 0;
    series.forEach(function (serie) { return suma = suma + serie.seasons; });
    promedio = suma / series.length;
    return promedio;
}
