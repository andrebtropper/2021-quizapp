export function toggleAnswer(button){
     
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const answer = button.parentNode.querySelector('.card__answer');
            answer.classList.toggle('hidden');
    
            button.innerText = answer.classList.contains('hidden') ? 'SHOW' : 'HIDE';
    
            button.innerText += ' ANSWER';
        })
    })
}

