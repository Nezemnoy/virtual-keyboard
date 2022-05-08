export function keyHandler (TEXTAREA) {

    TEXTAREA.onkeydown = handler;

    function handler(e){
    TEXTAREA.scrollTop = 1e6;
    let text = e.key
    TEXTAREA.value += text;  
}
}