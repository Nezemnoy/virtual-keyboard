
import "../assets/styles/style.css";
import { addRow } from "./row";
import { mouseListener } from "./mouseListener";
import { addKey } from "./key";
import { keyHandler } from "./keyHandler";
import { letterCreate } from "./letterCreation";

const BODY = document.querySelector('.body'); 

BODY.innerHTML = '';

const WRAPPER  = document.createElement("div");
const TEXTAREA  = document.createElement("textarea");
const KEYBOARD = document.createElement("div");
const TITLE = document.createElement("h1");
const DESCRIPTION = document.createElement("p");


let text ='';
let enLanguage= true;

let row; 
let key;
let engKeyboard =['§','1','2','3','4','5','6','7','8','9','0',"-","+","q",'w','e','r','t','y','u','i','o','p','[',']','a','s','d','f','g','h','j','k','l',';',"'","`",'z','x','c','v','b','n','m',',','.','/'];

let rusKeyboard =['<','1','2','3','4','5','6','7','8','9','0','-','=','й','ц','у','к','е','н','г','ш','щ','з','х','ъ','ф','ы','в','а','п','р','о','л','д','ж','э',']','я','ч','с','м','и','т','ь','б','ю','/'];

let arr;

WRAPPER.classList.add("wrapper");
TEXTAREA.classList.add("textarea");
KEYBOARD.classList.add("keyboard");
TITLE.classList.add("title");
DESCRIPTION.classList.add("description");

BODY.appendChild(WRAPPER);
WRAPPER.appendChild(TITLE);
WRAPPER.appendChild(TEXTAREA);
WRAPPER.appendChild(KEYBOARD);
WRAPPER.appendChild(DESCRIPTION);


TEXTAREA.setAttribute("id", "area");
TITLE.innerText = "Виртуальная клавиатура";
DESCRIPTION.innerText = "Клавиатура MAC OS, переключение языка Ctrl & Cmd";


TEXTAREA.focus();

addRow(KEYBOARD);
addKey();
mouseListener(TEXTAREA,text); 
keyHandler(TEXTAREA,text); 


// back-space

let backSpace = document.querySelector('#row0key13')
backSpace.setAttribute("type", "backspace");
backSpace.setAttribute("name", "Backspace");
backSpace.classList.add('Backspace')
backSpace.innerText = "Back Space";

let tab = document.querySelector('#row1key0')
 tab.setAttribute("type", "tab");
 tab.setAttribute("name", "Tab");
 tab.classList.add('Tab')
 tab.innerText = "Tab";

 let slash = document.querySelector("#row1key13");
 slash.setAttribute("type", "slash");
 slash.innerText = '⃥';

 let capsLock = document.querySelector('#row2key0')
 capsLock.setAttribute("type", "capslock");
 capsLock.setAttribute("name", "CapsLock");
 capsLock.classList.add('CapsLock')
 capsLock.innerText = "Caps Lock";

//  enter add

 row = document.querySelector("#row2");
 key = document.querySelector("#row2key13");
 row.removeChild(key);
 let enter = document.querySelector('#row2key12')
 enter.setAttribute("type", "enter");
 enter.setAttribute("name", "Enter");
 enter.classList.add('Enter');
 enter.innerText = "Enter";

//  left/right shift add

 row = document.querySelector("#row3");
 key = document.querySelector("#row3key13");

 let leftShift = document.querySelector('#row3key0')
 leftShift.setAttribute("type", "leftshift");
 leftShift.setAttribute("name", "ShiftLeft");
 leftShift.classList.add('ShiftLeft');
 leftShift.innerText = "Shift";

 let rightShift = document.querySelector('#row3key13')
 rightShift.setAttribute("type", "rightshift");
 rightShift.setAttribute("name", "ShiftRight");
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
 space.setAttribute("name", "Space");
 space.classList.add('Space');
 space.innerText = "";

  //fn add

  let fn = document.querySelector('#row4key0')
  fn.setAttribute("type", "fn");
  fn.classList.add('Fn');
  fn.innerText = "Fn";
  fn.setAttribute("name", "Fn");

 
 //left ctrl add

 let leftCtrl = document.querySelector('#row4key1')
 leftCtrl.setAttribute("type", "leftctrl");
 leftCtrl.setAttribute("name", "ControlLeft");

 leftCtrl.classList.add('ControlLeft');
 leftCtrl.innerText = "Ctrl";


  //right/left alt add

 let leftAlt = document.querySelector('#row4key2')
 leftAlt.setAttribute("type", "leftalt");
 leftAlt.setAttribute("name", "AltLeft");

 leftAlt.classList.add('AltLeft');
 leftAlt.innerText = "Alt";

 let righttAlt = document.querySelector('#row4key9')
 righttAlt.setAttribute("type", "rightalt");
 righttAlt.setAttribute("name", "AltRight");

 righttAlt.classList.add('AltRight');
 righttAlt.innerText = "Alt";


//  arrow up/down/left/right add

let arrowUp = document.querySelector('#row3key12')
arrowUp.setAttribute("type", "arrowup");
arrowUp.setAttribute("name", "ArrowUp");
arrowUp.classList.add('ArrowUp');
arrowUp.innerText = "▲";

let arrowDown = document.querySelector('#row4key7')
arrowDown.setAttribute("type", "arrowdown");
arrowDown.setAttribute("name", "ArrowDown");
arrowDown.classList.add('ArrowDown');
arrowDown.innerText = "▼";

let arrowLeft = document.querySelector('#row4key6')
arrowLeft.setAttribute("type", "arrowleft");
arrowLeft.setAttribute("name", "ArrowLeft");
arrowLeft.classList.add('ArrowLeft');
arrowLeft.innerText = "◀";

let arrowRight = document.querySelector('#row4key8')
arrowRight.setAttribute("type", "arrowright");
arrowRight.setAttribute("name", "ArrowRight");
arrowRight.classList.add('ArrowRight');
arrowRight.innerText = "▶";


// right/left cdm add
 let cmdRight = document.querySelector('#row4key5')
 cmdRight.setAttribute("type", "cmdRight");
 cmdRight.setAttribute("name", "MetaRight");

 cmdRight.classList.add('Cmd');
 cmdRight.innerText = "Cmd";

 let cmdLeft = document.querySelector('#row4key3')
 cmdLeft.setAttribute("type", "cmdLeft");
 cmdLeft.setAttribute("name", "MetaLeft");
 cmdLeft.classList.add('Cmd');
 cmdLeft.innerText = "Cmd";

 
 
 cmdLeft.classList.add('Cmd');
 cmdLeft.innerText = "Cmd";

 

letterCreate (engKeyboard, enLanguage);

let backquote = document.querySelector('#row0key0')
backquote.setAttribute("type", "number");
backquote.setAttribute("name", "Backquote");

let bracketLeft = document.querySelector('#row1key11')
bracketLeft.setAttribute("type", "letter");
bracketLeft.setAttribute("name", "BracketLeft");

let bracketRight = document.querySelector('#row1key12')
bracketRight.setAttribute("type", "letter");
bracketRight.setAttribute("name", "BracketRight");

let semicolon = document.querySelector('#row2key10')
semicolon.setAttribute("type", "letter");
semicolon.setAttribute("name", "Semicolon");

let quote = document.querySelector('#row2key11')
quote.setAttribute("type", "letter");
quote.setAttribute("name", "Quote");

slash.setAttribute("name", "Backslash");

let intlBackslash = document.querySelector('#row3key1')
intlBackslash.setAttribute("type", "letter");
intlBackslash.setAttribute("name", "IntlBackslash");

let comma = document.querySelector('#row3key9')
comma.setAttribute("type", "letter");
comma.setAttribute("name", "Comma");

let period = document.querySelector('#row3key10')
period.setAttribute("type", "letter");
period.setAttribute("name", "Period");

let sl = document.querySelector('#row3key11')
sl.setAttribute("type", "letter");
sl.setAttribute("name", "Slash");
 
 
document.addEventListener('keydown', function(event) {

  if ((event.ctrlKey) && (event.metaKey)) {
if (enLanguage==true) {
  enLanguage=false;
  slash.innerText = 'ё';

  letterCreate (rusKeyboard, enLanguage);

} else {
  enLanguage=true;
  slash.innerText = '⃥';
  letterCreate (engKeyboard, enLanguage);
}

backquote.setAttribute("name", "Backquote");
bracketLeft.setAttribute("name", "BracketLeft");
bracketRight.setAttribute("name", "BracketRight");
semicolon.setAttribute("name", "Semicolon");
quote.setAttribute("name", "Quote");
intlBackslash.setAttribute("name", "IntlBackslash");
comma.setAttribute("name", "Comma");
period.setAttribute("name", "Period");
sl.setAttribute("name", "Slash");
slash.setAttribute("name", "Backslash");



  }
});

  