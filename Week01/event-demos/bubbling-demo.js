var grandParent = document.querySelector('.grandparent');
var parent = document.querySelector('.parent');
var button = document.querySelector('#click-me');

function listener(e) {
    console.log(e.target);
}

grandParent.addEventListener('click', listener);
