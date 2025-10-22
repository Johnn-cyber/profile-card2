const names = document.getElementById("fname");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const mssg = document.getElementById("message");
const form = document.getElementById("myform");
const errname = document.getElementById("error-name");
const errmemail = document.getElementById("error-email");
const errsub = document.getElementById("error-subject");
const errmssg = document.getElementById("error-message");
const success = document.getElementById("success");
        form.addEventListener('submit', (event)=>{
            event.preventDefault();
            if(names.value == ""){
                errname.style.display = "block";
                errname.textContent = "Include your name";
            }else{
                errname.style.display = "none";
            }
            if(email.value == ""){
                errmemail.textContent = "Input an email address";
                errmemail.style.display = "block";
            }else if(!email.value.includes('.com') || !email.value.includes('@')){
                errmemail.textContent = "Invalid email address";
                errmemail.style.display = "block";
            }
            else{
                errmemail.style.display = "none";
            }
            if(subject.value == ""){
                errsub.style.display = "block";
                errsub.textContent = "Include your subject";
            }else{
                errsub.style.display = "none";
            }
            if(mssg.value.length < 3){
                errmssg.style.display = "block";
                errmssg.textContent = "Include your message";
            }else{
                errmssg.style.display = "none";
            }
            if(names.value != "" && email.value.includes('@') && subject.value != "" && mssg.value.length > 3){    success.style.display = "block";
        success.textContent = "Message Sent Successfully";  
            }          
    });