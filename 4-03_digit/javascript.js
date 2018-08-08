let addZero = function(num, digit){
 let numString = String(num);
 while (numString.length < digit){
   numString = '0' + numString;
 }
 return numString;
}

document.getElementById('form').onsubmit = () => {
  const num = document.getElementById('form').num.value;
  const digit = document.getElementById('form').digit.value;
  document.getElementById('output').textContent = addZero(num, digit);
  return false;
}
