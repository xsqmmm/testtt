
function SignUp() {
    document.getElementById('username').value = ''
    document.getElementById('email').value = ''
    document.getElementById('password').value = ''  
    document.getElementById('mail').style.display = 'block';
    document.getElementById('sign-title').innerText = 'Create an account';
    document.getElementById('login').style.display = 'block';
    document.getElementById('signup').classList.add('hidden');
    document.getElementById('btn-submit').innerText = 'Create Account';
}
function Login() {
    document.getElementById('username').value = ''
    document.getElementById('email').value = ''
    document.getElementById('password').value = '' 
    document.getElementById('mail').style.display = 'none';
    document.getElementById('email').removeAttribute('required')
    document.getElementById('sign-title').innerText = 'Log In';
    document.getElementById('login').style.display = 'none';
    document.getElementById('signup').classList.remove('hidden');
    document.getElementById('btn-submit').innerText = 'Log in';
}
document.getElementById("sign-page").addEventListener("submit", function (event) {
    event.preventDefault();

    window.location.href = "payment.html";
});