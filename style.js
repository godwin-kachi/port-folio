function changeBodyBg(color) {
     document.body.style.background = color;
     document.getElementById('lightBulb').src = 'images/pic_bulbon.gif';
     // document.paragraph.style.color = blue;
}

function putOffBulb(color) {
     document.body.style.background = color;
     document.getElementById('lightBulb').src = 'images/pic_bulboff.gif';
}

function callMessage() {
     alert("Scroll down to see the switch to control the theme of this sample design")
}