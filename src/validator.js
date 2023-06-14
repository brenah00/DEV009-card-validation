const validator = {
  isValid: function(card){
    let digitSum = 0;
    let validCard = false;
    card_number = card.split('');
    card_number.reverse();

    for(let i = 0;i<card_number.length;i++){
        card_number[i] = parseInt(card_number[i],10);
        if(i%2 == 1){
            card_number[i] *= 2;
            if(card_number[i]>=10){
                card_number[i] = ((card_number[i] % 10) + ((card_number[i] - (card_number[i] % 10))/10));
            }
        }
        digitSum += card_number[i];
    }

    if((digitSum%10) == 0)
        validCard = true;

    return validCard;
  },
  
  maskify: function(card) {
    maskedCardNumber = card.slice(0, -4).replace(/./g, "#") + card.slice(-4);
  }
};

export default validator;
