// function is_array (x) {
//     return Array.isArray(x);
// }

// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));

// function array_Clone(x) {
//     return x.slice(0);
// }

// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));

// function first(arr,n=0) {
//     if(n<0) {
//         return arr.slice(0,0);
//     }
//     if(n==0) {
//         return arr.slice(0,1);
//     }
//     return arr.slice(0,n);
// }

// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));

// function joinArray(arr) {
//     console.log(arr.join(','));
//     console.log(arr.join('+'));
// }

// myColor = ["Red", "Green", "White", "Black"];
// joinArray(myColor);

// function freq(arr){
//     return arr.sort((a,b) =>
//           arr.filter(v => v===a).length
//         - arr.filter(v => v===b).length
//     ).pop();
// }

// var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// console.log(freq(arr1));