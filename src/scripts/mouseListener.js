export function mouseListener (TEXTAREA, text) {
   
   
    document.querySelectorAll('.key').forEach(key => {
   
        key.addEventListener('click', (e) => {  
        

        TEXTAREA.focus(); 
        text = cTEXTAREA.value +`${key.textContent}`;
        TEXTAREA.value =  text;
        // e.defaultPrevented()
        TEXTAREA.selectionStart = TEXTAREA.selectionEnd = TEXTAREA.value.length;
        // console.log(TEXTAREA.value);
        // console.log(`${key.textContent}`);


    });

});
}
