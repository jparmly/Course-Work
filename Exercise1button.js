function changeBackground() {
    document.body.style.backgroundColor = "#bae6fd";
}


const javascriptSingleButton = document.querySelector(".btn_onclick");

javascriptSingleButton.onclick = function () {
    document.body.style.backgroundColor = "#a7f3d0";
};

function changeBgToRandom() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
document.body.style.backgroundColor = `#${randomColor}`;
}

const eventListenerButton = document.querySelector(".btn_event-listener");

eventListenerButton.addEventListener("click", changeBgToRandom);


