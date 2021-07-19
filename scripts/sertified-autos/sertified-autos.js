class sertifiedAutos{
    certifiedAutosNav = document.querySelector('.certified-autos-nav__title');
    certifiedAutosList = document.querySelector('.certified-autos-nav nav');

    constructor() {
        this.sertifiedAutosUI()
    }
    sertifiedAutosUI() {
        this.certifiedAutosNav.addEventListener('click', () => {
            if (!this.certifiedAutosList.style.maxHeight) {
                this.certifiedAutosList.style.maxHeight = this.certifiedAutosList.scrollHeight + 'px'
                
            } else {
                this.certifiedAutosList.style.maxHeight = null;
            }
        })
    }
}

new sertifiedAutos()