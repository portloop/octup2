document.addEventListener('DOMContentLoaded', () => {
setTimeout(() => {
    function validateEmail(sEmail) {
        var filter = /^([\w-\.\+]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (filter.test(sEmail)) {
            return true;
        }
        else {
            return false;
        }
    }

  // Submit email 
let sumbitBtns = document.querySelectorAll('.subscribe-btn');
let inputs = document.querySelectorAll('.sub-input');

inputs.forEach(item => {
  item.addEventListener('input', (e) => {
    item.style.cssText = 'border: 1px solid #504B5A;';
    $(item.nextElementSibling.nextElementSibling).fadeOut();
  })
})

sumbitBtns.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    let target = e.target;
    let emailInput = target.previousElementSibling;


    let hasError = false;
    if(!validateEmail(emailInput.value)) {
      hasError = true;
      emailInput.style.cssText = 'border: 1px solid red'
      $(target.nextElementSibling).fadeIn();
    }


    if(!hasError) {
      $.ajax({
        method: 'POST',
        url: './php-scripts/subscribe.php',
        data: {
            email : emailInput.value

        },
    })
        .done(function (response) {
          $(emailInput).parent().next().css("display", "flex").fadeIn();
          $(emailInput).parent().fadeOut();
        })
        .fail(function (response) {
          $(emailInput).parent().next().css("display", "flex").fadeIn();
          $(emailInput).parent().fadeOut();
        })
    }

  })
})
}, 2000)

})