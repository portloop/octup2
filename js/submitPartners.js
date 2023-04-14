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
            item.classList.remove('error')
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
    })





    submitPartner.addEventListener('click', (event) => {
        event.preventDefault();
        let hasError = false;

        if (!fName.value) {
            hasError = true;
            fName.classList.add('error')
        }

        if (!lName.value) {
            hasError = true;
            lName.classList.add('error')
        }

        if (!email.value || !validateEmail(email.value)) {
            hasError = true;
            email.classList.add('error');
        }

        if (!website.value) {
            hasError = true;
            website.classList.add('error')
        }
        if (selectGoalValidate()) {
            hasError = true;
        }

        if (selecBusinessValidate()) {
            hasError = true;
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
                })
                .fail(function (response) {
                })
            form.reset();
        }

    })


});