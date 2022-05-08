export function mouseListener (TEXTAREA) {
    
    let text ='';
    document.querySelectorAll('.key').forEach(key => {
   
        key.addEventListener('click', ()=> {
            
        text = text+`${key.textContent}`;
        TEXTAREA.innerText = text;

    });
});
}
