import { Serie } from './serie.js';

import { series } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
const promedioSeries: HTMLElement = document.getElementById('promedioSeries')!;

renderSeriesInTable(series);

promedioSeries.innerHTML = `Seasons average: ${getPromedioSeries(series)}`

function renderSeriesInTable(series: Serie[]): void {
    console.log('Desplegando series');
    series.forEach((serie) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${serie.id}</td>
                               <td class="text-primary">${serie.name}</td>
                               <td>${serie.channel}</td>
                               <td>${serie.seasons}</td>`;
        trElement.addEventListener("click", () => renderCard(serie));
        trElement.classList.add("serieClick");
        seriesTbody.appendChild(trElement);
    });
}

function renderCard(serie: Serie): void {
    let cardSerie: HTMLElement = document.getElementById('cardSerie')!;
    cardSerie.style.visibility = "visible";
    cardSerie.innerHTML = `<img class="card-img-top" src=${serie.image} alt="Card image cap">
                           <div class="card-body">
                               <h5 class="card-title">${serie.name}</h5>
                               <p class="card-text">${serie.description}</p>
                               <a href=${serie.link}>${serie.link}</a>
                           </div>`;
}

function getPromedioSeries(series: Serie[]): number {
    let promedio: number = 0;
    let suma: number = 0;
    series.forEach((serie) => suma = suma + serie.seasons);
    promedio = suma / series.length;
    return promedio;
  }
  
