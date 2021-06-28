export class CreateResultCarItems {
    carItem
    parentBlock = document.querySelector('.cars-in-stock-result-car-list')

    constructor() {
        this.createCarItem()
        this.carItem.append(this.createImgForCarItem())
        this.carItem.append(this.createCarNameForCarItem())
        this.carItem.append(this.createFeaturesForCarItem())
        this.carItem.append(this.createAdditionalPricesBlockForCarItem())
        this.carItem.append(this.createLocationBlockForCarItem())
      /*   this.carItem.addEventListener('click',(e)=>{
            console.log(e.currentTarget)
        }) */
        this.parentBlock.append(this.carItem)
    }

    createCarItem() {
        return this.carItem = this.createElement('div', {class: ['cars-in-stock-result-car-list__item']})
    }

    createImgForCarItem() {
        return this.createElement('div', {class: ['cars-in-stock-result-car-list__img']},
            [this.createElement('img', {src: '/images/pages/certified-autos/certified-special-offer/car.png'})
            ])
    }

    createCarNameForCarItem() {
        let div = this.createElement('div', { class: ['cars-in-stock-result-car-list__car-name'] },
            [this.createElement('p', {}, ['Renault Clio'])
            ])
        div.addEventListener('click', () => {
            document.location.href = "/page/car-full-information/car-full-information.html";
        })
        return div
    }

    createFeaturesForCarItem() {
        return this.createElement('div', {class: ['cars-in-stock-result-car-list__features']},
            [this.createElement('ul', {}, [
                this.createElement('li', {}, [
                    this.createElement('div', {}, [
                        this.createElement('p', {}, [
                            this.createElement('span', {class: ['generation']}, '4-е поколение'),
                            this.createElement('span', {class: ['circle']}, ''),
                            this.createElement('span', {class: ['year']}, '2018'),
                            this.createElement('br', {}, ''),
                            this.createElement('span', {class: ['car-body']}, 'хэтчбек'),
                            this.createElement('span', {class: ['circle']}, ''),
                            this.createElement('span', {class: ['car-drive']}, '4WD'),
                            this.createElement('span', {class: ['circle']}, ''),
                            this.createElement('span', {class: ['number-of-seats']}, '5 мест'),
                        ])
                    ]),
                    this.createElement('div', {}, [
                        this.createElement('span', {class: ['mileage']}, ['32 500 ', 'км'])
                    ])
                ]),
                this.createElement('li', {}, [
                    this.createElement('div', {class: ['engine-value']}, '1,6 турбо'),
                    this.createElement('span', {class: ['engine-power']}, '150 л.с'),
                    this.createElement('span', {class: ['circle']}, ''),
                    this.createElement('span', {class: ['transmission']}, 'автомат'),
                ]),
                this.createElement('li', {}, [
                    this.createElement('p', {}, [
                        this.createElement('span', {class: ['price-car']}, '28 000'), ' BYN'
                    ])
                ]),
                this.createElement('li', {class: ['about-price']}, [
                    this.createElement('p', {}, 'Подробнее о цене')
                ])
            ])]
        )
    }

    createAdditionalPricesBlockForCarItem() {
        return this.createElement('div', {class: ['cars-in-stock-result-car-list__additional-prices-block']}, [
            this.createElement('div', {class: ['switch-credit']}, [
                this.createElement('label', {class: ['switch']}, [
                    this.createElement('input', {id: 'credit2', type: 'checkbox'}),
                    this.createElement('span', {class: ['slider', 'round']})
                ]),
                this.createElement('label',{for:'credit2'},[
                    this.createElement('div',{},'Цена в кредит'),
                    this.createElement('div',{},[
                        this.createElement('span',{},'31 501'),'BYN/мес'
                    ]),
                ])
            ]),
            this.createElement('div',{class:['switch-appraise']},[
                this.createElement('label',{class:['switch']},[
                    this.createElement('input',{id:'appraise2',type:'checkbox'}),
                    this.createElement('span',{class:['slider', 'round']}),
                ]),
                this.createElement('label',{for:'appraise2'},[
                    this.createElement('div',{},'Цена с учётом Trade-in'),
                    this.createElement('div',{},'Оцените свой автомобиль'),
                ])
            ])
        ])
    }

    createLocationBlockForCarItem(){
        return this.createElement('div',{class:['cars-in-stock-result-car-list__location']},[
            this.createElement('p',{},[
                this.createElement('a',{href:'#'},'Минск, ул. Каменногорская')
            ])
        ])
    }

    createElement(typeElem, divAttributes, divInnerText) {
        let div = document.createElement(typeElem);
        if (divAttributes) {
            for (let key in divAttributes) {
                if (key === "class" && typeof divAttributes[key] == "string") {
                    div.classList.add(divAttributes[key]);
                }
                if (key === "class" && typeof divAttributes[key] == "object") {
                    divAttributes[key].forEach((element) => {
                        div.classList.add(element);
                    });
                }
                if (key !== "class") {
                    div.setAttribute(key, divAttributes[key]);
                }
            }
        }
        if (divInnerText && typeof divInnerText == "string") {
            div.innerHTML = divInnerText;
        }
        if (typeof divInnerText == "object" && divInnerText) {
            divInnerText.forEach((element) => {
                div.append(element);
            });
        }

        return div;
    }
}

for (let index = 0; index < 5; index++) {

    new CreateResultCarItems()
}

