function sendMail(contactForm){
    
    $(".contact-page-btn").attr('disabled', 'disabled');
    $(".contact-page-btn").addClass('disabled');
  
    emailjs.send('gmail', 'portfolio', {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "message": contactForm.message.value
    })
    .then(
        function(response){
            $(".message").addClass("display");
            resetFields(contactForm);
           
        },
        function(error) {
            $(".error-message").addClass("display-error");
           
        
        });
        return false;  // To block from loading a new page
}

function resetFields(contactForm){
    contactForm.name.value = "";
    contactForm.email.value = "";
    contactForm.message.value = "";
}