let fname ,email,  phone, message 


async function handlerSubmit(e) {
  e.preventDefault();
  
 fname = document.getElementById('fname').value;
 email = document.getElementById('email').value;
 phone = document.getElementById('phone').value;
 message = document.getElementById('message').value;

  let ebody = `
<span style="font-weight: bold;">Nome:</span> ${fname}<br>
<span style="font-weight: bold;">Email:</span> ${email}<br>
<span style="font-weight: bold;">Telefone:</span> ${phone}<br>
<span style="font-weight: bold;">Mensagem:</span><br>
<p style="color: #555;">${message}</p>
`;
  //email
  //changkiunmy@gmail.com
  try {
    await Email.send({
    SecureToken : "828d3544-cda5-403b-8d1f-4af0dfa68efa",
    To : 'gavawo4313@gekme.com',
    From : "changkiunmy@gmail.com",
    Subject : "Email de " + fname,
    Body : ebody
})

 fname = document.getElementById('fname').value = "";
 email = document.getElementById('email').value = "";
 phone = document.getElementById('phone').value= "";
 message = document.getElementById('message').value= "";

alert("Email enviado!")

  } catch (error) {
    console.log(error)
  }
  

};
  