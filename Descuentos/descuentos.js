
function calcularPrecioConDescento(precio, descuento) {
    let porcentajePrecioConDescuento = 100 - descuento; // 100% - % de descuento
    let precioConDescuento = (precio * porcentajePrecioConDescuento) / 100; // Regla de 3

    return precioConDescuento;
}

function buttonPriceDiscount() {
    let inputPrice = document.getElementById("input-price");
    let price = inputPrice.value;
    let inputDiscount = document.getElementById("input-discount");
    let discount = inputDiscount.value;

    let precioConDescuento = calcularPrecioConDescento(price, discount);
    
    let resultPrice = document.getElementById("result-price");

    resultPrice.innerText = "El precio de tu producto es: $" + precioConDescuento + "."
}