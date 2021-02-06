(function () {
    const burger = document.querySelector('.menu-burger__header');
    const navbar = document.querySelector('.header__nav')
    
    burger.addEventListener('click', () => {
        navbar.classList.toggle('navbar');
    });
    
    const anchors = document.querySelectorAll('a[href*="#"]');
    
    for (let i = 0; i < anchors.length; i++) {
        anchors[i].addEventListener('click', function (e) {
            e.preventDefault();
    
            const blockId = anchors[i].getAttribute('href').substr(1);
            anchors.forEach(a => {
                if(a.classList.contains('active')) {
                    a.classList.remove('active');
                }
            })
            anchors[i].classList.add('active');
            navbar.classList.toggle('navbar');
            document.getElementById(blockId).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
})();