function enviarEmails(){ 
    var nomePessoa = document.getElementById("nomePessoa").value
    var emailPessoa = document.getElementById("emailPessoa").value
    var mensagem = document.getElementById("mensagem").value


    Email.send({
        SecureToken : "4216160e-524f-4428-a4dc-f1ace981ab21",
        To : 'marianacanato5@gmail.com',
        From : "thi.canato@gmail.com",
        Subject : "Contato - Portfólio Mariana",
        Body : "Nome: \n"+nomePessoa+  " Email: \n"+emailPessoa + " Mensagem: \n"+mensagem
    }).then(
      message => alert(message)
    );

    alert("E-mail enviado com sucesso")

}
