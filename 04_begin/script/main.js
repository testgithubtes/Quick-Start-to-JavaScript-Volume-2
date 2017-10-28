for(var i = 1; i<=100;i++){
  if(i%3 == 0){
    if (i%5 == 0){
      console.log("the number "+i+" is fizzbuzz");
    }
    else {
      console.log("the number "+i+" is fizz");
    }
  }else if(i%5 == 0){
    console.log("the number "+i+" is buzz");
  }
}