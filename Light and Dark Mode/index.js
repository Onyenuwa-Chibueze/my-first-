// //1 
// const name = "Emmanuel";
// const age = 23;
// const myAge = false;

// //2
// let number = prompt("Enter a number ")

// if ( number > 10 ){
//     console.log("High")
// } else{
//     console.log("Low")
// }

// //3
// function addNumbers(a, b){
//     return a + b;
// }
// console.log(addNumbers(7,5))

// //4
// const colors = ["red", "blue", "green", "yellow"];

// console.log(colors[0]);
// console.log( colors[colors.length - 3]);

// //5
// for(let i = 0; i<=5; i++){
//     console.log(i)
// }

// //6

// const student = {
//     name:'Chibueze',
//     age:23,
//     department:'PAE',
// }

// console.log(student.department)

// //8
// const button = document.getElementById("btn");
// button.addEventListener("click", function() {
//         alert("Button Clicked!");
//     });


const btn = document.getElementById("toggle-btn");
const body = document.body;

btn.addEventListener("click", () =>{
    body.classList.toggle("dark-mode")

    if(body.classList.contains("dark-mode")){
        btn.textContent= "Switch to Light Mode"
    } else {
        btn.textContent = "Switch to Dark Mode"
    }
})

    

