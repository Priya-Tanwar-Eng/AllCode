let btn = document.createElement("button");
btn.innerText = "click me";
btn.style.backgroundColor = "red";
btn.style.color = "white";
document.querySelector("body").prepend(btn);

//q2
let floor = document.querySelector("p");
floor.classList.add("newclass","btn")
floor.classList.remove("btn")
