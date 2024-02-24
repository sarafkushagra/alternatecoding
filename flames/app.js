let boy = document.querySelector(`#boy`);
let girl = document.querySelector('#girl');
let buttons = document.querySelector(`button`);
let d1 = document.querySelector('.que');
let d2 = document.querySelector('.ans');
let outcome = document.querySelector('.outcome');
let photo = document.querySelector('.photoic');
let trya = document.querySelector('.tryagain');

function answer(num) {
    let game = "flames";
    let lis = game.split('');
    let index = num - 1;
    while (lis.length > 1) {
        lis.splice(index, 1);
        index = (index + num - 1) % lis.length;
    }
    return lis[0];
}

buttons.addEventListener("click", () => {
    d1.style.display = "none"
    d2.style.display = "block"
    let bn = boy.value;
    let gn = girl.value;
    console.log(bn)
    console.log(gn)
    let bl = bn.split('');
    let gl = gn.split('');
    for (let i = 0; i < bl.length; i++) {
        for (let j = 0; j < gl.length; j++) {
            if (bl[i] == gl[j]) {
                bl.splice(i, 1);
                gl.splice(j, 1)
                continue;
            }
        }
    }
    let ss = bl.concat(gl)
    console.log(ss)
    let fl = ss.length;
    let fun = answer(fl);
    let win = "";
    // console.log(fun)
    switch (fun) {
        case 'f':
            win = "are Friends"
            photo.src = "friend.gif";
            break;
        case 'l':
            win = "are Lovers"
            photo.src = "love.gif";
            break;
        case 'a':
            win = "will marry"
            photo.src = "marriage.gif"
            break;
        case 'm':
            win = "are made for each other"
            photo.src = "madeforeach.gif"
            break;
        case 'e':
            win = "are enemies"
            photo.src = "enemy.gif"
            break;
        case 's':
            win = "are brothers and sisters"
            photo.src = "sister.gif"
            break;
    }
    outcome.innerHTML = `${bn.toUpperCase()} AND ${gn.toUpperCase()}  ${win.toUpperCase()}`

})

trya.addEventListener("click", () => {
    d1.style.display = "block";
    d2.style.display = "none";
})
