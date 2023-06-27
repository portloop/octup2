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
    const regex =  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return regex.test(phone);
  }

// Submit data from form to hubspot
let form = $('#validationOnSubmit'),
    name = document.querySelector('#name'),
    email = document.querySelector('#email'),
    website = document.querySelector('#website'),
    phone = document.querySelector('#phone'),
    submitButton = document.querySelector('#early-button'),
    fields = document.querySelectorAll('.field'),
    successSubmit = document.querySelector('.suc-e-form');

    
    var input = document.querySelector("#phone");
    window.intlTelInput(input, {
      utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
      separateDialCode : false,
      autoPlaceholder : true,
    });

    fields.forEach(item => {
      item.addEventListener('input', () => {
        $(item.nextElementSibling).fadeOut();
        item.classList.remove('error');
      })
    })

    phone.addEventListener('input', () => {
      let phoneError = $('#phoneErrorSpan');
      phoneError.fadeOut()
    })

    submitButton.addEventListener('click', (event) => {
      event.preventDefault();
      let hasError = false; 

      if(!name.value) {
        hasError = true;
        let nameError = name.nextElementSibling;
        name.classList.add('error')
        $(nameError).fadeIn();
      };

      if(!email.value || !validateEmail(email.value)) {
        hasError = true;
        let emailError = email.nextElementSibling;
        email.classList.add('error')
        $(emailError).fadeIn();
      }
      
      if(!phone.value || !validatePhone(phone.value)) {
        hasError = true;
        let phoneError = $('#phoneErrorSpan');
        phone.classList.add('error')
        $(phoneError).fadeIn();

      }

      if(!website.value) {
        hasError = true;
        let websiteError = website.nextElementSibling;
        website.classList.add('error')
        $(websiteError).fadeIn();
      }


      if(!hasError) {
        $.ajax({
          method: 'POST', 
          url: './php-scripts/earlybird.php',
          data: { name: name.value, email: email.value, website: website.value, phone: phone.value },
        })
        .done(function (response) {
          $('.e-form').fadeOut();
          $('.suc-e-form').fadeIn();
          if (document.documentElement.clientWidth > 768) {
            dataLayer.push({'event': 'click', 'itemName' : 'earlybird-submit-desktop'});
          } else {
            dataLayer.push({'event': 'click', 'itemName' : 'earlybird-submit-mobile'});
            let infoF = document.querySelector('.info-f');
          }
        })
        .fail(function (response) {
          $('.e-form').fadeOut();
          $('.suc-e-form').fadeIn();
          let infoF = document.querySelector('.info-f');
        })
      }

    })