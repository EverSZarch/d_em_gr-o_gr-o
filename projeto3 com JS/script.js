function contar(){
var n1 = document.getElementById(`txti`)
var n2 = document.getElementById(`txtf`)
var np = document.getElementById(`txtp`)
var res = document.getElementById(`res`)

    if(n1.value.length == 0 || n2.value.length == 0 || np.value.length == 0){
    window.alert(`[ERROOUUU] Preencha todos os dados!`)
    } else {
    res.innerHTML = `Contando...<br>`
    var i = Number(n1.value)
    var f = Number(n2.value)
    var pas = Number(np.value)
    if (pas <= 0 ){
        window.alert(`passo inválido`)
    }
    if (i < f){
        //contagem crescente
        for(var c = i; c <=f; c = c + pas ){
            res.innerHTML += `${c} \u{1F449}`
         }
        }else{
            //contagem regressiva
            for(var c = i ; c>=f ; c = c - pas){
                res.innerHTML += `${c} \u{1F449}`
            }
         res.innerHTML += `${f} \u{1F3C1} `
        }
    }
        

}