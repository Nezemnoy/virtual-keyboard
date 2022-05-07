
import "../assets/styles/style.css";
import { addRow } from "./row"

const BODY = document.querySelector('.body'); 

BODY.innerHTML = '';

const WRAPPER  = document.createElement("div");
const TEXTAREA  = document.createElement("textarea");
const KEYBOARD = document.createElement("div");


WRAPPER.classList.add("wrapper");
TEXTAREA.classList.add("textarea");
KEYBOARD.classList.add("keyboard");
BODY.appendChild(WRAPPER);
WRAPPER.appendChild(TEXTAREA);
WRAPPER.appendChild(KEYBOARD);

addRow(KEYBOARD);


let row; 
let key;

for (let j = 0; j<5; j++)

{
    row = document.querySelector(`#row${j}`);

for (let i = 0; i<14; i++){
    key = document.createElement("div");
    key.classList.add("key");
    key.setAttribute("id", `row${j}key${i}`);
    key.setAttribute("type", "letter");
    row.appendChild(key) 
    }   
}

// back-space

let backSpace = document.querySelector('#row0key13')
backSpace.setAttribute("type", "backspace");
backSpace.classList.add('Backspace')
backSpace.innerText = "Back Space";

let tab = document.querySelector('#row1key0')
 tab.setAttribute("type", "tab");
 tab.classList.add('Tab')
 tab.innerText = "Tab";
//  row = document.querySelector("#row1");
 let slash = document.querySelector("#row1key13");
 slash.setAttribute("type", "slash");
 slash.innerText = 'sl';
//  row.removeChild(key);

 let capsLock = document.querySelector('#row2key0')
 capsLock.setAttribute("type", "capslock");
 capsLock.classList.add('CapsLock')
 capsLock.innerText = "Caps Lock";

//  enter add

 row = document.querySelector("#row2");
 key = document.querySelector("#row2key13");
 row.removeChild(key);
 let enter = document.querySelector('#row2key12')
 enter.setAttribute("type", "enter");
 enter.classList.add('Enter');
 enter.innerText = "Enter";

//  left/right shift add

 row = document.querySelector("#row3");
 key = document.querySelector("#row3key13");

 let leftShift = document.querySelector('#row3key0')
 leftShift.setAttribute("type", "leftshift");
 leftShift.classList.add('ShiftLeft');
 leftShift.innerText = "Shift";

 let rightShift = document.querySelector('#row3key13')
 rightShift.setAttribute("type", "rightshift");
 rightShift.classList.add('ShiftRight');
 rightShift.innerText = "Shift";

 //space add

 row = document.querySelector("#row4");
 key = document.querySelector("#row4key13");
 row.removeChild(key);
 key = document.querySelector("#row4key12");
 row.removeChild(key);
 key = document.querySelector("#row4key11");
 row.removeChild(key);
 key = document.querySelector("#row4key10");
 row.removeChild(key);
 
 let space = document.querySelector('#row4key4')
 space.setAttribute("type", "space");
 space.classList.add('Space');
 space.innerText = "";

  //fn add

  let fn = document.querySelector('#row4key0')
  fn.setAttribute("type", "fn");
  fn.classList.add('Fn');
  fn.innerText = "Fn";
 
 //left ctrl add

 let leftCtrl = document.querySelector('#row4key1')
 leftCtrl.setAttribute("type", "leftctrl");
 leftCtrl.classList.add('ControlLeft');
 leftCtrl.innerText = "Ctrl";


  //right/left alt add

 let leftAlt = document.querySelector('#row4key2')
 leftAlt.setAttribute("type", "leftalt");
 leftAlt.classList.add('AltLeft');
 leftAlt.innerText = "Alt";

 let righttAlt = document.querySelector('#row4key9')
 righttAlt.setAttribute("type", "rightalt");
 righttAlt.classList.add('AltRight');
 righttAlt.innerText = "Alt";


//  arrow up/down/left/right add

let arrowUp = document.querySelector('#row3key12')
arrowUp.setAttribute("type", "arrowup");
arrowUp.classList.add('ArrowUp');
arrowUp.innerText = "U";

let arrowDown = document.querySelector('#row4key7')
arrowDown.setAttribute("type", "arrowdown");
arrowDown.classList.add('ArrowDown');
arrowDown.innerText = "D";

let arrowLeft = document.querySelector('#row4key6')
arrowLeft.setAttribute("type", "arrowleft");
arrowLeft.classList.add('ArrowLeft');
arrowLeft.innerText = "L";

let arrowRight = document.querySelector('#row4key8')
arrowRight.setAttribute("type", "arrowright");
arrowRight.classList.add('ArrowRight');
arrowRight.innerText = "R";


// right/left cdm add
 let cmdRight = document.querySelector('#row4key5')
 cmdRight.setAttribute("type", "cmdRight");
 cmdRight.classList.add('Cmd');
 cmdRight.innerText = "Cmd";

 let cmdLeft = document.querySelector('#row4key3')
 cmdLeft.setAttribute("type", "cmdLeft");
 cmdLeft.classList.add('Cmd');
 cmdLeft.innerText = "Cmd";


 let engKeyboard =['§','1','2','3','4','5','6','7','8','9','0',"-","+","q",'w','e','r','t','y','u','i','o','p','[',']','a','s','d','f','g','h','j','k','l',';',"'","`",'z','x','c','v','b','n','m',',','.','/'];
 let attribute; 

key = document.querySelectorAll('.key');

let i = 0;

key.forEach(element => {
    attribute = element.getAttribute("type");
         if (attribute==='letter'){
            element.innerText = engKeyboard[i]; 
            i++;
           }     
});




// readonly
// text.innerHTML.slice(0, input.innerHTML.length - 1)



 


















// import { createImg } from "./view"
// import "../assets/styles/style.css";
// import dogPng from "../assets/image/pets-woody.png"

// const wrapper = document.getElementById('wrapper');

// const unused = 5;

// createImg(dogPng, wrapper);