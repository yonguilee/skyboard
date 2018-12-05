const askForm = document.querySelector(".ask_sky");
const nameInput = askForm.querySelector("input");
const skyName = document.querySelector("h1");

const USER_LS = "currnetUser";

function saveName(text) { //유저정보 저장하기. 
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = nameInput.value;
    console.log(currentValue);
    showNameInSky(currentValue);
    saveName(currentValue);
}

function showNameInSky(text) {
    askForm.classList.add('hide');
    skyName.innerText = `${text}'s SKY`;
}

function getName() {
    askForm.addEventListener('submit', handleSubmit);
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS); //get currentuser data 
    if (currentUser === null) {
        //user is not defined
        getName();
    } else {
        //user is.. 
        showNameInSky(currentUser);
    }
}

function init() {
    loadName();
}

init();