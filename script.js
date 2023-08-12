function getFormvalue() {
    let form = document.getElementById("form1");
    let firstName = form.fname.value;
    let secondName = form.lname.value;
  
  alert(`${firstName} ${secondName}`);
  event.preventDefault();
}
