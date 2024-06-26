function toggleIcon(iconId) {
    const icon = document.getElementById(iconId);
    if (icon.style.display === "none") {
        icon.style.display = "inline";
        icon.style.fontSize = "30px";
    } 
    else {
        icon.style.display = "none";
        icon.style.fontSize = "";
    }
}
let box=0
let chances=0
let arr = []
a = 0
let sp = []
function lol(icid) {
    chances++
    sp[a] = document.getElementById(icid)
    arr[a] = sp[a].textContent
    console.log(arr)
    if (a != 0) {
        if (arr[0] == arr[1]) {
            box = box+2
            sp[0].outerHTML = "<i style='background-color:white;><i id='icon' class='fa-regular fa-face-smile'></i></i>"
            sp[1].outerHTML = "<i style='background-color:white;><i id='icon' class='fa-regular fa-face-smile'></i></i>"
            a=-1
        }
        else {
            setTimeout(function(){
                sp[0].style.display="none"
                sp[1].style.display="none"
            },700)
            a=-1
        }       
    }
    a++
    let divb = document.querySelector(".game")
    if(box==24)
        {
            divb.innerHTML = "Total chances taken are "+chances
            divb.style.padding ="50px"
            divb.style.margin ="70px"
            divb.style.fontSize ="80px"
        }
}
