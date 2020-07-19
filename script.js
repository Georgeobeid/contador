function calcular(){
    let inicio =Number(document.getElementById('txtini').value)
    let fim = Number(document.getElementById('txtfim').value)
    let passo=Number(document.getElementById('txtpass').value)
    let saida=document.getElementById('saida')

    if(inicio<fim && passo>0){
        for(inicio;inicio<=fim;inicio+=passo){
            saida.innerHTML+=`${inicio} \u{1F449}`
        }
        saida.innerHTML+=`\u{1F534}`
    } else{
        alert("[ERROR] Verifique os dados")
    }
}