const emailCheck = () => {
	const emailInput = document.querySelector('.email');
	const message = document.querySelector('.message');
	const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (emailInput !== '' && emailInput.value.match(emailRegex)) {
		message.innerText = 'done! go and check your email';
		message.style.display = 'block';
		message.classList.remove('error-message');
		message.classList.add('success-message');
	} else {
		message.innerText = 'check your email please';
		message.style.display = 'block';
		message.classList.add('error-message');
		message.classList.remove('success-message');
	}
};
// listen for click event
document.querySelector('.btn-sub').addEventListener('click', emailCheck);
