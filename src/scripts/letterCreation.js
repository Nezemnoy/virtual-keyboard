export  function letterCreate (engKeyboard) {

let attribute; 
let key; 

key = document.querySelectorAll('.key');

let i = 0;

key.forEach(element => {
    attribute = element.getAttribute("type");
         if ((attribute==='letter')||(attribute==='number')){
            element.innerText = engKeyboard[i];
            i++;
           }     
});
}