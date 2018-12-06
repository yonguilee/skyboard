/*toggle the writing form  */
const writingFormWrap = document.querySelector(".write_letter_wrap");
const closeBtn = document.querySelector(".write_letter_wrap i");
const leaveBtn = document.querySelector(".top_wrap button");
const writingForm = document.querySelector(".write_letter");

function toggleWriteForm() {
    if (writingFormWrap.classList.contains('hide')) {
        writingFormWrap.classList.remove('hide');
        writingFormWrap.classList.add('showing');
    } else {
        writingFormWrap.classList.remove('showing');
        writingFormWrap.classList.add('hide');
    }
}

/* showing .show_box by clicking the target star */
const star = document.getElementsByClassName("star");

function toggleShowbox() {
    console.log(event);
    const target = event.target.parentNode.parentNode.parentNode.querySelector(".show_box");
    console.log(target);
    if (target.classList.contains('hide')) {
        target.classList.remove('hide');
        target.classList.add('showing');
    } else {
        target.classList.remove('showing');
        target.classList.add('hide');
    }
}

function init() {
    leaveBtn.addEventListener('click', toggleWriteForm);
    writingForm.addEventListener('submit', toggleWriteForm);
    closeBtn.addEventListener('click', toggleWriteForm);
    for (var j = 0; j < star.length; j++) {
        // ' getElementsByClassName 'returns html collection, so if you need to add event Listener to an element, using FOR
        star[j].addEventListener('click', toggleShowbox);
    }
}

init();