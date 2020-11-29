window.addEventListener('load', function () {
	let calcWindow = document.querySelector('.calc__window');
	let btns = document.querySelectorAll('.calc__btn');
	let error = document.querySelector('.error');

	btns.forEach(el => el.addEventListener('click', (e) => btnActions(e.target.innerHTML)));
	calcWindow.addEventListener('keydown', btnActive);
	calcWindow.addEventListener('touchstart', btnActive);
	calcWindow.addEventListener('input', function () {
		calcWindow.value = calcWindow.value.replace(/[^\+\-\/\*\.\(\)\d]/g, '');
		error.innerHTML = '';
	});
	calcWindow.addEventListener('focusin', () => error.innerHTML = '');

	function btnActions(btn) {
		error.innerHTML = '';
		if (btn === 'C') {
			calcWindow.value = '';
		} else if (btn === '=') {
			try {
				let res = eval(calcWindow.value);
				if (res == 'Infinity' || res == '-Infinity') {
					error.innerHTML = 'Деление на ноль запрещено, измените запись';
				} else if (res === undefined) {
					calcWindow.value = '';
				}
				else {
					calcWindow.value = res;
				}
			} catch (err) {
				error.innerHTML = 'Некорректный ввод!!! Измените запись';
			}
		} else if (btn === 'CE') {
			calcWindow.value = calcWindow.value.slice(0, -1);
			if (calcWindow.value == '') calcWindow.value = '';
		} else {
			calcWindow.value += btn;
		}
	}

	function btnActive(e) {
		let activeKey = document.querySelector(`.calc__btn[data-role='${e.key}']`);
		if (activeKey) {
			activeKey.animate([
				{ background: '#a0ddff', color: '#624cab' },
				{ background: '#7189ff', color: '#c1cefe' }
			], 300);
		}
		if (e.key === 'Enter') btnActions('=');
	}
});