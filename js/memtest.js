function randomString(len, alphanum){
  // Randomised set of characters of length len
  // if alphanum == True, include approx 50% letters
  alphanum = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  num = '0123456789';
  if(alphanum){
    charitems = alphanum + num.repeat(5);
  }
  else{
    charitems = num;
  } 
  items = [];
  for(i = 0; i <= len; i++){
    item = charitems.charAt(Math.floor(Math.random()*len));
    items.push(item);
  }
  return items;
}
