// create element
const h1element = document.createElement('h1');
h1element.innerHTML = "Hello <i>World</i>";
document.body.append(h1element);

// innertext
const h1element1 = document.createElement('h2');
h1element1.innerText = "Hello <i>World</i>";
//SYTLING
h1element1.style.color = "green";
document.body.append(h1element1);

//adding id

const idelement = document.createElement('div');
idelement.innerHTML = "div1";
idelement.id= "id-style";
document.body.append(idelement);
//adding class

const classelement = document.createElement('div');
classelement.innerHTML = "div2";
classelement.className= "class-style";
document.body.append(classelement);

//adding class using classList

const classelement1 = document.createElement('div');
classelement1.innerHTML = "DIV3";
classelement1.classList.add("class-style");
document.body.append(classelement1);

//button

const buttoneelement = document.createElement("button");
buttoneelement.innerHTML = "<i>TOGGLE COLOR</i>";
buttoneelement.setAttribute("onclick", "buttonControl()");
document.body.appendChild(buttoneelement);
const buttonControl = () => {
    classelement1.classList.toggle("buttonStyle");
};

//append vs appendchild

const h1ele = document.createElement("h1");
h1ele.innerHTML ="hi";



const h1ele1 = document.createElement("h1");
h1ele1.innerHTML ="hi";
//error
// document.body.appendchild(h1ele,h1ele1);
//no error
document.body.append(h1ele,h1ele1);

// creating div inside div
const divele1 = document.createElement("div");
const divele2 = document.createElement("div");
divele1.innerHTML = "this is div1";
divele2.innerHTML = "this is div2";
divele1.appendChild(divele2);
document.body.appendChild(divele1);

// getElementbyId
// const data1 = document.getElementById("id-style");
// console.log(data1);

//getElementbyClassName
// const data2 = document.getElementsByClassName("class-style");
// console.log(data2);

// querySelector
const data3 = document.body.querySelector("div.class-style");
console.log(data3);

// querySelectorAll
const data4 = document.querySelectorAll("div");
console.log(data4);

//alert
buttonAlert = () => {
    alert("hi");
}

//prompt
const inh1element = document.createElement("h1");
inh1element.innerHTML ="";
buttonPrompt = () => {

    let age = prompt("age");
    // console.log(age);
    
    
    inh1element.innerHTML = age;
    document.body.appendChild(inh1element);


}

//confirm
const confirmh1element = document.createElement("h1");
confirmh1element.innerHTML ="";


const buttonconfirm = () => {
    const isindian = confirm("are you indian: ");
    confirmh1element.innerText = `Indian: ${isindian.toString()}`;
    document.body.appendChild(confirmh1element);
};

// timer

 
   const timercontainer =  setTimeout(() => {
        const msg = "Happy Diwali !!!!!!";
        document.getElementById("container-timer").innerHTML = msg;
    }, 3000);

    // timercontainer();

const stoptimercontainer = () => {
    clearTimeout(timercontainer);
}

//time interval
let count = 0;
let time = null;
const startInterval = () => {

   time =  setInterval(() => {
    
    document.getElementById("interval-timer").innerHTML = count;
    count++;

}, 1000);

};

const stopInterval = () => {
    clearInterval(time);
}

// startInterval();

//eventlistener

const inpeventListener = document.getElementById("interval-timer");
inpeventListener.addEventListener("mouseover",(event) => {
 
    alert("its interval timer");
    console.log(event);
    
})











