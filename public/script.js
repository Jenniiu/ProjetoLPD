function sendEmail(){
    console.log("entrou 123")
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const tel = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
    const teste = {
        name,
        email,
        tel,
        message
    }
    console.log(teste)
  Email.send({
      secureToken: "15bddccf-97c0-428f-954e-c2f5c6b6ce0e",
      To : 'barbosajennifer00@gmail.com',
      From : document.getElementById("email").value,
      Subject : "New Contact Form Esquiry",
      Body : "Name: " + document.getElementById("name").value
      + "<br> Email: " + document.getElementById("email").value
      + "<br> Telefone: " + document.getElementById("phone").value
      + "<br> Message " + document.getElementById("message").value
  }).then(
    message => alert("Mensagem enviada com sucesso!")
  );
}
sendEmail()