const container = document.querySelector('.product-thumb');
const jumbo = document.querySelector('.figure-img');
const thumbs = document.querySelectorAll('.thumb')

container.addEventListener('click', function (e) {

    if (e.target.className == 'thumb') {

        jumbo.src = e.target.src;
        jumbo.classList.add('fade1');
        setTimeout(function () {
            jumbo.classList.remove('fade1');
        }, 500);

        thumbs.forEach(function (thumb) {
            thumb.className = 'thumb';
        });

        e.target.classList.add('active-img');
    }

});