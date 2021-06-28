export class SideBar {
    sideBarForm = document.querySelector('.form-side-bar')
    allInputTypeCheckBox = document.querySelectorAll('.form-side-bar input[type="checkbox"]')
    btnShowMoreModelOrBrand = document.querySelectorAll('.btn-show-more-brand-or-model')
    sliderPrice = document.getElementById('slider-price')
    sliderYear = document.getElementById('slider-year')
    sliderPower = document.getElementById('slider-power')
    constructor() {
        this.uiSideBar()
    }

    uiSideBar() {
        this.showAllContentBrandOrModelList()
        this.addEventForSideBarForm()
        this.InputRangePrice()
        this.InputRangeYear()
        this.InputRangePower()
    }

    addEventForSideBarForm() {
        this.sideBarForm.addEventListener('change', (e) => {
            this.handlerForAllInputCheckBoxSideBar(e.target)
        })
    }

    handlerForAllInputCheckBoxSideBar(targetBlock) {
        if (targetBlock.checked) {
            targetBlock.parentNode.classList.add('active')
        } else {
            targetBlock.parentNode.classList.remove('active')
        }
    }

    showAllContentBrandOrModelList() {
        this.btnShowMoreModelOrBrand.forEach(btn => {
            btn.addEventListener('click', (e) => {
                let targetBlock = e.target.parentNode
                let listParentNode = targetBlock.previousSibling.previousSibling

                this.openOrCloseBrandModelList(listParentNode)
            })
        })
    }

    openOrCloseBrandModelList(listParentNode) {
        if (!listParentNode.style.maxHeight || listParentNode.style.maxHeight === 110 + 'px') {
            listParentNode.style.maxHeight = listParentNode.scrollHeight + 'px'
        } else {
            listParentNode.style.maxHeight = 110 + 'px'
        }
    }
    InputRangePrice() {
        this.createNoUiSlider(this.sliderPrice)
        this.setValueInputRange(this.sliderPrice, '.cars-in-stock-side-bar__price-block input[name="min-price"]', '.cars-in-stock-side-bar__price-block input[name="max-price"]')

    }
    InputRangeYear() {
        this.createNoUiSlider(this.sliderYear)
        this.setValueInputRange(this.sliderYear, '.cars-in-stock-side-bar__year-block input[name="min-year"]', '.cars-in-stock-side-bar__year-block input[name="max-year"]')

    }
    InputRangePower() {
        this.createNoUiSlider(this.sliderPower)
        this.setValueInputRange(this.sliderPower, '.cars-in-stock-side-bar__engine-power-block input[name="min-power"]', '.cars-in-stock-side-bar__engine-power-block input[name="max-power"]')

    }

    createNoUiSlider(blockName, minRange = 0, maxRange = 100, startMin = 20, startMax = 80) {
        noUiSlider.create(blockName, {
            start: [startMin, startMax],
            connect: true,
            range: {
                'min': minRange,
                'max': maxRange
            }
        });
    }

    setValueInputRange(blockName,blockMin,blockMax) {
        let inputMin = document.querySelector(`${blockMin}`)
        let inputMax = document.querySelector(`${blockMax}`)
        let inputsArr = [inputMin, inputMax]

        blockName.noUiSlider.on('update', function (values, handle) {
            inputsArr[handle].value = Math.round(values[handle])
        })
        const setRangeSlider = (index, value) => {
            let arr = [null, null];
            arr[index] = value;

            blockName.noUiSlider.set(arr)
        }
        inputsArr.forEach((el, index) => {
            el.addEventListener('input', (e) => {
                setRangeSlider(index, e.currentTarget.value)
            })
        });
    }
}

