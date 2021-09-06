function calcularPorcentaje(){
    const originalPrice = Number(document.getElementById("inputPrice").value);
    const discount = Number(document.getElementById("inputDiscount").value);
    const finalPrice = ((originalPrice* (100-discount))/100);
    console.log(finalPrice);
    document.getElementById("totalPrice").innerHTML = finalPrice + "$"
}


