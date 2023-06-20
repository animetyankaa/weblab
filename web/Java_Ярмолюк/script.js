
var imageContainers = document.querySelectorAll('.image-container');
imageContainers.forEach(function (container) {
    container.addEventListener('mouseover', function () {
        container.querySelector('.overlay').style.opacity = '1';
    });
    container.addEventListener('mouseout', function () {
        container.querySelector('.overlay').style.opacity = '0';
    });
});