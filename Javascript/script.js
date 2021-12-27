const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const CLASS_HIDDEN = "hidden";
const UN = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(CLASS_HIDDEN);
    const username = loginInput.value;
    localStorage.setItem(UN, username);

    paintGreetings(username);
}

function paintGreetings(username){
    greeting.classList.remove(CLASS_HIDDEN);
    greeting.innerText = `Hi, ${username}!`;
}

const savedUsername = localStorage.getItem(UN);

if(savedUsername === null){
    loginForm.classList.remove(CLASS_HIDDEN);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else{
    paintGreetings(savedUsername);
}
