function pogger(){
    var v1 = Number(document.getElementById('v1').value)
    var texto1
    var texto2

    if(v1 > 0){
     var texto1 = "maior que zero"
    }else{
        var texto1 = "menor que zero"
    }

    if(v1 % 2 == 0){
        var texto2 = "par"
    }else{
        var texto2 = "impar"
    }
    alert(v1)
    alert("o seu número é "+ texto1 +" e "+ texto2)

}

var verificar = document.getElementById('verificar')
verificar.addEventListener('click', pogger)