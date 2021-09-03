
(function() {
    'use strict';
    function objectifyForm(formArray){
    var returnArray = {};
    for (var i = 0; i < formArray.length; i++){
      returnArray[formArray[i]['name']] = formArray[i]['value'];
    }
    return returnArray;
    }


  $(document).ready(function (){
    $("#login_form").submit(function(event){
        event.preventDefault();

      }).validate( {
      wrapper: "li",
      normalizer: function( value ) {
        return $.trim( value );
      },
      rules: {
        email: {
          required: true
        },
        password: {
          required: true
        },
        },
        messages: {
          email: "required",  
          password: "required",
      },
      submitHandler: function(form) { 
        const  formObject = objectifyForm(form);
        console.log('formObject',JSON.stringify(formObject))
        
      //  loadSpinner($("#submitForm"), "Processing...")

      }
      })
  })
})();

