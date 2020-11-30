// function formValidate () {
//     var form = document.getElementById("form");
//     var patt_name = /(\w+)[\.\s]?(\w?)/;
//     var validName = patt_name.test(form.name.value);

//     var patt_phone = /^\(?(\d{3})\)?[\.\-\/]?(\d{3})[\.\-/]?(\d{3})$/;
//     var validPhone = patt_phone.test(form.mobile.value);

//     var patt_email = /(\w+)[\.\_\-]?(\w+)@(\w+)\.(\w+)\.?(\w?)\.?(\w?)/;
//     var validEmail = patt_email.test(form.email.value);
    
//     var name = form.name.value;
//     var phone = form.mobile.value;
//     var email = form.email.value;
//     var buy = form.bsr.value;

//     if(!validName) {
//         alert(form.name.value + "is not a valid name.")
//         document.getElementById("form").name.focus();
//         document.getElementById("form").name.select();
//         return false;
//     }else if (!validPhone) {
//         alert(form.mobile.value + " is not a vaild phone number")
//         document.getElementById("form").mobile.focus();
//         document.getElementById("form").mobile.select();
//         return false;
//     }else if (!validEmail) {
//         alert(form.email.value + "is not a valid email address")
//         document.getElementById("form").email.focus();
//         document.getElementById("form").email.select();
//         return false
//     }
//     if(confirm("Are you sure you want to submit this form?\nYour name: " + "\n" + "Your email:" + email + "\n" + "Buy:" + buy)) {
//         alert("Thank you for your enquriy");
//         return true;
//     }else{
//         return false;
//     }

// }