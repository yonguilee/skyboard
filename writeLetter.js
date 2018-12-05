const letterForm = document.querySelector(".write_letter");
const content = document.querySelector(".content textarea");
const ps = document.querySelector(".ps input");
const letterList = document.querySelector(".letters");

const LETTERS_LS = 'letters';
let letters = [];



function toggleWriteForm() {
    if (writingForm.classList.contains('hide')) {
        writingForm.classList.remove('hide');
        writingForm.classList.add('showing');
    } else {
        writingForm.classList.remove('showing');
        writingForm.classList.add('hide');
    }
}

function getDate() {
    const date = new Date();
    return writeDate = Date.now();
}

function deleteToDo() {
    console.log(event);
    console.dir(event.target.parentNode.parentNode);
    const btn = event.target;
    const li = btn.parentNode.parentNode;
    letterList.removeChild(li);
    const cleanLetters = letters.filter(function(letter) {
        console.log(letter.id, li.id);
        return letter.id != parseInt(li.id);
    });
    console.log(cleanLetters);
    letters = cleanLetters;
    saveLetter();
}

function saveLetter() {
    localStorage.setItem(LETTERS_LS, JSON.stringify(letters));
}

function showLetter(a, b) {
    getDate();
    //creating elements
    const li = document.createElement("li");
    const delBtn = document.createElement("div");
    const dateSpan = document.createElement("span");
    const p = document.createElement("p"); //for content
    const span = document.createElement("span"); //for ps

    const newId = letters.length + 1;

    delBtn.innerHTML = `<i class="fas fa-times"></i>`;
    delBtn.addEventListener("click", deleteToDo);

    dateSpan.innerText = writeDate;
    p.innerText = a;
    span.innerText = 'ps.' + b;

    li.appendChild(dateSpan);
    li.appendChild(delBtn);
    li.appendChild(p);
    li.appendChild(span);


    li.id = newId;

    letterList.appendChild(li);

    const letterObj = {
        content: a,
        ps: b,
        id: newId,
        date: writeDate
    }

    letters.push(letterObj);
    saveLetter();

}

function handleSubmit(event) {
    event.preventDefault();
    const contetValue = content.value;
    const psValue = ps.value;
    console.log('content:' + contetValue, 'ps:' + psValue);
    showLetter(contetValue, psValue);
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
            showLetter(letter.content, letter.ps);
        });
    }
}

function init() {
    loadLetter();
    letterForm.addEventListener('submit', handleSubmit);

}

init();