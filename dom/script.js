const buton = document.createElement("button")
buton.classList.add("buton")
buton.textContent = "Click Me"
console.log(buton);
document.body.append(buton)

const modal = document.createElement("div")
modal.classList.add("modal")
const h2 = document.createElement("h2")
h2.classList.add("h2")
h2.textContent ="Imanin modasi"
modal.append(h2)
const p = document.createElement("p")
p.classList.add("p")
p.textContent ="imanin modasi deyir ki...."
modal.append(p)
document.body.append(modal)
const btn2 = document.createElement("button")
const btn3 = document.createElement("button")
modal.append(btn2)
btn2.classList.add("btn2")
modal.append(btn3)
btn3.classList.add("btn3")
btn2.textContent ="Close"
btn3.textContent = "Save changes"
const span = document.createElement("span")
span.classList.add("span")
span.textContent ="x"
modal.append(span)
buton.addEventListener("click",function () {
    modal.style.opacity ="1"
    document.body.style.backgroundColor = "#C5C5C5"

    
})
btn2.addEventListener("click", function () {
    modal.style.opacity ="0"
    document.body.style.backgroundColor = "white"
    
})
