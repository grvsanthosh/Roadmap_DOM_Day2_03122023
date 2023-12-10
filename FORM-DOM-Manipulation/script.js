

//form

const formelement = document.createElement('form');
formelement.id = 'form';
document.body.appendChild(formelement);

// div form-group

const DivformgroupElement = document.createElement('div');
DivformgroupElement.className = "form-group";
formelement.appendChild(DivformgroupElement);

//BREAK
const breakElement01 = document.createElement('br');
const breakElement02 = document.createElement('br');
const breakElement03 = document.createElement('br');
const breakElement04 = document.createElement('br');
const breakElement05 = document.createElement('br');
const breakElement1 = document.createElement('br');
const breakElement2 = document.createElement('br');
const breakElement3 = document.createElement('br');
const breakElement4 = document.createElement('br');
const breakElement5 = document.createElement('br');
const breakElement6 = document.createElement('br');
const breakElement7 = document.createElement('br');
const breakElement8 = document.createElement('br');
const breakElement9 = document.createElement('br');
const breakElement10 = document.createElement('br');
const breakElement11 = document.createElement('br');
const breakElement12 = document.createElement('br');
const breakElement13 = document.createElement('br');
const breakElement14 = document.createElement('br');

    

// input element

//lebel
const firstnamelabelElement = document.createElement('label');
const lastnamelabelElement = document.createElement('label');
const addresslabelElement = document.createElement('label');
const pincodelabelElement = document.createElement('label');
const emaillabelElement = document.createElement('label');

const genderlabelElement = document.createElement('label');
const genderlabelMaleElement = document.createElement('label');
const genderlabelFemaleElement = document.createElement('label');
const genderlabelOtherElement = document.createElement('label');

const foodlabelElement = document.createElement('label');
const foodlabelElement1 = document.createElement('label');
const foodlabelElement2 = document.createElement('label');
const foodlabelElement3 = document.createElement('label');
const foodlabelElement4 = document.createElement('label');
const foodlabelElement5 = document.createElement('label');

const statelabelElement = document.createElement('label');
const countrylabelElement = document.createElement('label');





//input
const firstnameinputElement = document.createElement('input');
const lastnameinputElement = document.createElement('input');
const addressinputElement = document.createElement('textarea');
const pincodeinputElement = document.createElement('input');
const emailinputElement = document.createElement('input');

const genderinputMaleElement = document.createElement('input');
const genderinputFemaleElement = document.createElement('input');
const genderinputOtherElement = document.createElement('input');


const foodinputElement1 = document.createElement('input');
const foodinputElement2 = document.createElement('input');
const foodinputElement3 = document.createElement('input');
const foodinputElement4 = document.createElement('input');
const foodinputElement5 = document.createElement('input');



const stateinputElement = document.createElement("select");
const statenull = document.createElement("option");
const stateTamilNadu = document.createElement("option");
const stateKerala = document.createElement("option");
const stateAndrapradesh = document.createElement("option");

const countryinputElement = document.createElement('select');
const countrynull = document.createElement('option');
const countryIndia = document.createElement('option');
const countryPakistan = document.createElement('option');
const countryChina = document.createElement('option');



//firstname
firstnamelabelElement.innerText = "First Name ";
DivformgroupElement.append(firstnamelabelElement);
firstnameinputElement.id = "first-name";
firstnameinputElement.type = "text";
firstnameinputElement.placeholder = "firstname";
firstnameinputElement.required = true;
DivformgroupElement.append(firstnameinputElement);
DivformgroupElement.append(breakElement01);

//lastname
lastnamelabelElement.innerText = "Last Name ";
DivformgroupElement.append(lastnamelabelElement);
lastnameinputElement.id = "last-name";
lastnameinputElement.type = "text";
lastnameinputElement.placeholder = "lastname";
lastnameinputElement.required = true;
DivformgroupElement.append(lastnameinputElement);
DivformgroupElement.append(breakElement02);
//address
addresslabelElement.innerText = "Address";
DivformgroupElement.append(addresslabelElement);
addressinputElement.id = "address";
addressinputElement.type = "text";
addressinputElement.placeholder = "address";
addressinputElement.required = true;
DivformgroupElement.append(addressinputElement);
DivformgroupElement.append(breakElement03);
//pincode
pincodelabelElement.innerText = "Pincode";
DivformgroupElement.append(pincodelabelElement);
pincodeinputElement.id = "pincode";
pincodeinputElement.type = "text";
pincodeinputElement.placeholder = "pincode";
pincodeinputElement.required = true;
DivformgroupElement.append(pincodeinputElement);
DivformgroupElement.append(breakElement04);
//email address
emaillabelElement.innerText = "Email Address";
DivformgroupElement.append(emaillabelElement);
emailinputElement.id = "email";
emailinputElement.type = "email";
emailinputElement.placeholder = "namme@example.com";
emailinputElement.required = true;
DivformgroupElement.append(emailinputElement);
DivformgroupElement.append(breakElement05);

//gender
genderlabelElement.innerText = "Gender ";
DivformgroupElement.append(genderlabelElement);
DivformgroupElement.append(breakElement1);
//male
genderlabelMaleElement.innerText = "Male";
genderinputMaleElement.id = "Male";
genderinputMaleElement.type = "radio";
genderinputMaleElement.name = "Gender";
DivformgroupElement.append(genderinputMaleElement,genderlabelMaleElement);
//female
genderlabelFemaleElement.innerText = "Female";
genderinputFemaleElement.id = "Female";
genderinputFemaleElement.type = "radio";
genderinputFemaleElement.name = "Gender";
DivformgroupElement.append(genderinputFemaleElement,genderlabelFemaleElement);
//other
genderlabelOtherElement.innerText = "Other ";
genderinputOtherElement.id = "Other";
genderinputOtherElement.type = "radio";
genderinputOtherElement.name = "Gender";

DivformgroupElement.append(genderinputOtherElement,genderlabelOtherElement);
DivformgroupElement.append(breakElement2);




//food
foodlabelElement.innerText = "Food ";
DivformgroupElement.append(foodlabelElement);
DivformgroupElement.append(breakElement3);
foodlabelElement1.innerText = "Briyani";
DivformgroupElement.append(foodinputElement1,foodlabelElement1);
DivformgroupElement.append(breakElement4);
foodinputElement1.id = "Briyani";
foodinputElement1.type = "checkbox";
foodinputElement1.name = "food";

foodlabelElement2.innerText = "Apple-pie";
DivformgroupElement.append(foodinputElement2,foodlabelElement2);
DivformgroupElement.append(breakElement5);
foodinputElement2.id = "Apple-pie";
foodinputElement2.type = "checkbox";
foodinputElement2.name = "food";

foodlabelElement3.innerText = "Fried rice";
DivformgroupElement.append(foodinputElement3,foodlabelElement3);
DivformgroupElement.append(breakElement6);
foodinputElement3.id = "Fried rice";
foodinputElement3.type = "checkbox";
foodinputElement3.name = "food";

foodlabelElement4.innerText = "burger";
DivformgroupElement.append(foodinputElement4,foodlabelElement4);
DivformgroupElement.append(breakElement7);
foodinputElement4.id = "burger";
foodinputElement4.type = "checkbox";
foodinputElement4.name = "food";

foodlabelElement5.innerText = "sandwich";
DivformgroupElement.append(foodinputElement5,foodlabelElement5);
DivformgroupElement.append(breakElement8);
foodinputElement5.id = "sandwich";
foodinputElement5.type = "checkbox";
foodinputElement5.name = "food";


//state
statelabelElement.innerText = "State";
DivformgroupElement.append(statelabelElement);
DivformgroupElement.append(breakElement9);
stateinputElement.id = "state";
stateinputElement.name = "state";
statenull.value = "";
statenull.innerText = "Select";
stateTamilNadu.value = "TN";
stateTamilNadu.innerText = "Tamil Nadu";
stateKerala.value = "KR";
stateKerala.innerText = "Kerala";
stateAndrapradesh.value = "AN";
stateAndrapradesh.innerText = "Andra pradesh";
stateinputElement.append(statenull,stateTamilNadu,stateKerala,stateAndrapradesh);
DivformgroupElement.append(stateinputElement);
DivformgroupElement.append(breakElement10);

//country
countrylabelElement.innerText = "Country ";
DivformgroupElement.append(countrylabelElement);
DivformgroupElement.append(breakElement11);

countryinputElement.id = "country";
countryinputElement.name = "country";

countrynull.value = "";
countrynull.innerText = "Select";

countryIndia.value = "IND";
countryIndia.innerText = "India";

countryPakistan.value = "PAK";
countryPakistan.innerText = "Pakistan";

countryChina.value = "CHN";
countryChina.innerText = "China";

countryinputElement.append(countrynull,countryIndia,countryPakistan,countryChina);
DivformgroupElement.append(countryinputElement);
DivformgroupElement.append(breakElement12);

//submit

const submitElement = document.createElement('button');
submitElement.innerText = "Submit";
submitElement.id = "submit";
submitElement.className = "btn btn-primary";
formelement.append(submitElement);
DivformgroupElement.append(breakElement13);

//table

const tableElement = document.createElement('table');
tableElement.className = 'table';
//Table header
const tableHeader = document.createElement('thead');
tableHeader.className = 'table';
const tableHeaderRow = document.createElement('tr');
tableHeaderRow.className = 'table';
const tableHeaderFN = document.createElement('th');
tableHeaderFN.className = 'table';
tableHeaderFN.innerText = 'First Name';
const tableHeaderLN = document.createElement('th');
tableHeaderLN.className = 'table';
tableHeaderLN.innerText = 'Last Name';
const tableHeaderAdd = document.createElement('th');
tableHeaderAdd.className = 'table';
tableHeaderAdd.innerText = 'Address';
const tableHeaderPin = document.createElement('th');
tableHeaderPin.className = 'table';
tableHeaderPin.innerText = 'Pincode';
const tableHeaderEmail = document.createElement('th');
tableHeaderEmail.className = 'table';
tableHeaderEmail.innerText = 'Email';
const tableHeaderGender = document.createElement('th');
tableHeaderGender.className = 'table';
tableHeaderGender.innerText = 'Gender';
const tableHeaderFood = document.createElement('th');
tableHeaderFood.className = 'table';
tableHeaderFood.innerText = 'Food';
const tableHeaderState = document.createElement('th');
tableHeaderState.className = 'table';
tableHeaderState.innerText = 'State';
const tableHeaderCountry = document.createElement('th');
tableHeaderCountry.className = 'table';
tableHeaderCountry.innerText = 'Country';
//table body
const tableBody = document.createElement('tbody');
tableBody.className = 'table';
//table append
tableHeaderRow.append(tableHeaderFN,tableHeaderLN,tableHeaderAdd,tableHeaderPin,tableHeaderEmail,tableHeaderGender,tableHeaderFood,tableHeaderState,tableHeaderCountry);
tableHeader.append(tableHeaderRow);
tableElement.append(tableHeader,tableBody);
DivformgroupElement.append(tableElement);

//eventlistener

formelement.addEventListener("submit",(event) => {
    console.log(event);
    event.preventDefault();
    //new row
    const tbodyRow = document.createElement("tr");
    tbodyRow.className = 'table';
    const tdFN = document.createElement("td");
    tdFN.innerHTML = firstnameinputElement.value;
    tdFN.className = 'table';
    const tdLN = document.createElement("td");    
    tdLN.innerHTML = lastnameinputElement.value;
    tdLN.className = 'table';
    const tdADD = document.createElement("td");
    tdADD.innerHTML = addressinputElement.value;
    tdLN.className = 'table';
    const tdPin = document.createElement("td");
    tdPin.innerHTML = pincodeinputElement.value;
    tdPin.className = 'table';
    const tdEmail = document.createElement("td");
    tdEmail.innerHTML = emailinputElement.value;
    tdEmail.className = 'table';
    //gender
    const tdGen = document.createElement("td");
    if (genderinputMaleElement.checked === true) {
        tdGen.innerHTML = genderinputMaleElement.id;
       
    } else if (genderinputFemaleElement.checked === true){
        tdGen.innerHTML = genderinputFemaleElement.id;
    }
    else if (genderinputOtherElement.checked === true){
        tdGen.innerHTML = genderinputOtherElement.id;
    }
    else {
        tdGen.innerHTML = "null";
    }
    
    tdGen.className = 'table';

    //food
    const tdFood = document.createElement("td");
    const foodval = document.getElementsByName("food");
    
    let values = "";
    Array.from(foodval).filter((val) => {
        if(val.checked === true) {
    
       values = values +'\n'+ val.id;
        }
    });    
    tdFood.innerHTML = values;
    tdFood.className = 'table';
//state
    const tdState = document.createElement("td");
    const Stateval = document.getElementsByName("state");
    
    const arr = Array.from(Stateval[0]);
    arr.filter((val) => {
        if(val.selected === true) {
            tdState.innerHTML = val.innerText;            
    }});    
    tdState.className = 'table';
// country
    const tdCountry = document.createElement("td");
    const Countrval = document.getElementsByName("country");    
    const arrcountry = Array.from(Countrval[0]);
    arrcountry.filter((val) => {
        if(val.selected === true) {
            tdCountry.innerHTML = val.innerText;            
    }});    
    tdCountry.className = 'table';
    tbodyRow.append(tdFN,tdLN,tdADD,tdPin,tdEmail,tdGen,tdFood,tdState,tdCountry);
    tableBody.append(tbodyRow);
    formelement.reset();
});











