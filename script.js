let interactable = document.geElementbyId("interactable");
let Layer_1 = document.geElementbyId("Layer_1");

interactable.addEventListener("click", () => {
    document.getElementById("textbox0").innerText = "success!";
})

Layer_1.addEventListener("click", () => {
    document.getElementById("textbox0").style.backgroundColor=background();
})

function background() {
    const r = 'rgb('+random(255)+','+random(255)+','+random(255)+')';
}