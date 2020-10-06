document.getElementById("botaoEnviar").addEventListener("click", validaFormulario) 


function validaFormulario(){

  if(document.getElementById("nome").value != "" && document.getElementById("email").value != "" && document.getElementById("numero").value != ""){

    alert("Massa! Você recebrá as novidades por e-mail. Um cheiro!")

  }else{

    alert("Opa! Veja direitinho se preencheu todos os dados, por favor.")

  }
}

