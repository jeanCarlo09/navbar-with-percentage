

const menuItems = document.querySelectorAll('a.menu-navbar-item');


for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', ({ currentTarget: item }) => {
        let active = document.querySelector('.menu-navbar .active');
        (active) && active.classList.remove('active');
        item.classList.add('active');
    }, false);
}

