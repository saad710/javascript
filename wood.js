function woodCalculator(chair, table , bed){


      var woodChair = 1*chair;
      var woodTable = 3*table;
      var woodBed = 5*bed;

      var totalWood = woodChair + woodTable + woodBed;

      return totalWood;
}

var result = woodCalculator(5,4,3);
console.log(result);








