let thrice = func => {
    let count = 0;
    return function(){
        count++;
        if(count <= 3){
            return func();
        }else{
            return undefined;
        }
    }
}