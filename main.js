function fizzy(num) {
  if (num % 3 && !(num % 5) ){
    return 'Buzz';
  }
  else if(num % 5 && !(num % 3)){
    return 'Fizz';
  }
  else if ((num % 5) && (num % 3)){
  return num;
        }
  else if (num % 3 === num % 5){
    return 'FizzBuzz';
  }
}

module.exports = {
  fizzy,
}