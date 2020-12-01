function formValidate () {
  var form = document.getElementById("form");
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

