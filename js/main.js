$(document).ready(function () {
    // Login Register Form
    $('#logreg-forms #btn-signup').click(toggleSignUp);
    
    function toggleSignUp(e){
        e.preventDefault();
        $('#logreg-forms .form-signin').toggle(); // display:block or none
        $('#logreg-forms .form-signup').toggle(); // display:block or none
    }
})