export function addKey() {

    let row; 
    let key;
    
for (let j = 0; j<5; j++)

    {
        row = document.querySelector(`#row${j}`);

        for (let i = 0; i<14; i++){
            key = document.createElement("button");
            key.classList.add("key");
            key.setAttribute("id", `row${j}key${i}`);
            key.setAttribute("type", "letter");
            row.appendChild(key) 
            }   
    }
}