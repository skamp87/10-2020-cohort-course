var currentPosition = 0;

var nextImage = function() {
    if (currentPosition > -2000) {
        currentPosition = currentPosition - 500;
    document.getElementById('imageslider-2').style.transform = 'translateX(' + currentPosition + 'px)'
    } 
    console.log(currentPosition)
}

var prevImage = function() {
    if (currentPosition < 0) {
    currentPosition = currentPosition + 500;
    document.getElementById('imageslider-2').style.transform = 'translateX(' + currentPosition + 'px)'
    }
    console.log(currentPosition)
}

