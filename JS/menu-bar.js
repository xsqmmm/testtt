var sideMenu = document.getElementById('side-menu');
function openMenu() {
    sideMenu.classList.remove('left-[-250px]');
    sideMenu.classList.add('left-0');
}

function closeMenu() {
    sideMenu.classList.remove('left-0');
    sideMenu.classList.add('left-[-250px]');
}
function submitForm(event) {
    event.preventDefault();
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (firstName && email && message) {
        document.getElementById("firstName").value = ''
        document.getElementById("lastName").value = ''
        document.getElementById("email").value = ''
        document.getElementById("message").value = ''
        document.getElementById("subm-txt").classList.toggle('hidden');
        var time1 = 2000;
        setTimeout(function () {
            document.getElementById('subm-txt').classList.toggle('hidden')
        }, time1);
    }
    else {
        document.getElementById("subm-txt").classList.add('hidden');
    }
}
