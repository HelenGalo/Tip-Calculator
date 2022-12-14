function tipCalculator(subtotal, porcentTip, persona) {
  let propina;
  propina = (subtotal * porcentTip) / persona;

  //Redondea sin decimales 
  //propina = Math.round(propina);
  //Redondea a cifras decimales
  propina = propina;

  return propina

}
export default tipCalculator;