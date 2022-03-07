
// Esse é o conversor de real para dólar.
function converter() {
    let real = document.getElementById('valorReal').value;
    let resultado = document.getElementById('resultado')

    real = parseFloat(real);

    // Cotação dólar 07/03/2022 16:17
    let dolar = real / 5.08
    let dolarConvertido = dolar.toFixed(2)
    if( real == '' || real == 0 || real == null || isNaN(real)){
        alert('Erro: Insire um valor válido')
        resultado.innerHTML = `<p>Erro: Insira um valor válido</p>`
        
    } 

    else {
    console.log(dolar.toFixed(2));
    
    resultado.innerHTML = `<p>${real} Real Brasileiro é igual a ${dolarConvertido} dólar americano</p>`
    }

}

