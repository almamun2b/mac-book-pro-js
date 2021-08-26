// Custom getElement Function
function getElement(elementId) {
    return document.getElementById(elementId);
}

// Get Price 
function getPrice(priceFieldId) {
    const priceField = getElement(priceFieldId);
    const price = parseFloat(priceField.innerText);
    return price;
}

// Calculate SubTotal
function subTotal() {
    const bestPrice = getPrice('best-price');
    const extraMemoryCost = getPrice('extra-memory-cost');
    const extraStorageCost = getPrice('extra-storage-cost');
    const deliveryCharge = getPrice('delivery-charge');

    const subTotalPrice = bestPrice + extraMemoryCost + extraStorageCost + deliveryCharge;
    return subTotalPrice;
}

// Set Total Price
function setTotalPrice() {
    const subTotalPrice = subTotal();
    const subTotalPriceField = getElement('sub-total-price');
    subTotalPriceField.innerText = subTotalPrice;

    const totalPriceField = getElement('total-price');
    totalPriceField.innerText = subTotalPrice;
}

// Set Price Button Click
function setPriceButton(setPriceButtonId, priceFieldId) {
    const priceButton = getElement(setPriceButtonId);
    const priceField = getElement(priceFieldId);
    const errorMessage = getElement('error');

    priceButton.addEventListener('click', function () {
        errorMessage.classList.add('d-none');
        const priceValue = priceButton.value;
        priceField.innerText = priceValue;
        setTotalPrice();
    });
}

// Apply Promo Button Click
function applyPromoButton() {
    const promoButton = getElement('apply-promo-button');
    const promoInputField = getElement('promo-input-field');
    const totalPriceField = getElement('total-price');
    const errorMessage = getElement('error');

    promoButton.addEventListener('click', function () {
        const promoInputValue = promoInputField.value.toLowerCase();
        let subTotalPrice = subTotal();
        if (promoInputValue == 'stevekaku') {
            subTotalPrice = subTotalPrice * 0.8;
            errorMessage.classList.add('d-none');
        }
        else {
            errorMessage.classList.remove('d-none');
        }
        totalPriceField.innerText = subTotalPrice;
        promoInputField.value = '';
    });
}

// Call setPriceButton by Parameters
setPriceButton('memory-8gb-button', 'extra-memory-cost');
setPriceButton('memory-16gb-button', 'extra-memory-cost');
setPriceButton('storage-256gb-button', 'extra-storage-cost');
setPriceButton('storage-512gb-button', 'extra-storage-cost');
setPriceButton('storage-1t-button', 'extra-storage-cost');
setPriceButton('free-delivery-button', 'delivery-charge');
setPriceButton('paid-delivery-button', 'delivery-charge');
// Call applyPromoButton
applyPromoButton();
