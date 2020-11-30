function formValidate () {
  var form = document.getElementById("form");
  var patt_name = /(\w+)[\.\s]?(\w?)/;
  var validName = patt_name.test(form.name.value);

  var patt_phone = /^\(?(\d{3})\)?[\.\-\/]?(\d{3})[\.\-/]?(\d{3})$/;
  var validPhone = patt_phone.test(form.mobile.value);

  var patt_email = /(\w+)[\.\_\-]?(\w+)@(\w+)\.(\w+)\.?(\w?)\.?(\w?)/;
  var validEmail = patt_email.test(form.email.value);
  
  var name = form.name.value;
  var phone = form.mobile.value;
  var email = form.email.value;
  var buy = form.bsr.value;

  if(!validName) {
      alert(form.name.value + "is not a valid name.");
      document.getElementById("form").name.focus();
      document.getElementById("form").name.select();
      return false;
  }else if (!validPhone) {
      alert(form.mobile.value + " is not a vaild phone number");
      document.getElementById("form").mobile.focus();
      document.getElementById("form").mobile.select();
      return false;
  }else if (!validEmail) {
      alert(form.email.value + "is not a valid email address");
      document.getElementById("form").email.focus();
      document.getElementById("form").email.select();
      return false
  }
  if(confirm("Are you sure you want to submit this form?\nYour name: " + "\n" + "Your email:" + email + "\n" + "Buy:" + buy)) {
      alert("Thank you for your enquriy");
      return true;
  }else{
      return false;
  }

}
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
// document.addEventListener("DOMContentLoaded", function(){

// function formValidate() {
// var form = document.getElementById("form");
// var patt_name = /(\w+)[\.\s]?(\w?)/;
// var name = form.name.value;
// var validName = patt_name.test(name);

// var patt_phone = /^\(?(\d{3})\)?[\.\-\/]?(\d{3})[\.\-\/]?(\d{3})$/;
// var phone = form.phone.value;
// var validPhone = patt_phone.test(name)

// var patt_email = /(\w+)[\.\-\_]?(\w+)@(\w+)\.(\w+)\.?(\w+)\.?/;
// var email = form.email.value;
// var vaildEmail = patt_email.test(email);

// var buy = form.bsr.value;
//     if(!validName){
//         alert(form.name.value + "is not a valid name.");
//         form.name.focus();
//         form.name.select();
//         return false;
//     }else if (!validPhone){
//         alert(form.phone.value + "isn't a vaild mobile number");
//         form.phone.focus();
//         form.phone.select();
//         return false;
//     }else if (!vaildEmail){
//         alert(form.email.value + "isn't a vaild email address");
//         form.email.focus();
//         form.email.select();
//         return false;
//     }
//     if (confirm("Are you sure you want to submit this form?\nYour name: " + "\n" + "Your email:" + email + "\n" + "Buy:" + buy)) {
//     alert("Thank you for your message");
//     return true;
//     } else {
//         return false;
//     }
    
// }
// if ($_SERVER["REQUEST_METHOD"] == "POST") {

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