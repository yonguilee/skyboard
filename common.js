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

function init() {
    leaveBtn.addEventListener('click', toggleWriteForm);
    writingForm.addEventListener('submit', toggleWriteForm);
    closeBtn.addEventListener('click', toggleWriteForm);
}

init();