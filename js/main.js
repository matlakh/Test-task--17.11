let $inputItem = $(".js-inputWrapper");
$inputItem.length &&
    $inputItem.each(function() {
        let $this = $(this),
            $input = $this.find(".form__input"),
            placeholderTxt = $input.attr("placeholder"),
            $placeholder;

        $input.after(
                '<span class="input__placeholder">' + placeholderTxt + "</span>"
            ),
            $input.attr("placeholder", ""),
            ($placeholder = $this.find(".input__placeholder")),
            $input.val().length ?
            $this.addClass("active") :
            $this.removeClass("active"),
            $input
            .on("focusout", function() {
                $input.val().length ?
                    $this.addClass("active") :
                    $this.removeClass("active");
            })
            .on("focus", function() {
                $this.addClass("active");
            });
    });

$('.form__select').each(function() {
    let $this = $(this),
        selectOption = $this.find('option'),
        selectOptionLength = selectOption.length,
        selectedOption = selectOption.filter(':selected'),
        dur = 500;

    $this.hide();
    $this.wrap('<div class="form__select form__item"  data-scroll></div>');

    $('<div>', {
        class: 'form__select--gap input__location js-input ',
        text: 'Country'
    }).insertAfter($this);

    let selectGap = $this.next('.form__select--gap'),
        caret = selectGap.find('.caret');
    $('<ul>', {
        class: 'select__list'
    }).insertAfter(selectGap);

    let selectList = selectGap.next('.select__list');
    // Add li - option items
    for (let i = 0; i < selectOptionLength; i++) {
        $('<li>', {
                class: 'select__item',
                html: $('<span>', {
                    text: selectOption.eq(i).text()
                })
            })
            .attr('data-value', selectOption.eq(i).val())
            .appendTo(selectList);
    }
    let selectItem = selectList.find('li');

    selectList.slideUp(0);
    selectGap.on('click', function() {
        if (!$(this).hasClass('on')) {
            $(this).addClass('on');
            selectList.slideDown(dur);

            selectItem.on('click', function() {
                let chooseItem = $(this).data('value');

                switch (chooseItem) {
                    case "RU":
                        $("#phone").mask("+7(999) 999-99-99");
                        break;
                    case "UA":
                        $("#phone").mask("+38(099) 999-99-99");
                        break;
                    case "USA":
                        $("#phone").mask("+1(999) 999-99-99");
                        break;
                }
                $('select').val(chooseItem).attr('selected', 'selected');
                selectGap.text($(this).find('span').text());

                selectList.slideUp(dur);
                selectGap.removeClass('on');
            });

        } else {
            $(this).removeClass('on');
            selectList.slideUp(dur);
        }
    });
});
ScrollOut({
    threshold: .6,
    once: true
});