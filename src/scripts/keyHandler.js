export function keyHandler (TEXTAREA, text) {

    let d;

    TEXTAREA.addEventListener('keydown', function(event) {
        console.log(event.code);
        d = document.querySelector(`[name=${event.code}]`)
        d.classList.add("active");
       
    }  )
  
    TEXTAREA.addEventListener('keyup', function(event) {
      d = document.querySelector(`[name=${event.code}]`)
      d.classList.remove("active");
   
  }  )

    TEXTAREA.onkeydown = textHandler;
    TEXTAREA.onkeyup = capslockHandler;
    let l;

   function capslockHandler(e){ 

    if (e.key=='CapsLock') {
        toLowerCaseFun();  
     }

    }
    function textHandler(e){
    
     e.preventDefault();  
     

    if (e.key=='CapsLock') {
        toUpperCaseFun();     
     }

    if ((!e.altKey)&&(!e.shiftKey)&&(!e.ctrlKey)&&(!e.metaKey)&&(e.key!='Tab')&&(e.key!='CapsLock')&&(e.key!='Backspace')&&(e.key!='Enter')&&(e.key!='ArrowUp')&&(e.key!='ArrowDown')&&(e.key!='ArrowLeft')&&(e.key!='ArrowRight')&&(e.key!='Space'))
   
{ 
  let s = document.querySelector(`[name=${e.code}]`)
  
  if ((s.getAttribute("type")=="slash")||(s.getAttribute("type")=="letter")||(s.getAttribute("type")=="number"))
    {text = s.innerText;}

    else {text = e.key} 

    console.log(e.code);
 
    TEXTAREA.value += text; 
    
    TEXTAREA.onkeydown = '';
    TEXTAREA.onkeyup ='';
}

   else if (e.key=='Tab'){
    
        text = '\t';
        TEXTAREA.value += text;  

    }

    else if (e.key=='Space'){
    
        text = ' ';
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
