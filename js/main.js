const ball = document.querySelector('.ball')
const input = document.querySelector('input')
const answer = document.querySelector('.answer')

ball.addEventListener('click', () => {
    if (input.value !== '' && input.value.at(-1) === '?'){
    answer.textContent = 'dfsa'}
});
// console.log(input.value.at(-1));