const emailMenu = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('#menudesktop1')
function emailMenuF(event) {

    console.log()
    if(menuDesktop.classList.contains('hidden')){
        menuDesktop.classList.remove('hidden')
    } else {
        menuDesktop.classList.toggle('hidden')
    }

}

emailMenu.addEventListener('click',emailMenuF);