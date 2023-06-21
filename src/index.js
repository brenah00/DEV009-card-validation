import validator from './validator.js';
const inputCard = document.getElementById("c_number");
const donation = document.getElementById("donation");
const cardHolder = document.getElementById("card-holder");
const cardCvv = document.getElementById("card-cvv");
const button = document.getElementById("sendCard");
function validate(){
  if(inputCard.value.length > 0 && cardHolder.value.length > 0 && cardCvv.value.length === 3 && donation.value.length > 0){
    if(inputCard.value.search(/[a-z]/i) === -1 && cardCvv.value.search(/[a-z]/i) === -1){
      if(validator.isValid(inputCard.value) === true){
        alert(cardHolder.value+" GRACIAS POR TU DONACION DE "+donation.value+"\n\nREALIZADO CON TARJETA\n\n("+validator.validIssuer(inputCard.value)+") "+validator.maskify(inputCard.value));
      }
      else{
        alert(cardHolder.value + " NO SE HA PODIDO REALIZAR LA DONACIÓN, NUMERO DE TARJETA INVÁLIDO.");
      }
    }
    else{
      if(inputCard.value.search(/[a-z]/i) !== -1){
        alert("INGRESA SOLO NUMEROS EN EL CAMPO NUMERO DE TARJETA")
      }
      if(cardCvv.value.search(/[a-z]/i) !== -1){
        alert("INGRESA SOLO NUMEROS EN EL CVV")
      }
    }
  }
  else{
    alert("ASEGURATE DE LLENAR POR COMPLETO TODOS LOS CAMPOS DE DATOS");
  }
}
button.addEventListener('click',validate,false);

//console.log(validator); //Codigo predeterminado 