import tipCalculator from './modules/tipCalculator.js';
import totalFinal from './modules/totalFinal.js';

//constante de los elementos html
const main = document.getElementById('main');
const form = document.getElementById('main-form');
//guardar valores en variables
const subtotal = document.getElementById('total-bill');
const porcentDiv = document.getElementById('forms-btns');
const persona = document.getElementById('total-people');


//variable para almacenar el valor porcentual seleccionado

let porcentTip;

//Evento para escuchar a que boton estamos dando click
porcentDiv.addEventListener('click', (e) => {
  porcentTip = e.target;
  //condicion escuchar custom
  if (e.target.id === 'custom-tip') {

  }


});

form.addEventListener('submit', (e) => {
  //evitar por defecto
  e.preventDefault();

  //crear objeto
  const formulario = {
    subtotalF: subtotal.value,
    porcentTipF: porcentTip.value,
    personasf: persona.value,
  }


  //Constantes 
  const tipFinal = tipCalculator(subtotalF, porcentTipF, personasf);
  const totalF = totalFinal(subtotalF, personasf, tipFinal);

  console.log(totalF);
});

//const resultadoTip = tipCalculator(subtotal, porcentTip, persona);
//valores decimales


//const resultadoFinal = totalFinal(subtotal, persona, resultadoTip);
//valores decimales