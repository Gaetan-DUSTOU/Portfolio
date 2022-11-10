const nbr_faces = 12;
const box = document.querySelector("#box");
var faces = new Array(nbr_faces);
var paused = false;

for (let i=0; i<nbr_faces; i++) {
    faces[i] = document.querySelector("#face-"+ (i +1) +">img");
    faces[i].addEventListener("mouseenter", mouse_enter, false);
    faces[i].addEventListener("mouseout", mouse_out, true);
    faces[i].param = i+1;
}

function mouse_enter(event) {
    var id = event.currentTarget.param;

    //box.pause();
    if (!paused) {
        box.style.animationPlayState = "paused";
        console.log(box.style.animationPlayState);
    } else {
        box.style.animationPlayState = "running";
        console.log(box.style.animationPlayState);
    }
    paused = !paused;
}
function mouse_out(event) {
    var id = event.currentTarget.param;

    //box.pause();
    if (!paused) {
        box.style.animationPlayState = "paused";
        console.log(box.style.animationPlayState);
    } else {
        box.style.animationPlayState = "running";
        console.log(box.style.animationPlayState);
    }
    paused = !paused;
}

// images PopUp
document.querySelectorAll('#box img').forEach(image =>{
    image.onclick = () => {
        document.querySelector('.popup-img').style.display = 'block';
        document.querySelector('.popup-img img').src = image.getAttribute('src');
    }        
});

document.querySelector('.popup-img span').onclick = () =>{
    document.querySelector('.popup-img').style.display = 'none';
}
    
    