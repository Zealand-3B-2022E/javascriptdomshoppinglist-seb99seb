//Write your Javascript code here
console.log("Shoppinglist")

document.getElementById("additem").addEventListener("click",AddUnhealthyItem)

let elementInput = document.getElementById('newGoods')

function AddUnhealthyItem(e){
    let inputText = (elementInput).value
    console.log(inputText)
    let listUnhealthy = document.getElementById("listUnhealthy")
    let newLi = document.createElement("li")
    let newText = document.createTextNode(inputText)
    newLi.appendChild(newText)
    newLi.setAttribute("class", "unhealthy")

    listUnhealthy.appendChild(newLi)
}