let output = document.getElementById("output");
let button = document.getElementById("generate");
let generated = false; 

let generate_password = () => {
    generated = true;
    let buffer = "";
    for (let i = 0; i < 16; i++) {
        buffer += String.fromCharCode(Math.round(Math.random() * 64 + 34));
    }

    output.innerHTML = buffer;
}

button.addEventListener("click", generate_password);

output.addEventListener("click", () => {
    if (!generated) return;  
    let text = output.innerHTML;
    navigator.clipboard.writeText(text);
});