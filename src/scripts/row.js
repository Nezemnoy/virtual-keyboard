export function addRow (KEYBOARD){
    let row;

    for (let i=0; i<5; i++)
    {
        console.log(i)
        row = document.createElement("div");
        row.classList.add("row");
        row.setAttribute("id", `row${i}`);
        KEYBOARD.appendChild(row);
         
    }
    };

