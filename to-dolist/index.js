const data = document.getElementById("input");
const item = document.querySelector("#items");
const btn = document.getElementById("btn");

btn.addEventListener("click", add)
function add() {
    const inputValue = data.value;
    let li = document.createElement("li");
    li.textContent = inputValue;
    item.appendChild(li);


    let bt = document.createElement("button");
    bt.innerText = "X";
    bt.style.color = "red";
    li.append(bt);
    bt.addEventListener("click", () => {
        item.removeChild(li);
    });
}



