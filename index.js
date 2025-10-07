const body = document.querySelector("body");
body.style.cssText = "margin: 0; padding: 0;"
const container = document.querySelector(".container");
container.style.cssText = "display:flex; flex-direction: column; flex-wrap: wrap; height: 100vh; border: solid;"


for(let i = 0; i < 16; i++){
    const div_row = document.createElement("div");
    div_row.classList.add("row");
    div_row.style.cssText = "display: flex; flex: 1; justify-content: space-evenly; border: solid yellow;"
    for(let j = 0; j < 16; j++){
        const div_col = document.createElement("div");
        div_col.classList.add("col");
        div_col.style.cssText = "border: solid purple; flex: 1;"
        div_row.appendChild(div_col);
    }
    container.appendChild(div_row);
}