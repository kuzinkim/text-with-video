document.addEventListener('DOMContentLoaded', function () {

    function changeText() {
        if(window.matchMedia("(max-width: 780px)").matches) {
            let span = document.createElement('span');
            span.innerHTML = 'effortless, so you';
            document.querySelector('.text__row_hidden').appendChild(span);
        }
    }

    window.addEventListener('resize', function () {
        if(window.matchMedia("(max-width: 780px)").matches && !document.querySelector('.text__row_hidden span')) {
            changeText();
        }
    });

    changeText();
})