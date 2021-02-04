 export function toggleAnswer(buttons){
    
    button.addEventListener('click', () => {
        const answer = button.parentNode.querySelector('.card__answer');
        button.classList.toggle('hidden');
        button.innerText = answer.classList.contains('hidden') ? 'SHOW' : 'HIDE';
        button.innerText += ' ANSWER';
    })

}

