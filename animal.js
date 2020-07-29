function animal(depth)
{
    
    if (depth<=10){

        var totalAnimal = depth*50;
        return totalAnimal;

    }

    else if(depth>10 && depth <=20){
          var firstPath = 10*50;
          var remaining = depth-10;
          var secondPath = remaining*100;
          var totalAnimal = firstPath + secondPath;

          return totalAnimal;
    }

    else{

        var firstPath = 10*50;
        var secondPath = 10*100;
        var remaining = depth - 20;
        var thirdPath = remaining *300;

        var totalAnimal = firstPath + secondPath + thirdPath;
        return totalAnimal;




    }


    }
    var result = animal(23);
    console .log(result);





