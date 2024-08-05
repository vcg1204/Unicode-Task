const URL1 ="https://hp-api.onrender.com/api/characters";
const URL2 ="https://hp-api.onrender.com/api/spells";
const URL3 ="https://hp-api.onrender.com/api/characters/staff";
const URL4 ="https://hp-api.onrender.com/api/characters/students";

let button1 = document.querySelector("#charBtn");
let button2 = document.querySelector("#spellBtn");
let button3 = document.querySelector("#staffBtn");
let button4 = document.querySelector("#studentBtn");

let box1 = document.querySelector("#box1");
let box2 = document.querySelector("#box2");
let box3 = document.querySelector("#box3");
let box4 = document.querySelector("#box4");

let charIn = 0;
let spellIn = 0;
let staffIn =0;
let studentIn = 0;
const limit = 5;

const getChar = async()=>{
    let response = await fetch(URL1);
    console.log(response);
    let data1 = await response.json();
    console.log(data1);
    for(let val =charIn; val <charIn+limit && val<data1.length ; val++){
        box1.innerHTML +=
        '<div id="character">'+
        '<img class="photo" src ="'+ data1[val].image +'"height="200px">'+
        '<div id="name">'+"name: "+data1[val].name+'</div>'+
        '<div id="species">'+"species: "+data1[val].species+'</div>'+
        '<div id="gender">'+"gender: "+data1[val].gender+'</div>'+
        '<div id="dob">'+"DOB : "+data1[val].dateOfBirth+'</div>'+
        '</div>'
    }
    charIn += limit;
}
button1.addEventListener("click", getChar);

const getSpell = async()=>{
    let response = await fetch(URL2);
    console.log(response);
    let data2 = await response.json();
    console.log(data2);
    for(let val=spellIn; val<spellIn+ limit && val<data2.length; val++){
        box2.innerHTML +=
        '<div id="spell" >'+
        '<div id="name">'+"name: "+data2[val].name+'</div>'+
        '<div id="spells">'+"spell : "+data2[val].description+'</div>'+
        '</div>'
    }
    spellIn += limit;
}
button2.addEventListener("click", getSpell);

const getStaff = async()=>{
    let response = await fetch(URL3);
    console.log(response);
    let data3 = await response.json();
    console.log(data3);
    for(let val=staffIn; val<staffIn+ limit && val<data3.length; val++){
        box3.innerHTML +=
        '<div id="staff" >'+
        '<img class="photo" src ="'+ data3[val].image +'"height="200px">'+
        '<div id="name">'+"name: "+data3[val].name+'</div>'+
        '<div id="house">'+"house : "+data3[val].house+'</div>'+
        '<div id="ancestry">'+"ancestry : "+data3[val].ancestry+'</div>'+
        '</div>'
    }
    staffIn += limit;
}
button3.addEventListener("click", getStaff);

const getStudent = async()=>{
    let response = await fetch(URL4);
    console.log(response);
    let data4 = await response.json();
    console.log(data4);
    for(let val =studentIn; val <studentIn+limit && val<data4.length ; val++){
        box1.innerHTML +=
        '<div id="student">'+
        '<img class="photo" src ="'+ data4[val].image +'"height="200px">'+
        '<div id="name">'+"name: "+data4[val].name+'</div>'+
        '<div id="gender">'+"actor: "+data4[val].actor+'</div>'+
        '<div id="dob">'+"YOB : "+data4[val].yearOfBirth+'</div>'+
        '</div>'
    }
    studentIn += limit;
}
button4.addEventListener("click", getStudent);