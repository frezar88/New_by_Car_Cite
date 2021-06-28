class Credit {
    creditContentIconCarList = document.querySelector('.credit-content__icon-car-list')

    constructor() {
        this.creditUi()
    }

    creditUi() {
        this.creditContentIconCarList.addEventListener('click', (e) => {
            let activeLi = document.querySelectorAll('.credit-content__icon-car-list ul li.active')
            // if (activeLi.length){
            //     activeLi.forEach(el=>{
            //         el.classList.remove('active')
            //     })
            // }
            e.target.parentNode.classList.toggle('active')
        })
    }
}

new Credit()