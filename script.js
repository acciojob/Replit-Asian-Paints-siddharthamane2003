// your JS code here

const changeBtn = document.getElementById("change_button");
const resetBtn = document.getElementById("reset_button");

changeBtn.addEventListener("click", () => {

    const blockId = document.getElementById("block_id").value;
    const color = document.getElementById("colour_id").value;

    const blocks = document.querySelectorAll(".grid-item");
    blocks.forEach(block => block.style.backgroundColor = "transparent");

    const selectedBlock = document.getElementById(blockId);
    if (selectedBlock) {
        selectedBlock.style.backgroundColor = color;
    }
});

resetBtn.addEventListener("click", () => {
    const blocks = document.querySelectorAll(".grid-item");
    blocks.forEach(block => block.style.backgroundColor = "transparent");
});
