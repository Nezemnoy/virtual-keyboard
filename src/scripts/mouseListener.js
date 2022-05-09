export function mouseListener (TEXTAREA, text) {
   
   
    document.querySelectorAll('.key').forEach(key => {
   
        key.addEventListener('click', (e) => { 
        TEXTAREA.focus(); 

      let name = key.getAttribute('name');
        
if  ((name!="Tab")&&(name!="CapsLock")&&(name!="ShiftLeft")&&(name!="Fn")&&(name!="ControlLeft")&&(name!="AltLeft")&&(name!="MetaLeft")&&(name!='Enter')&&(name!='ArrowUp')&&(name!='ArrowDown')&&(name!='ArrowLeft')&&(name!='ArrowRight')&&(name!='Space')&&(name!='MetaRight')&&(name!='AltRight')&&(name!='ShiftRight')&&(name!='Backspace'))
        {
        text = TEXTAREA.value +`${key.textContent}`;
        TEXTAREA.value =  text;
        TEXTAREA.selectionStart = TEXTAREA.selectionEnd = TEXTAREA.value.length;
        }

        else if (name=="Tab"){

            console.log(name)      

            text = '\t';
            TEXTAREA.value += text;  
    
        }
    
        else if (name=='Space'){

            text = ' ';
            TEXTAREA.value += text;  
    
        }
        else if (name=='Enter'){

            text = '\n';
            TEXTAREA.value += text;  
    
        }
    
        else if (name=='Backspace'){

            text = TEXTAREA.value;
            text =  text.slice(0,-1);
            TEXTAREA.value = text;
    
            }
    
        else if (name=='ArrowUp'){

        text = '▲';
        TEXTAREA.value += text;  
        }
    
        else if (name=='ArrowDown'){

        text = '▼';
        TEXTAREA.value += text;  
            }
        else if (name=='ArrowLeft'){

        text = '◀';
        TEXTAREA.value += text;  
                   
        }
        else if (name =='ArrowRight'){
            text = '▶';
        TEXTAREA.value += text;  
                }
            
    

    });


    key.addEventListener('mousedown', (e) => {  
        
        key.classList.add("active");

    });

    key.addEventListener('pointermove', (e) => {  
        
        key.classList.remove("active");

    });


    key.addEventListener('mouseup', (e) => {  
        
        key.classList.remove("active");

    });
});




}
