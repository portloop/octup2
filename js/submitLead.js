 // Form Validate 
 function validateEmail(sEmail) {
    var filter = /^([\w-\.\+]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(sEmail)) {
        return true;
    }
    else {
        return false;
    }
 }

  function validatePhone(phone) {
    const regex = /^\d{10}$/;
    return regex.test(phone);
  }

// Submit data from form to hubspot
let form = document.querySelector('#validationOnSubmit'),
    name = document.querySelector('#name'),
    email = document.querySelector('#email'),
    website = document.querySelector('#website'),
    phone = document.querySelector('#phone'),
    submitButton = document.querySelector('#submit-data'),
    fields = document.querySelectorAll('.field');

    fields.forEach(item => {
      item.addEventListener('input', () => {
        item.classList.remove('error')
      })
    })

    submitButton.addEventListener('click', (event) => {
      event.preventDefault();
      let hasError = false; 

      if(!name.value) {
        hasError = true;
        name.classList.add('error')
      };

      if(!email.value || !validateEmail(email.value)) {
        hasError = true;
        email.classList.add('error');
      }
      
      if(!phone.value || !validatePhone(phone.value)) {
        hasError = true;
        phone.classList.add('error');
      }

      if(!website.value) {
        hasError = true;
        website.classList.add('error')
      }


      if(!hasError) {
        $.ajax({
          method: 'POST', 
          url: './submitForm.php',
          data: { name: name.value, email: email.value, website: website.value, phone: phone.value },
        })
        .done(function (response) {
        })
        .fail(function (response) {
        })
      form.reset();
      }

    })
