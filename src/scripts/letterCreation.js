export  function letterCreate (keyboard,enLanguage) {
console.log(enLanguage)
let attribute; 
let key; 
let arr =[];

key = document.querySelectorAll('.key');

let i = 0;

key.forEach(element => {
    attribute = element.getAttribute("type");
         if ((attribute==='letter')||(attribute==='number')){
            if(enLanguage===true) {
            element.innerText = keyboard[i];
            if (attribute==='letter')
            {element.setAttribute("name", `Key${element.innerText.toUpperCase()}`);}
            if (attribute==='number')
            {element.setAttribute("name", `Digit${element.innerText}`);}
            i++;
            }
            else{
                element.innerText = keyboard[i];
                i++;}
           }     
});




}