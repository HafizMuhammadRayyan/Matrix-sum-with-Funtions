let input1 = "";
let input2 = "";

function start() {

    let matInp1 = document.querySelector("#matInp1");
    let matInp2 = document.querySelector("#matInp2");
    let matResult = document.querySelector("#matResult");

    matInp1.innerHTML = "";
    matInp2.innerHTML = "";
    matResult.innerHTML = "";

    input1 = +document.querySelector('#input1').value;
    input2 = +document.querySelector('#input2').value;

    if (input1 !== input2) {
        alert("Please enter the same number for both inputs");
        return;
    };

    if (isNaN(input1) || isNaN(input2)) {
        alert("Please enter a number");
        return;
    };

    if (input1 < 2 || input2 < 2) {
        alert("Please enter a number greater than 1");
        return;
    };

    for (let i = 0; i < input1; i++) {
        for (let j = 0; j < input2; j++) {
            matInp1.innerHTML +=
                `<input type="number" required min="0" max="100" id="m1-${i}-${j}" value="0">`;
            matInp2.innerHTML +=
                `<input type="number" required min="0" max="100" id="m2-${i}-${j}" value="0">`;
            matResult.innerHTML +=
                `<input type="number" disabled required min="0" max="100" id="matResult-${i}-${j}" value="0">`;
        };
        matInp1.innerHTML += `<br>`;
        matInp2.innerHTML += `<br>`;
        matResult.innerHTML += `<br>`;
    };
    document.querySelector("#metrixInputForm").classList.remove("hidden");
};

function Calculate() {

    let matrix1 = [];
    let matrix2 = [];

    for (let i = 0; i < input1; i++) {
        for (let j = 0; j < input2; j++) {
            console.log("running");
            if (matrix1[i] === undefined) matrix1[i] = []
            if (matrix2[i] === undefined) matrix2[i] = []

            matrix1[i][j] = +document.querySelector(`#m1-${i}-${j}`).value
            matrix2[i][j] = +document.querySelector(`#m2-${i}-${j}`).value
        };
    };

    let result;
    let ddOptions = document.querySelector('#ddOptions');
    let value = ddOptions.options[ddOptions.selectedIndex].value
    console.log(value);

    if (value == "+") {
        result = addMatrix(matrix1, matrix2)
    }
    else if (value == "-") {
        result = subMatrix(matrix1, matrix2)
    }
    else if (value == "*") {
        result = mulMatrix(matrix1, matrix2)
    }
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result[i].length; j++) {
            document.querySelector(`#matResult-${i}-${j}`).value = result[i][j];
        };
    };

};


// _______________"Funtions"_______________

function addMatrix(matrix1, matrix2) {      //Addition Matrix
    let result = [];
    for (let i = 0; i < matrix1.length; i++) {
        result[i] = [];
        for (let j = 0; j < matrix1[i].length; j++) {
            result[i][j] = matrix1[i][j] + matrix2[i][j];
        };
    };
    return result;
};

function subMatrix(matrix1, matrix2) {      //Subtraction Matrix
    let result = []
    for (let i = 0; i < matrix1.length; i++) {
        result[i] = []
        for (let j = 0; j < matrix1[i].length; j++) {
            result[i][j] = matrix1[i][j] - matrix2[i][j]
        };
    };
    return result
};

function mulMatrix(matrix1, matrix2) {      //Multiplication Matrix
    var aNumRows = matrix1.length, aNumCols = matrix1[0].length,
        bNumRows = matrix2.length, bNumCols = matrix2[0].length,
        result = new Array(aNumRows); 
    for (var r = 0; r < aNumRows; ++r) {
        result[r] = new Array(bNumCols); 
        for (var c = 0; c < bNumCols; ++c) {
            result[r][c] = 0            
            for (var i = 0; i < aNumCols; ++i) {
                result[r][c] += matrix1[r][i] * matrix2[i][c] 
            };
        };
    };
    return result
};