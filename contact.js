function formValidate () {
  var form = document.getElementById("form");
<<<<<<< HEAD
  var userName = form.name.value;
  var userMobile = form.mobile.value;
  var userEmail = form.email.value;
  
  var patt_name = /^[a-zA-Z ]+$/;
  var patt_phone = /^[(]{0,1}[0-9]{3}[)]{0,1}[\s.]{0,1}[0-9]{3}[\s.]{0,1}[0-9]{4}$/;
  var patt_email = /(\w+)[\.\_\-]?(\w+)@(\w+)\.(\w+)\.?(\w?)\.?(\w?)/;
  
  var validName = patt_name.test(userName);
  var validPhone = patt_phone.test(userMobile);
  var validEmail = patt_email.test(userEmail);
  
  var buy = form.bsr.value;

  if(!validName) {
      alert(userName + "  is not a valid name.");
      form.name.focus();
      form.name.select();
      return false;
  }else if (!validPhone) {
      alert(userMobile + "  is not a vaild phone number");
      form.mobile.focus();
      form.mobile.select();
      return false;
  }else if (!validEmail) {
      alert(userEmail + "  is not a valid email address");
      form.email.focus();
      form.email.select();
      return false;
  }
  if(confirm("Are you sure you want to submit this form?\nYour name: " + 
             userName + "\n" + "Your Phone:" + userMobile + "\n" 
			 + "Your email:" + userEmail + "\n" + "Buy:" + buy)) {
      alert("Thank you for your enquriy");
      return true;
  }else{
      return false;
  }

}

=======
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
      return false;
  }
  if(confirm("Are you sure you want to submit this form?\nYour name: " + "\n" + "Your email:" + email + "\n" + "Buy:" + buy)) {
      alert("Thank you for your enquriy");
      return true;
  }else{
      return false;
  }

}

//Nav button
// javascript for opening and closing navigation in mobile view
const btn = document.querySelector("#navbutton");
// console.log( btn )
const nav = document.querySelector(".navigation");
// console.log( nav )

// function to open the nav
function onClick() {
  btn.addEventListener( "click" , onClick )
  if( nav.classList.contains("open") ) {
    nav.classList.remove("open");
  }
  else {
    nav.classList.add("open");
  }
}
>>>>>>> 4751219b503db739bfaeffecb4f04c71c8e40c3e
