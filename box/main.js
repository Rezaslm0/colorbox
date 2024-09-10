const colorbox = document.querySelector(".colorbox");
const audio = document.querySelector("audio");

let Color = getComputedStyle(colorbox).backgroundColor; 
let x = 0; 
let y = 0; 
const moveAmount = 10; 

document.addEventListener("keydown", press);
colorbox.addEventListener("mouseover", hover);
colorbox.addEventListener("mouseleave", out);
document.addEventListener("keydown", move);

function press(event) {
    if (event.key === '1') { 
        colorbox.style.background = "blue";
        Color = colorbox.style.background;
    } else if (event.key === '2') { 
        colorbox.style.background = "black";
        Color = colorbox.style.background;
    } else if (event.key === '3') { 
        colorbox.style.background = "yellow";
        Color = colorbox.style.background;
    } else if (event.key === 'p') { 
        audio.play();
    } else if (event.key === 's') { 
        audio.pause();
        audio.currentTime = 0;
    }
}


function hover() {
    colorbox.style.background = "white";
}

function out() {
    colorbox.style.background = Color;
}

function move(event) {
    if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) {
        event.preventDefault();
    }
    if (event.key === "ArrowLeft") { 
        x -= moveAmount;
    } else if (event.key === "ArrowRight") { 
        x += moveAmount;
    } else if (event.key === "ArrowUp") { 
        y -= moveAmount;
    } else if (event.key === "ArrowDown") { 
        y += moveAmount;
    }

    colorbox.style.transform = `translate(${x}px, ${y}px)`;
}

