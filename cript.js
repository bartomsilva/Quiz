function encriPt(obj){
    const xxx=obj.value
    document.querySelector("#cripto").innerHTML=criptText(xxx)
}

function revert(){
    const xxx= document.querySelector("#cripto").innerHTML
    document.querySelector("#textoOriginal").innerHTML=decriptText(xxx)
}

