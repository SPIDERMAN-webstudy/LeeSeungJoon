const clock = document.querySelector("#clock");

function clocking(){
    const date = new Date();
    const hour = String(date.getHours()).padStart(2,"0");
    const minute = String(date.getMinutes()).padStart(2,"0");
    const second = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hour}:${minute}:${second}`;
}
clocking();
setInterval(clocking, 500);

