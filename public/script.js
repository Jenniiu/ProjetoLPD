let fname ,email,  phone, message 


async function handlerSubmit(e) {
  e.preventDefault();
  
 fname = document.getElementById('fname').value;
 email = document.getElementById('email').value;
 phone = document.getElementById('phone').value;
 message = document.getElementById('message').value;

  try {

emailjs.send("service_5b1mduh","template_mj6fvyl",{
to_name: "LPD Advocacia",
phone: phone,
from_email: email,
from_name: fname,
message: message,
});

 fname = document.getElementById('fname').value = "";
 email = document.getElementById('email').value = "";
 phone = document.getElementById('phone').value= "";
 message = document.getElementById('message').value= "";

alert("Email enviado!")

  } catch (error) {
    console.log(error)
  }
  

};
  