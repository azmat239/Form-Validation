function printError(elemID,hint){
    document.getElementById(elemID).innerHTML=hint;
}

function formValidate(){
    var name = document.contactForm.name.value;
    var email =  document.contactForm.email.value;
    var mobile =  document.contactForm.mobile.value;
    var gender =  document.contactForm.gender.value;
    var country =  document.contactForm.country.value;
    var Hobbies =[]
    var checkboxes = document.getElementsByName('hobbies[]');

    for(var i=0;i<checkboxes.length;i++){
        if(checkboxes[i].checked){
            Hobbies.push(checkboxes[i].value)
        }
    }
  
    var nameERR = emailErr = mobileErr = genderErr = countryErr = true;
    
    if(name == ''){
        printError("nameErr","Please Enter Your Name ");
    }
    else{
        var regex = /^[a-zA-z\s]+$/

        if(regex.test(name) === false){
            printError("nameErr","Please Enter A Valid Name")
        }
        else{
            printError("nameErr","");
            nameERR=false;
        }
    }

    if(email == ''){
        printError("emailErr","please Enter The email ");
    }
    else{
        var regex = /^\S+@\S+\.\S+$/;

        if(regex.test(email) === false){
            printError('emailErr',"Please Enter A valid email");
        }
        else{
            printError('emailErr','');
            emailErr=false;
        }
    }

    if(mobile == ''){
            printError('mobileErr','please Enter Mobile Number');
    }
    else{
        var regex=/^[0-9]\d{9}$/;
        if(regex.test(mobile) === false){
            printError('mobileErr','Please Enter A valid Mobile Number ');
        }
        else{
            printError('mobileErr', '');
            mobileErr = false;
        }
    }

    if(country == 'Select'){
        printError('countryErr','please Select your Country ');
    }
    else{
        printError('countryErr','');
        countryErr = false;
    }

    if(gender == ''){
        printError('genderErr','please Select Your gender');
    }
    else{
        printError('genderErr','');
        genderErr = false;
    }

    if(nameERR==true || emailErr==true || mobileErr==true || countryErr==true || genderErr == true ){
        return false;
        alert('checkdata');
    }

    else{

        var preview = "You Have entered Following details \n" +
        name + "\n" +
        email + "\n" +
        mobile + "\n" +
        gender + "\n" +
        country + "\n" ;

        if(Hobbies.length){
            preview += Hobbies.join(',');
        }
        alert(preview);

    }
}

