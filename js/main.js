const ball = document.querySelector('.ball');
const input = document.querySelector('input');
const answer = document.querySelector('.generated-answer');
const eroor = document.querySelector('.error');

const answersArray = [
	'raczej nie',
	'nie chcesz znać odpowiedzi',
	'zapytaj starej',
	'Zdecydowanie tak',
	'50/50',
	'Jak by sie nie dało to pan bóg by inaczej świat stworzył',
	'może',
	'lepiej nie',
	'nadzieja umiera ostatnia',
	'szansa niewielka, ale zawsze jest',
];

ball.addEventListener('click', () => {
	ball.classList.remove('ball-shake');
	if (input.value === '') {
		eroor.textContent = 'podaj pytanie';
	} else if (input.value.at(-1) !== '?') {
		eroor.textContent = 'pytanie musi być zakończone znakiem zapytania';
	} else {
		ball.classList.add('ball-shake');
		eroor.textContent = '';
		setTimeout(() => {
			x = Math.floor(Math.random() * answersArray.length);
			answer.textContent = answersArray[x];
			ball.classList.remove('ball-shake');
		}, 2000);
	}
	input.value = '';
});
