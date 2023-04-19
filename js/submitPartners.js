'use strict'

window.addEventListener('DOMContentLoaded', () => {

    


    // Smooth FadeIn block on scroll 
    function onEntry(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('fadeBlock');
            }
        });
    }
    let options = { threshold: [0.5] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.element-animation');
    for (let elm of elements) {
        observer.observe(elm);
    }


    let submitPartner = document.querySelector('#submitPartner'),
        fName = document.querySelector('#fname'),
        lName = document.querySelector('#lname'),
        email = document.querySelector('#email'),
        website = document.querySelector('#website'),
        goalSelect = document.querySelector('#goal'),
        // goal = document.querySelector('#goal').options[goalSelect.selectedIndex].selectedIndex,
        goal = document.querySelector('#goal').options.selectedIndex,
        typeBusinessSelect = document.querySelector('#type-b'),
        typeBusiness = document.querySelector('#type-b').options[typeBusinessSelect.selectedIndex].value,
        anyText = document.querySelector('#freeText'),
        fields = document.querySelectorAll('.field'),
        form = document.querySelector('form');


    fields.forEach(item => {
        item.addEventListener('input', () => {
            item.classList.remove('error');
            let itemError = item.nextElementSibling
            $(itemError).fadeOut();
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






    let typeBusinessSelectError = typeBusinessSelect.nextElementSibling;
    let goalSelectError = goalSelect.nextElementSibling;

    submitPartner.addEventListener('click', (event) => {

        function selecBusinessValidate() {
            if (typeBusinessSelect.value == 'not') {
                typeBusinessSelect.classList.add('error')
                return true;
            } else {
                return false
            }
        }

        typeBusinessSelect.addEventListener('change', (e) => {
            typeBusinessSelect.classList.remove('error');
            typeBusinessSelect.options[0].removeAttribute('selected')
            typeBusinessSelect.selectedIndex = e.target.selectedIndex;
            $(typeBusinessSelectError).fadeOut();
        })

        function selectGoalValidate() {
            if (goalSelect.value == 'not') {
                goalSelect.classList.add('error')
                return true;
            } else {
                return false
            }
        }

        goalSelect.addEventListener('change', (e) => {
            goalSelect.classList.remove('error')
            goalSelect.options[0].removeAttribute('selected')
            goalSelect.selectedIndex = e.target.selectedIndex;
            $(goalSelectError).fadeOut();
        })

        event.preventDefault();
        let hasError = false;

        if (!fName.value) {
            hasError = true;
            let fnameError = fName.nextElementSibling;
            fName.classList.add('error')
            $(fnameError).fadeIn();
        }

        if (!lName.value) {
            hasError = true;
            let lnameError = lName.nextElementSibling;
            lName.classList.add('error')
            $(lnameError).fadeIn();
        }

        if (!email.value || !validateEmail(email.value)) {
            hasError = true;
            let emailError = email.nextElementSibling;
            email.classList.add('error')
            $(emailError).fadeIn();
        }

        if (!website.value) {
            hasError = true;
            let websiteError = website.nextElementSibling;
            website.classList.add('error')
            $(websiteError).fadeIn();
        }
        if (selectGoalValidate()) {
            hasError = true;
            $(goalSelectError).fadeIn();
        }

        if (selecBusinessValidate()) {
            hasError = true;
            let typeBusinessSelectError = typeBusinessSelect.nextElementSibling;
            $(typeBusinessSelectError).fadeIn();
        }

        if (!hasError) {

            $.ajax({
                method: 'POST',
                url: './submitPartner.php',
                data: {
                    firstName: fName.value,
                    lastName: lName.value,
                    email: email.value,
                    website: website.value,
                    goal: goalSelect.value,
                    typeBusiness: typeBusinessSelect.value,
                    text: anyText.value

                },
            })
                .done(function (response) {
                    $('.partner-form').fadeOut();
                    $('.partner-success-submit').fadeIn();
                })
                .fail(function (response) {
                    $('.partner-form').fadeOut();
                    $('.partner-success-submit').fadeIn();
                })
            form.reset();
        }

    })


});