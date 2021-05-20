function addition(){
    let first_number = +document.getElementById('first-number').value;
    let second_number = +document.getElementById('second-number').value;
    result_addition = first_number + second_number;
    document.getElementById('result').innerHTML = "Result Addition: " + result_addition;
}
function subtraction(){
    let first_number = +document.getElementById('first-number').value;
    let second_number = +document.getElementById('second-number').value;
    result_subtraction = first_number - second_number;
    document.getElementById('result').innerHTML = "Result Subtraction: " + result_subtraction;
}
function multiplication(){
    let first_number = +document.getElementById('first-number').value;
    let second_number = +document.getElementById('second-number').value;
    result_multiplication = first_number * second_number;
    document.getElementById('result').innerHTML = "Result Multiplication: " + result_multiplication;
}
function division(){
    let first_number = +document.getElementById('first-number').value;
    let second_number = +document.getElementById('second-number').value;
    result_division = first_number / second_number;
    document.getElementById('result').innerHTML = "Result Division: " + result_division;
}