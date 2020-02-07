// This is exercise #1 from
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Events

// Add your code here

var btn = document.querySelector("button");

btn.addEventListener("click", function () {
    if(btn.innerText === "The machine is on") {
        btn.innerText = "The machine is off";
    } else {
        btn.innerText = "The machine is on";
    }
});