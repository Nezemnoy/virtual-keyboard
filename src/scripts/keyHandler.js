import { mouseListener } from "./mouseListener";

export function keyHandler (TEXTAREA, text) {

    TEXTAREA.onkeydown = textHandler 
    TEXTAREA.onkeyup = capslockHandler;

    
   function capslockHandler(e){ 


    if (e.key=='CapsLock') {
        toLowerCaseFun();  
     }

    }
    function textHandler(e){
    
     e.preventDefault();  
     
    // TEXTAREA.scrollTop = 1e6;
    // let text;

    if (e.key=='CapsLock') {
        toUpperCaseFun();     
     }

    // if (!e.getModifierState('CapsLock')){toLowerCaseFun();}

    if ((!e.altKey)&&(!e.shiftKey)&&(!e.ctrlKey)&&(!e.metaKey)&&(e.key!='Tab')&&(e.key!='CapsLock')&&(e.key!='Backspace')&&(e.key!='Enter')&&(e.key!='ArrowUp')&&(e.key!='ArrowDown')&&(e.key!='ArrowLeft')&&(e.key!='ArrowRight'))
   
{ 
    text = e.key;
    console.log(e.code)
    TEXTAREA.value += text;  
}

   else if (e.key=='Tab'){
    
        text = '\t';
        TEXTAREA.value += text;  

    }
    else if (e.key=='Enter'){
    
        text = '\n';
        TEXTAREA.value += text;  

    }

    else if (e.key=='Backspace'){
    
        text = TEXTAREA.value;
        text =  text.slice(0,-1);
        TEXTAREA.value = text;

        }

    else if (e.key=='ArrowUp'){
    text = '▲';
    TEXTAREA.value += text;  
    }

    else if (e.key=='ArrowDown'){
    text = '▼';
    TEXTAREA.value += text;  
        }
    else if (e.key=='ArrowLeft'){
    text = '◀';
    TEXTAREA.value += text;  
               
    }
    else if (e.key=='ArrowRight'){
        text = '▶';
        TEXTAREA.value += text;  
            }
        }
    function toUpperCaseFun (){
        let attribute; 
        let key; 
        
        key = document.querySelectorAll('.key');
        
        let i = 0;
        
        key.forEach(element => {
            attribute = element.getAttribute("type");
                 if (attribute==='letter'){
                   element.innerText = element.textContent.toUpperCase();
                    i++;
                   }     
        });
    }
    function toLowerCaseFun (){
        
                
                    let attribute; 
                    let key; 
                    
                    key = document.querySelectorAll('.key');
                    
                    let i = 0;
                    
                    key.forEach(element => {
                        attribute = element.getAttribute("type");
                             if (attribute==='letter'){
                               element.innerText = element.textContent.toLowerCase();
                                i++;
                               }     
                    });
    }
}



