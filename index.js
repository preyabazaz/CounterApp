let plusCount = 0
function increment(){
    plusCount = plusCount + 1
    document.getElementsByClassName("the-count")[0].textContent = plusCount
}

function save(){
    document.getElementById("the-save").textContent = document.getElementById("the-save").textContent + plusCount + " - "
    document.getElementsByClassName("the-count")[0].textContent = 0
    plusCount = 0
}