// Your code goes here
var login = prompt('enter e-mail', login);

if (login === '') {
	alert('Canceled');
}

if (login.length < 6) {
	alert('I don’t know any emails having name length less than 6 symbols');
}

if (login === 'user@gmail.com' || login === 'admin@gmail.com') {
	var pass = prompt('enter password', pass);
} else {
	alert('I don’t know you');
}

if (pass === '') {
	alert('Canceled');
}

if (login === 'user@gmail.com' && pass !== 'UserPass' || login === 'admin@gmail.com' && pass !== 'AdminPass') {
	alert('Wrong password');
} else {
confirm('Do you want to change your password?');
}

if (confirm === true) {
	var oldPass = prompt('Eneter old password', oldPass);
} else {
	alert('You have failed the change');
}

if (oldPass === pass) {
	var newPass = prompt('Enter new password', newPass);
} else {
	alert('Wrong password');
}
if (newPass.length > 5) {
	var newPass2 = prompt('Enter new password again', newPass2);
} else {
	alert('It’s too short password. Sorry');
}

if (newPass === newPass2) {
	alert('You have successfully changed your password');
} else {
	alert('You wrote the wrong password');
}