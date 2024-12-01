const display = document.getElementById("displayNum");

function randonNumber(){
    const randomNum = Math.round(Math.random() * 5 + 1);
    display.innerHTML = randomNum;
    console.log((randomNum));
}