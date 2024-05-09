document.addEventListener('DOMContentLoaded', function () {
    var email = document.getElementById('email');
    var confirmer = document.getElementById('confirmer');

    function validateEmails(){
        if (email.value === confirmer.value) {
            confirmer.style.borderColor = 'green';
            confirmer.setCustomValidity('');
            alert('Verification successful! Emails match.');
        } else {
            confirmer.style.borderColor = 'red';
            confirmer.setCustomValidity('Please ensure that email entries match!');            
            alert('Email addresses do not match. Please enter matching email addresses!');
        }
    }
    
    email.addEventListener('change', validateEmails);
    confirmer.addEventListener('change', validateEmails);
});
