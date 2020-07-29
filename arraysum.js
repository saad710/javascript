

var marks = [45, 56, 99, 85, 88, 42];
function getArraySum(marks){



var sum = marks[0] ;

for (i = 1;i<marks.length; i++){

        

             var element = marks[i];

             sum= sum + element;
             
}

return sum;

}

var result = getArraySum(marks);
console.log(result);




     


    
       

       



