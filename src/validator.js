const validator = {
  isValid: function(card){
    let digitSum = 0;
    let validCard = false;
    const card_number = card.split('');
    card_number.reverse();

    for(let i = 0;i<card_number.length;i++){
      card_number[i] = parseInt(card_number[i],10);
      if(i%2 === 1){
        card_number[i] *= 2;
        if(card_number[i]>=10){
          card_number[i] = ((card_number[i] % 10) + ((card_number[i] - (card_number[i] % 10))/10));
        }
      }
      digitSum += card_number[i];
    }

    if((digitSum%10) === 0)
      validCard = true;

    console.log(validCard);
    return validCard;
  },
  
  maskify: function(card) {
    return card.slice(0, -4).replace(/./g, "#") + card.slice(-4);
  },

  validIssuer: function(card){
    switch(parseInt(card.slice(0,4))){
      case 1800: case 2131:
        return "JCB"; break;
      case 2014: case 2149:
        return "Diner's Club / enRoute"; break;
      case 6011:
        return "Discover"; break;
    }
    if(parseInt(card.slice(0,3))>=300 && parseInt(card.slice(0,3)) <= 305)
      return "Diner's Club / enRoute";
    switch(parseInt(card.slice(0,2))){
      case 34: case 37:
        return "American Express"; break;
      case 36: case 38:
        return "Diner's Club / enRoute"; break;
      case 51: case 52: case 53: case 54: case 55:
        return "MasterCard"; break;
    }
    switch(parseInt(card.slice(0,1))){
      case 3:
        return "JCB"; break;
      case 4:
        return "Visa"; break;
    }
    return "";
  }
};

export default validator;
