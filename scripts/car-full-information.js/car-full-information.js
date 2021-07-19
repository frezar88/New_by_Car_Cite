class CarFullInformation {
    featuresCarsBlockContent = document.querySelector('.features-cars-block-content')
    featuresCarsBlockList = document.querySelector('.features-cars-block__list')
    allUlInFeaturesCarsBlockContent = document.querySelectorAll('.features-cars-block-content__item ul')
    btnReserve = document.querySelector('.btn-reserve');
    shadowBlock = document.querySelector('.shadow-block');
    callbackForm = document.querySelector('.callback-form');

    constructor() {
        this.UiCarFullInformation()
        this.callBackFormEvents()

    }

    UiCarFullInformation() {
        this.swiperSlider()
        this.accordAction()
        this.selectFeaturesCarsBlockList()
        this.followForSizeWindow()
    }

    callBackFormEvents() {
        this.showCallBackForm()
        this.closeCallBackForm()
    }

    swiperSlider() {
        new Swiper(".swiper-container", {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                //булеты
                clickable: true,
                //динамический размер булетов
                dynamicBullets: false,
            },
            slidesPerView: 1,
            slidesPerGroup: 1,
            //Бесконечный слайдер
            loop: true,
            speed: 800,
            autoHeight: true,

            watchOverflow: true,
        })

    }

    accordAction() {
        this.featuresCarsBlockContent.addEventListener('click', (e) => {

            if (e.target.className === 'features-cars-block-content__accord' || e.target.className === 'features-cars-block-content__accord active') {
                e.target.classList.toggle('active')
                let content = e.target.nextSibling.nextSibling

                if (content.style.maxHeight && e.target.className === 'features-cars-block-content__accord') {
                    content.style.maxHeight = null;

                } else {
                    content.style.maxHeight = 900 + 'px';

                }
                console.log()
            }
        })
    }

    selectFeaturesCarsBlockList() {
        this.featuresCarsBlockList.addEventListener('click', (e) => {
            let allTitle = document.querySelectorAll('.features-cars-block__list ul li')
            allTitle.forEach(el => {
                let classNameTarget = e.target.className
                if (el.className === 'active' && el.className !== classNameTarget) {
                    el.classList.remove('active')
                }
            })
           e.target.classList.add('active')
            this.showCurrentContentForFeaturesCarsBlockList(e.target)
        })
    }

    showCurrentContentForFeaturesCarsBlockList(targetBlock){
        let targetDataName = targetBlock.attributes['data-name'].value
        this.allUlInFeaturesCarsBlockContent.forEach(el=>{
            el.style.display = 'none'
        })
        let currentBlock = document.querySelector(`.features-cars-block-content__item ul[data-name="${targetDataName}"]`)
        currentBlock.style.display = 'block'
    }

    followForSizeWindow(){
        window.addEventListener("resize", ()=>{
            if (document.documentElement.clientWidth <= 879){
                this.allUlInFeaturesCarsBlockContent.forEach(el=>{
                    el.style.display = 'block'
                })
            }else{
                this.allUlInFeaturesCarsBlockContent.forEach(el=>{
                    el.style.display = 'none'
                })
                let activeFeaturesCarsBlockListItem = document.querySelector('.features-cars-block__list ul li.active')
                let dataValue = activeFeaturesCarsBlockListItem.attributes['data-name'].value
                if (activeFeaturesCarsBlockListItem){
                    document.querySelector(`.features-cars-block-content .features-cars-block-content__item ul[data-name="${dataValue}"]`).style.display = 'block'
                }

            }
        })
    }

    

    showCallBackForm() {
        this.btnReserve.addEventListener('click', () => {
            this.shadowBlock.style.display = 'block'
            this.callbackForm.style.display = 'block'
        })
    }
    closeCallBackForm() {
        this.shadowBlock.addEventListener('click', () => {
            this.shadowBlock.style.display = 'none'
            this.callbackForm.style.display = 'none'
        })
    }
}

new CarFullInformation()





