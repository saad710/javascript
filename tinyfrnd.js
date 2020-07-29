
// function tinyFriend(name) {
//     var shortLength = Infinity;
//     var smallest = "";
  
//     if (name.length > 0) {
//         for (let i = 0; i < name.length; i++) {
//             if (name[i].length < shortLength) {
//                 smallest = name[i];
//                 shortLength = name[i].length;
//             }
//         }
//     }
//     return smallest;
//   }
  
//   var output = tinyFriend([ 'NishatTasnimMithila', 'mithila', 'mi', 'mithil', 'nish',]);
//   console.log(output); 











function tinyFriend(name){
    
    var shortLength = Infinity;
    
    var smallest ="";
if(name.length > 0){
    for(var i=0; i<name.length ; i++){

         if(name[i].length < shortLength){


            smallest = name[i];
            shortLength = name[i].length;
         }

    }
}

return smallest;

}

    var result = tinyFriend(['samin', 'sumaita', 'saad', 'sadaf', 'nishat']);
    console.log(result);



    