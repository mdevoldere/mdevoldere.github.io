const labTheme = {
    toggleTheme(elem, cssClass) {
        if(document.getElementById(elem)) {
            if(localStorage.getItem(elem)) {
                document.body.classList.toggle(localStorage.getItem(elem));
            }
        
            document.getElementById(elem).addEventListener('click', () => {
                document.body.classList.toggle(cssClass);
                localStorage.setItem(elem, document.body.classList.contains(cssClass) ? cssClass : '');
            });
        }
    },

    toggleActive(elem, toggler) {
        if(document.getElementById(elem) && document.getElementById(toggler)) {
            document.getElementById(toggler).addEventListener('click', () => {
                document.getElementById(elem).classList.toggle('active');
            });
        }
    }
};

labTheme.toggleTheme('theme', 'alt');
labTheme.toggleTheme('full', 'full');
labTheme.toggleTheme('dys', 'dys');

const menuTop = document.querySelector("#top");
const menuToggle = document.querySelector("#menuToggle");

menuToggle.addEventListener("click", function () {
    menuTop.classList.toggle('active');
});

window.addEventListener('scroll', (e) => {
    menuTop.classList.remove('active');
});