function recursive(num){

    if(num==0){
     return 1;
    }

    else{
        return  num * recursive(num-1);
    }


}
var result = recursive(10);
console.log(result);
