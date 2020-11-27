//regular expression email
// / (\w+)[\.\-\_]?(\w+)@(\w+)[\.](\w+)[\.]?(\w+)[\.]? /

//contact form

// var form = document.getElementById ("form");
// var email = form.email.value;
// var valid_email = email_patt.test(email);
// if(!valid_email) { 
// alert
// }
// ​
function forValidate() {
var form = document.getElementById("form");
var patt_name = /(\w+) [\.\s]?(\w?)/;
var name = form.name.value;
var validName = patt_name.test(name);

var patt_phone = /^\(?(\d{3})\)?[\.\-\/]?(\d{3})[\.\-\/]?(\d{3})$/;
var phone = form.mobile.value;
var validPhone = patt_phone.test(name)

var patt_email = / (\w+)[\.\-\_]?(\w+)@(\w+)\.(\w+)\.?(\w+)\.? /;
var email = form.email.value;
var vaildEmail = patt_email.test(email);

var buy = form.bsr.value;
    if(!validName){
        alert(form.name.value + "is not a valid name.");
        form.name.focus();
        form.name.select();
        return false;
    }else if (!validPhone){
        alert(form.mobile.value + "isn't a vaild mobile number");
        form.mobile.focus();
        form.mobile.select();
        return false;
    }else if (!vaildEmail){
        alert(form.email.value + "isn't a vaild email address");
        form.email.focus();
        form.email.select();
        return false;
    }
    if (confirm("Are you sure you want to submit this form?\nYour name: " + "\n" + "Your email:" + email + "\n" + "Buy:" + buy)) {
    alert("Thank you for your message");
    return true;
    } else {
        return false;
    }
}

//Nav button
// javascript for opening and closing navigation in mobile view
const btn = document.querySelector("#navbutton")
// console.log( btn )
const nav = document.querySelector(".navigation")
// console.log( nav )

// function to open the nav
function onClick() {
  if( nav.classList.contains("open") ) {
    nav.classList.remove("open")
  }
  else {
    nav.classList.add("open")
  }
}

// // add a click listener to the button
// btn.addEventListener( "click" , onClick )
