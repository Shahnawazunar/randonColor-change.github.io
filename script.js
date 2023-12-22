const btnChange = document.getElementById("btnChange");
const containerBox = document.getElementById("container");

let randomColor = ()=>{
    return Math.floor(Math.random()*255);
};

let clrChanger = ()=>{
    let randonNumber =`rgb(${ randomColor()},${ randomColor()},${ randomColor()})`;
    containerBox.style.backgroundColor = randonNumber;
    btnChange.style.color = randonNumber;
};
btnChange.addEventListener("click",clrChanger);


