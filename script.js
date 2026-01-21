const socket = io();

const editor = document.getElementById("editor");

editor.addEventListener("input", () => {
    socket.emit("textChange", editor.value);
});

socket.on("updateText", (data) => {
    editor.value = data;
});
