    $(document).ready(function() {


        $("select").change(function() {

            let country = $('#country option:selected').val();
            console.log(country)
            switch (country) {
                case "RU":
                    $("#phone").mask("+7(999) 999-99-99");
                    break;
                case "UA":
                    $("#phone").mask("+7(00) 00999-99-99");
                    break;
                case "USA":
                    $("#phone").mask("+7(999) 999-99-99");
                    break;
            }
        }).change()


        $('#form').submit(function(e) {
            console.log(1)
            e.preventDefault();
            let first_name = $('#firstname').val();
            let last_name = $('#secondname').val();
            let email = $('#email').val();
            let password = $('#password').val();
            let second_password = $('#secondpassword').val()
            let agree = $('#agree');

            $(".form__error").remove();

            if (first_name.length < 2 || first_name === ' ') {
                $('#firstname').after('<span class="form__error">The name must be more than 2 characters</span>');
            }
            if (last_name.length < 1) {
                $('#secondname').after('<span class="form__error">The name must be more than 2 characters</span>');
            }
            if (email.length < 1) {
                $('#email').after('<span class="form__error">Email is not correct</span>');
            } else {
                let regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}.){1,125}[A-Z]{2,63}$/;
                let validEmail = regEx.test(email);
                if (!validEmail) {
                    $('#email').after('<span class="form__error">Email is not correct</span>');
                }
            }
            if (password.length < 1) {
                $('#password').after('<span class="form__error">Password is not correct</span>');
            } else {
                let pattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{1,}$/
                let validPassword = pattern.test(password)
                if (!validPassword) {
                    $('#password').after('<span class="form__error">Password must have 1 letter, 1 number and one symbol</span>');
                }
            }
            if (password != second_password) {
                $('#secondpassword').after('<span class="form__error">Password does not match</span>');
            }
            agree.each(function() {
                if (!$(this).prop('checked')) {
                    $('.form__label').addClass('error')
                    setTimeout(() => {
                        $('.form__label').removeClass('error')
                    }, 4000);
                }
            });


            setTimeout(() => {
                $(".form__error").remove();
            }, 4000);
        });

    });