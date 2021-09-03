$(document).ready(function(){

    $("#contactform").submit(function(event){
        event.preventDefault();

      }).validate( {
      wrapper: "li",
      normalizer: function( value ) {
        return $.trim( value );
      },
      rules: {
        fullname: {
          required: true
        },
        subject: {
            required: true
          },
        email: {
            required: true
          },
        message: {
          required: true
        },
        },
        messages: {
          email: "Your email is required",  
          message: "Your have to write something",
          message: "Your full name is required",
          message: "Write a subject for your message",
      },
      submitHandler: function(form) { 
        const  formObject = objectifyForm(form);

        loadSpinner($("#submitForm"), "Submiting...")
    
        User.create('/api/contact-us/create',formObject).then(function(response){
            if(response.data){
                resetSpinner($("#submitForm"), "Send Message")
                showSuccessToast($('#toast_wrap'),'Message sent successfully, we shall contact you soon.')
            }
          })
          .catch(function(error){
            console.log('error',error);
          });  
      }
      })
})