const fname = document.getElementById('fname').value;
const email = document.getElementById('email').value;
const phone = document.getElementById('phone').value;
const message = document.getElementById('message').value;
const submit = document.getElementById('form-contact');

submit.addEventListener('submit', (e)=>{
  e.preventDefault();
  console.log("teste");
  
  let ebody = `
  <b>Nome: </b>${fname.value}
  <br>
  <b>Email: </b>${email.value}
  <br>
  <b>Telefone: </b>${phone.value}
  <br>
  <b>Mensagem: </b>${message.value}
  
  `
  //email
  Email.send({
    SecureToken : "828d3544-cda5-403b-8d1f-4af0dfa68efa",
    To : 'changkiunmy@gmail.com',
    From : "changkiunmy@gmail.com",
    Subject : "Email teste " + email.value,
    Body : ebody
}).then(
  message => alert(message)
);
});
  