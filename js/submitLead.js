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
  const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return regex.test(phone);
}

// Submit data from form to hubspot
let form = $('#validationOnSubmit'),
  name = document.querySelector('#name'),
  email = document.querySelector('#email'),
  website = document.querySelector('#website'),
  phone = document.querySelector('#phone'),
  submitButton = document.querySelector('#submit-data'),
  fields = document.querySelectorAll('.field'),
  successSubmit = document.querySelector('.lead-form-success-submit');


var input = document.querySelector("#phone");
window.intlTelInput(input, {
  utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
  separateDialCode: false,
  autoPlaceholder: true,
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

  if (!name.value) {
    hasError = true;
    let nameError = name.nextElementSibling;
    name.classList.add('error')
    $(nameError).fadeIn();
  };

  if (!email.value || !validateEmail(email.value)) {
    hasError = true;
    let emailError = email.nextElementSibling;
    email.classList.add('error')
    $(emailError).fadeIn();
  }

  if (!phone.value || !validatePhone(phone.value)) {
    hasError = true;
    let phoneError = $('#phoneErrorSpan');
    phone.classList.add('error')
    $(phoneError).fadeIn();

  }

  if (!website.value) {
    hasError = true;
    let websiteError = website.nextElementSibling;
    website.classList.add('error')
    $(websiteError).fadeIn();
  }


  document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Отменить стандартное поведение отправки формы

    // Проверить reCAPTCHA

  });

  let checkCaptcha = false; // Инициализация переменной checkCaptcha с значением false

  if (!hasError) {
    grecaptcha.ready(function () {
      grecaptcha.execute('6LeertImAAAAALoIq3vgqirN6vB26DNFIa9dwjfZ', { action: 'submit' }).then(function (token) {
        // Валидация прошла успешно, установите значение checkCaptcha в true
        checkCaptcha = true;

        // Выполните отправку формы или другие действия, если checkCaptcha равно true
        if (checkCaptcha) {
          $.ajax({
            method: 'POST',
            url: './php-scripts/submitForm.php',
            data: { name: name.value, email: email.value, website: website.value, phone: phone.value },
          })
            .done(function (response) {
              $('.lead-form').fadeOut();
              $('.lead-form-success-submit').fadeIn();
              768 < document.documentElement.clientWidth ? dataLayer.push({ event: "click", itemName: `signup_section6-desktop` }) : dataLayer.push({ event: "click", itemName: `signup_section6-mobile` });
            })
            .fail(function (response) {
              $('.lead-form').fadeOut();
              $('.lead-form-success-submit').fadeIn();
              768 < document.documentElement.clientWidth ? dataLayer.push({ event: "click", itemName: `signup_section6-desktop` }) : dataLayer.push({ event: "click", itemName: `signup_section6-mobile` });
            });
        }
      });
    });
  }

})
