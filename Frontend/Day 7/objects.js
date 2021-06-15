// var student = { name : "David Rayy", sclass : "VI", rollno : 12 };

//1
// console.log(Object.keys(student));

//2
// delete student.rollno;
// console.log(student);

//3
// console.log(Object.keys(student).length);

//4
// var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];

// const display = obj => {
//     for(let item in obj) {
//         console.log((parseInt(item)+1)+"\nAuthor: " + obj[item].author + "\nTitle: " + obj[item].title + "\nReadingStatus: " + obj[item].readingStatus+'\n');
//     }
// }

// display(library);

//5
// obj={
//     r:5,
//     h:7
// };
// const volume = obj => {
//     return (Math.PI*obj.r*obj.h*obj.r).toFixed(4);
// }
// console.log(volume(obj));

//6
var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }];

library.sort((a,b) => 
    b.libraryID - a.libraryID
);
console.log(library);