let findObjKeys = obj => {
    let keys = Object.keys(obj);
    return keys.join(', ');
}



let findObjPropsHasOwn = obj => {
    let keyArr = [];
    for (let key in obj){
        if (obj.hasOwnProperty(key)){
            keyArr.push(key);
        }
    }
    return keyArr.join(', ')
}


// const yelloRectangle = { color: 'yellow', height: 8, width: 5 };

// console.log(findObjPropsHasOwn(yelloRectangle));












































// let findObjPropsHasOwn = function(obj) {
//     let result = '';
//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             result += `${key}, `
//         }
//     }
//     let newResult = result.slice(0, -2);
//     return newResult.trim();
// }

// // console.log(findObjPropsHasOwn({dylan: 'yes', jeff: 'also yes'}));

// let findObjKeys = function(obj){
//     let objArr = Object.keys(obj);
//     return objArr.join(', ');
   
// }

// console.log(findObjKeys({dylan: 'yes', jeff: 'also yes'}));
