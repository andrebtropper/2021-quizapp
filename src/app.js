const buttons = document.querySelectorAll('.card__button');

buttons.forEach(toggleAnswer)

button.addEventListener('click', () => {
    const answer = button.parentNode.querySelector('.card__answer');
    button.classList.toggle('hidden');
    button.innerText = answer.classList.contains('hidden') ? 'SHOW' : 'HIDE';
    button.innerText += ' ANSWER';
})



const bookmarks = document.querySelectorAll('.card__headline');

bookmarks.forEach((div) =>{
 div.addEventListener('click', () => {
    const bookmarkIcons = div.querySelectorAll('.image__bookmark');
    bookmarkIcons[0].classList.toggle('bookmark__hidden');
    console.log(bookmarkIcons);
    bookmarkIcons[1].classList.toggle('bookmark__hidden');
    
})
})