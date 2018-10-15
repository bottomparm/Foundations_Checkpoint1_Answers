let rightTriangle = num => {
    let stars = ''
    for (let i = num; i > 0; i--){
        if (i < num && i > 0){
            stars += '\n';
        }
        for (let j = 0; j < i; j++){
            stars += '*';
        }
    }
    return stars;
}

console.log(rightTriangle(3))







// function rightTriangle(rows) {
//     let stars = '';
    
//     for (let i = rows; i > 0; i--){
//         for (let j = 1; j <= i; j++){
//             stars += '*';
//         }
//         stars += '\n';
//     }
//     return stars.trim();
// }

// console.log(rightTriangle(5));