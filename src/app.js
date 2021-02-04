import { toggleAnswer } from './toggle';


const buttons = document.querySelectorAll('.card__button');
buttons.forEach(toggleAnswer)






const bookmarks = document.querySelectorAll('.card__headline');

bookmarks.forEach((div) =>{
 div.addEventListener('click', () => {
    const bookmarkIcons = div.querySelectorAll('.image__bookmark');
    bookmarkIcons[0].classList.toggle('bookmark__hidden');
    console.log(bookmarkIcons);
    bookmarkIcons[1].classList.toggle('bookmark__hidden');
    
})
})