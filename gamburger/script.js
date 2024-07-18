let time = document.querySelector(".header__timer-extra");

function timer() {
    if(time.innerHTML < 100) {
        time.innerHTML++
        setTimeout(() => timer(), 100)
    }
}
timer()


let product = {
    plainBurger: {
        name: "Гамбургер простой",
        price: 10000,
        amount: 0,
        kcall: 500,
        get Price() {
            return this.price * this.amount
        },
        get Kcall() {
            return this.kcall * this.amount
        }
    },
    freshBurger: {
        name: "Гамбургер FRESH",
        price: 20500,
        amount: 0,
        kcall: 1000,
        get Price() {
            return this.price * this.amount
        },
        get Kcall() {
            return this.kcall * this.amount
        }
    },
    freshCombo: {
        name: "FRESH COMBO",
        price: 31900,
        amount: 0,
        kcall: 1500,
        get Price() {
            return this.price * this.amount
        },
        get Kcall() {
            return this.kcall * this.amount
        }
    }
}

let extraProduct = {
    doubleMayonnaise: {
        name: "Двойной майонез",
        price: 3000,
        kcall: 300
    },
    lettuce: {
        name: "Салатный лист",
        price: 1000,
        kcall: 50
    },
    cheese: {
        name: "Сыр",
        price: 2000,
        kcall: 200
    }
}

let btnPlusOrMinus = document.querySelectorAll(".main__product-btn"),
    checkboxExtra = document.querySelectorAll(".main__product-checkbox"),
    addCart = document.querySelector(".addCart"),
    receipt = document.querySelector(".receipt"),
    receiptWindow = document.querySelector(".receipt__window"),
    receiptOut = document.querySelector(".receipt__window-out"),
    receiptBtn = document.querySelector(".receipt__window-btn");
    
btnPlusOrMinus.forEach(btn => {
    btn.addEventListener("click", function() {
        plusOrMinus(this)
    })
})

function plusOrMinus(btn) {
    let parent = btn.closest(".main__product");
    let parentId = parent.getAttribute("id");
    let out = btn.closest(".main__product").querySelector(".main__product-num");
    let price = btn.closest(".main__product").querySelector(".main__product-price span");
    let kcall = btn.closest(".main__product").querySelector(".main__product-kcall span");
    
    
    if(btn.classList.contains("plus") && product[parentId].amount < 10) {
        product[parentId].amount++
    }else if(btn.classList.contains("minus") && product[parentId].amount > 0) {
        product[parentId].amount--
    }
    
    out.innerHTML = product[parentId].amount
    price.innerHTML = product[parentId].Price
    kcall.innerHTML = product[parentId].Kcall
}

for(let i = 0; i < checkboxExtra.length; i++) {
    checkboxExtra[i].addEventListener("click", function() {
        addExtraProduct(this)
    })
}

function addExtraProduct(input) {
    let parentId = input.closest(".main__product").getAttribute("id");
    
    product[parentId][input.dataset.extra] = input.checked;
    
    let price = input.closest(".main__product").querySelector(".main__product-price span"),
        kcall = input.closest(".main__product").querySelector(".main__product-kcall span");
        elDataInfo = input.dataset.extra;
        
    if(product[parentId][elDataInfo] == true) {
        product[parentId].price += extraProduct[elDataInfo].price
        product[parentId].kcall += extraProduct[elDataInfo].kcall
    }else {
        product[parentId].price -= extraProduct[elDataInfo].price
        product[parentId].kcall -= extraProduct[elDataInfo].kcall
    }
    
    price.innerHTML = product[parentId].Price
    kcall.innerHTML = product[parentId].Kcall
}