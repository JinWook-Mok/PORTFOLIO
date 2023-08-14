const form = document.querySelector('form');
const fullName = document.querySelector(".name");
const email = document.querySelector(".email");
const message = document.querySelector(".message");
const submitBtn = document.querySelector(".submit");

console.log(form);
console.log(fullName);
form.addEventListener("click", () => {
  
    if (fullName.value.trim() === '') {
        alert('Please enter your full name.');
        fullName.focus();
        return;
      }
      
      if (email.value.trim() === '') {
        alert('Please enter your email.');
        email.focus();
        return;
      }
      
      if (message.value.trim() === '') {
        alert('Please enter your message.');
        message.focus();
        return;
      }
      
      // If all fields are filled out, submit the form
      form.submit();

});
