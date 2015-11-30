function arrayOfLight(num){
  var array = [];
  for(var i = 0; i <= num; i++){
    array.push(i) //changed to be more precise, old answer only worked because we were starting from 0.
  }
  return array;
}