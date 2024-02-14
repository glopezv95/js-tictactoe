let divs = document.querySelectorAll(".cell")
let divsArray = Array.from(divs)
let reset = document.querySelector("#reset")
let commit = document.querySelector("#commit")
let header = document.querySelector("h1")
let primaryColor = getComputedStyle(document.documentElement).getPropertyValue("--primary-color")

let row1 = [divsArray[0], divsArray[1], divsArray[2]]
let row2 = [divsArray[3], divsArray[4], divsArray[5]]
let row3 = [divsArray[6], divsArray[7], divsArray[8]]

let matrix = [row1, row2, row3]
let item = "X"

function check() {
        for (let row = 0; row < 3; row++) {
            if (matrix[row][0].textContent === item &&
                matrix[row][1].textContent === item &&
                matrix[row][2].textContent === item) {
                    header.textContent = "GAME FINISHED";
                    matrix[row][0].style.color = "red";
                    matrix[row][1].style.color = "red";
                    matrix[row][2].style.color = "red";}
        }

        for (let col = 0; col < 3; col++) {
            if (matrix[0][col].textContent === item &&
                matrix[1][col].textContent === item &&
                matrix[2][col].textContent === item) {
                    header.textContent = "GAME FINISHED";
                    matrix[0][col].style.color = "red";
                    matrix[1][col].style.color = "red";
                    matrix[2][col].style.color = "red";}
        }

        if (
            matrix[0][0].textContent === item && 
            matrix[1][1].textContent === item && 
            matrix[2][2].textContent === item) {
                header.textContent = "GAME FINISHED";
                matrix[0][0].style.color = "red"; 
                matrix[1][1].style.color = "red"; 
                matrix[2][2].style.color = "red";}

        if (
            matrix[0][2].textContent === item && 
            matrix[1][1].textContent === item && 
            matrix[2][0].textContent === item) {
                header.textContent = "GAME FINISHED";
                matrix[0][2].style.color = "red"; 
                matrix[1][1].style.color = "red"; 
                matrix[2][0].style.color = "red"};
}

divsArray.forEach(cell => {
    cell.addEventListener("click", function () {
        if (cell.textContent === "") {cell.textContent = item}
        else {cell.textContent = ""};
    })
});

reset.addEventListener("click", function () {
    divsArray.forEach(element => {
        element.textContent = "";
        header.textContent = "TIC TAC TOE";
        element.style.color = primaryColor;
    })
})

commit.addEventListener("click", function () {
    check();
    if (item === "X") {item = "O"}
    else if (item === "O") {item = "X"};
})