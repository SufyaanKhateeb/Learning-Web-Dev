//1
// const obj1 = {
//     carName: "ferrari",
//     cost: 300000,
//     carInfo: function(x) {
//         console.log("My dream car is: " + this.carName + "\nCost: " + this.cost + "\ncolor: " + x);
//     }
// }

// const obj2 = {
//     carName: "lamborghini",
//     cost: 400000,
// }

// obj1.carInfo("Red");
// obj1.carInfo.call(obj2,"Black");
// obj1.carInfo.apply(obj2,["Yellow"]);
// const binded = obj1.carInfo.bind(obj2,"Orange");
// binded();

//2
// const button = document.querySelector(".button");
// button.addEventListener("click", ()=> {
//     document.querySelector('p').innerHTML="red";
//     // document.getElementsByClassName("container")[0].getElementsByClassName("button")[0].getElementsByTagName("P")[0].innerHTML="red";
//     document.querySelector(".button").classList.add('red');
// })
// window.addEventListener("keydown", ()=> {
//     alert("PLEASE DON'T PRESS KEYS")
// })

//timepass
// var elem = document.documentElement;
// function openFullscreen() {
//     if (elem.requestFullscreen) {
//         elem.requestFullscreen();
//     }
//     else if (elem.webkitRequestFullscreen) {
//         elem.webkitRequestFullscreen();
//     }
// }

// function closeFullscreen() {
//     if (document.exitFullscreen) {
//         document.exitFullscreen();
//     }
//     else if (document.webkitExitFullscreen) {
//         document.webkitExitFullscreen();
//     }
// }

//3
var seats_available=document.querySelector(".available");
var booked=document.querySelector(".bookedvalue");
// console.log(booked.value);
// console.log(seats_available.value);

const seats = document.querySelector(".seatcontainer");

for(let i=0;i<60;i++) {
    seats.innerHTML += '<div class="seat"></div>';
}

const allseats = document.querySelectorAll(".seat");
allseats.forEach((ele) => {ele.addEventListener('click',() => 
    {
        if(ele.classList.contains('booked')) {
            ele.classList.remove('booked');
            booked.value -= 1;
            seats_available.value = parseInt(seats_available.value) + 1;
        }
        else {
            ele.classList.add('booked');
            booked.value = parseInt(booked.value) + 1;
            seats_available.value -= 1;
        }
    })
});