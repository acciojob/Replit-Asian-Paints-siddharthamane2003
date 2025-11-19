// your JS code here

const changeBtn = document.getElementById("change_button");
const resetBtn = document.getElementById("Reset");

changeBtn.addEventListener("click", () => {

    // get user inputs
    const blockId = document.getElementById("block_id").value;
    const color = document.getElementById("colour_id").value;

    // reset all blocks to transparent
    const blocks = document.querySelectorAll(".grid-item");
    blocks.forEach(block => {
        block.style.backgroundColor = "transparent";
    });

    // apply color to selected block
    const selectedBlock = document.getElementById(blockId);
    if (selectedBlock) {
        selectedBlock.style.backgroundColor = color;
    }
});

resetBtn.addEventListener("click", () => {
    const blocks = document.querySelectorAll(".grid-item");
    blocks.forEach(block => {
        block.style.backgroundColor = "transparent";
    });
});
