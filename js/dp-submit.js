'use strict'
document.addEventListener('DOMContentLoaded', () => {
    let firstName = document.querySelector('#fname'),
        lastName = document.querySelector('#lname'),
        email = document.querySelector('#email'),
        website = document.querySelector('#website'),
        text = document.querySelector('#freeText'),
        submitBtn = document.querySelector('#submitDesignPartner'),
        fields = document.querySelectorAll('.field'),
        media_type_input = document.querySelector('#media-type-input'),
        media_type_input_error = document.querySelector('.select-dropdown').nextElementSibling;


    fields.forEach(item => {
        item.addEventListener('input', () => {
            item.classList.remove('error');
            let itemError = item.nextElementSibling
            itemError.style.display = 'none'
        })
    })

    function validateEmail(sEmail) {
        var filter = /^([\w-\.\+]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (filter.test(sEmail)) {
            return true;
        }
        else {
            return false;
        }
    }


    submitBtn.addEventListener('click', () => {
        let hasError = false;

        const selectedOptions = Array.from(document.querySelectorAll('input[name="options[]"]:checked'))
            .map(option => option.value);

        if (selectedOptions.length <= 0) {
            media_type_input.style.cssText = 'border: 2px solid red !important';
            media_type_input_error.style.cssText = 'display: block';
            hasError = true;
        } else {
            media_type_input.style.cssText = 'border: 1px solid #504B5A !important';
            media_type_input_error.style.cssText = 'display: none';
        }


        const selectedValue = document.querySelector('input[name="contact"]:checked');
        const inputError = document.querySelector('#radio-error');

        if (selectedValue === null) {
            inputError.style.cssText = 'display: block';
        } else {
            inputError.style.display = 'none';

            const selectedOption = selectedValue.value;
            console.log(selectedOption);

            // Далее можно выполнять нужные действия с выбранным значением
        }


        if (!firstName.value) {
            hasError = true;
            let fnameError = firstName.nextElementSibling;
            firstName.classList.add('error')
            fnameError.style.display = 'block';
        }

        if (!lastName.value) {
            hasError = true;
            let fnameError = lastName.nextElementSibling;
            lastName.classList.add('error')
            fnameError.style.display = 'block';
        }

        if (!email.value || !validateEmail(email.value)) {
            hasError = true;
            let emailError = email.nextElementSibling;
            email.classList.add('error')
            emailError.style.display = 'block';
        }

        if (!website.value) {
            hasError = true;
            let websiteError = website.nextElementSibling;
            website.classList.add('error')
            websiteError.style.display = 'block';
        }

        if (!hasError) {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', './php-scripts/dp-submit.php', true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            
            var formData = 'firstName=' + encodeURIComponent(firstName.value) +
                           '&lastName=' + encodeURIComponent(lastName.value) +
                           '&email=' + encodeURIComponent(email.value) +
                           '&website=' + encodeURIComponent(website.value) +
                           '&mediaType=' + encodeURIComponent(selectedOptions) +
                           '&storefront=' + encodeURIComponent(selectedValue) +
                           '&text=' + encodeURIComponent(text.value);
        
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        document.querySelector('.partner-success-submit').style.display = 'block';
                        document.querySelector('form').style.display = 'none';
                    } else {
                        document.querySelector('.partner-success-submit').style.display = 'block';
                        document.querySelector('form').style.display = 'none';
                    }
                }
            };
            
            xhr.send(formData);
        }

    })



});