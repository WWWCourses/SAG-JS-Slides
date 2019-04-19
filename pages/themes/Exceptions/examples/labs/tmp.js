"use strict";
function validateEmail(email) {
    if( email.match(/[\w.-]@\w+\.\w+/) ){
        return email
    }else{
        throw new Error(`invalid email: ${email}`);
    }
}

var validEmail = validateEmail('name@domaincom');
