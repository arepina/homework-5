var rect = document.getElementsByClassName('dragElement')[0];

rect.onmousedown = function(e) {

    var coords = getCoords(rect);
    var shiftX = e.pageX - coords.left;
    var shiftY = e.pageY - coords.top;

    rect.style.position = 'absolute';
    document.body.appendChild(rect);
    moveAt(e);

    rect.style.zIndex = 1000; // над другими элементами

    function moveAt(e) {
        rect.style.left = e.pageX - shiftX + 'px';
        rect.style.top = e.pageY - shiftY + 'px';
    }

    document.onmousemove = function(e) {
        moveAt(e);
    };

    rect.onmouseup = function() {
        document.onmousemove = null;
        rect.onmouseup = null;
    };

}

rect.ondragstart = function() {
    return false;
};

function getCoords(elem) {   // кроме IE8-
    var box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}