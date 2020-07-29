function brickCalculator(floor){



for (i=1; i<=floor ; i++){

     if (floor<=10){

           var brick1 = floor*15*1000;

            var totalBrick = brick1;
           return totalBrick;


     }

     else if (floor>10 && floor<=20){
        
      var firstPart = 10*15*1000;
      
       var remaining = (floor-10);

       var SecondPart = remaining*12*1000;

       
      var totalBrick = firstPart + SecondPart ;

      return totalBrick;

        
        
     }

     else{
           
      var firstPart = 10*15*1000;
      
      

      var SecondPart = 10*12*1000;

      var remaining = floor - 20;

      var thirdPart = remaining*10*1000;

      
     var totalBrick = firstPart + SecondPart +thirdPart ;

     return totalBrick;


     }

}

}

var result = brickCalculator(25);
console.log(result);