

const buttons = document.querySelectorAll('.card__button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const answer = button.parentNode.querySelector('.card__answer');
        answer.classList.toggle('hidden');

        button.innerText = answer.classList.contains('hidden') ? 'SHOW' : 'HIDE';

        button.innerText += ' ANSWER';
    })
})



const bookmarks = document.querySelectorAll('image__bookmark');

bookmarks.forEach((bookmark) =>{
 button.addEventListener('click'), () => {
    const answer = bookmark.querySelector('click__bookmark');
    answer.classList.toggle('fill__bookmark');
}
})