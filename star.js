const letterForm = document.querySelector(".write_letter");
const content = document.querySelector(".content textarea");
const ps = document.querySelector(".ps input");

const manyLetters = document.querySelector(".manyletters");
const letter = document.querySelector(".oneletter");

// const starGroup = document.querySelector(".star_group");
// const starDate = document.querySelector(".star_date");
// const starPs = document.querySelector(".star_ps");

// const letterShowbox = document.querySelector(".show_box");

// const showDate = document.querySelector(".show_date");
// const showContent = document.querySelector(".show_content");
// const showPs = document.querySelector(".show_ps");

const LETTERS_LS = 'letters';
let letters = [];



/* delete letter*/
function deleteLetter() {
    console.log(event);
    console.dir(event.target.parentNode.parentNode.parentNode);
    const btn = event.target;
    const div = btn.parentNode.parentNode;
    manyLetters.removeChild(div);
    const cleanLetters = letters.filter(function(letter) {
        console.log(letter.id, div.id);
        return letter.id != parseInt(div.id);
    });
    console.log(cleanLetters);
    letters = cleanLetters;
    saveLetter();
}

/* save to the localstorage */
function saveLetter() {
    localStorage.setItem(LETTERS_LS, JSON.stringify(letters));
}

function showLetter(a, b, c) {

    const newId = letters.length + 1;

    const oneletter = `
    <div class="oneletter" id="${newId}">
        <div class="star_group">
            <div class="star"><i class="fas fa-star"></i></div>
            <span class="star_date">${c}</span>
            <span class="star_ps">ps. ${b}</span>
        </div>
        <div class="show_box hide">
            <div class="show_close"><i class="far fa-trash-alt"></i>
            </div>
            <span class="show_date">${c}</span>
            <p class="show_content">${a} </p>
            <span class="show_ps">ps. ${b}</span>
        </div>
    </div>

    `
    manyLetters.innerHTML += oneletter;
    const letterDelete = document.querySelector(".show_close");
    letterDelete.addEventListener("click", deleteLetter);
    const letterObj = {
        content: a,
        ps: b,
        id: newId,
        date: c
    }

    letters.push(letterObj);
    saveLetter();

}

/* get the writing date */
function getDate() {
    const date = new Date();
    return writeDate = Date.now();
}

function handleSubmit(event) {
    event.preventDefault();
    getDate();
    const savedDate = writeDate;
    const contetValue = content.value;
    const psValue = ps.value;
    console.log('content:' + contetValue, 'ps:' + psValue, 'date' + savedDate);
    showLetter(contetValue, psValue, savedDate);
    content.value = "";
    ps.value = "";
}

function loadLetter() {
    const loadLetter = localStorage.getItem(LETTERS_LS);
    if (loadLetter !== null) {
        console.log(loadLetter);
        const parsedLetters = JSON.parse(loadLetter);
        console.log(parsedLetters);
        parsedLetters.forEach(function(letter) {
            console.log(letter.content);
            showLetter(letter.content, letter.ps, letter.date);
        });
    }
}

function init() {
    loadLetter();
    letterForm.addEventListener('submit', handleSubmit);
}

init();