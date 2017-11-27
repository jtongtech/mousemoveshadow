var hero = document.querySelector('.hero');
var text = hero.querySelector('h1');
var walk = 100;

function shadow(e) {
    var width = hero.offsetWidth;
    var height = hero.offsetHeight;
    let {
        offsetX: x,
        offsetY: y
    } = e;

    if (this != e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    var xWalk = Math.round((x / width * walk) - (walk / 2));
    var yWalk = Math.round((y / width * walk) - (walk / 2));

    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 red,
    ${xWalk * -1}px ${yWalk * -1}px 0 blue,
    ${yWalk}px ${xWalk * -1}px 0 green,
    ${yWalk * -1}px ${xWalk}px 0 yellow`;
}

hero.addEventListener('mousemove', shadow);