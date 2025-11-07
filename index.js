var age=30;
console.log(age)

let male="chibueze";
console.log(male)

const gender= "male"
console.log(gender)

const emma =[
    {
        name: "emma",
        age:"30",
        position: "classprefect"
    }
]
console.log(emma)

const add = 15 + 14;
console.log(add)

const equality= 10>59
console.log(equality)

let N= 5 
N += 5;
console.log(N)

for (let i=1; i<=10; i++) { console.log("i'm sorry")};

// const fruits = ["apple", "banana", "orange", "mango"];

// for (let blessing = 0; blessing < fruits.length; blessing++) {
//   console.log(fruits.blessing);
// }

let count = 1;

while (count <= 5) {
  console.log("this is the count value " + count);
  count++;
}

let num = 1;

do {
  console.log("this is the num value " + num);
  num++;
} while (num <= 5);

 for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    break;
  }
  console.log(i);
}  


        function chibueze(firstName,lastName) {
            console.log("Hello" + " " + firstName + " " + lastName);
        }

        chibueze("Chibueze", "Onyenuwa")

        const person=[
          {
            firstName: "chibueze",
            middleName: "Emmanuel",
            surname: "Onyenuwa",
            age: 27
          }
        ]
console.log(typeof person)

btn.addEventListener('click', function(){
console.log("clicked button!");
})

const text= document.getElementById("text");
const colorButton= document.getElementById("colorBtn");

colorButton.addEventListener("click", () => {
  text.style.color = "blue";
  text.style.backgroundColor = "yellow";
})

const bulb = document.getElementById("bulb");
const switchButton = document.getElementById("switchBtn");

switchButton.addEventListener( "click" ,() => {
  if(switchButton.textContent === "Turn On") {
bulb.src ="https://www.w3schools.com/js/pic_bulbon.gif";
switchButton.textContent = "Turn Off"
  } else {
    bulb.src = "https://www.w3schools.com/js/pic_bulboff.gif";
    switchButton.textContent = "Turn On"
  }
})

const colorBtn = document.getElementById("backgroundchange");

colorBtn.addEventListener("click", () => {
  const randomColor = "#" + Math.floor(Math.random() *16777215). toString(16)
  document.body.style.backgroundColor = randomColor;
});

const secondText = document.getElementById("change")
const button = document.getElementById ("btnChange")

button.addEventListener("click",() => {
  secondText.style.color = "red";
  secondText.style.background = "blue";
})