let num_a = parseInt(prompt("Enter num a: "));
let num_b = parseInt(prompt("Enter num b: "));
let formula_for_sum_numbers ={
    priority1:Math.pow(num_a+num_b,2),
    priority2:(Math.pow(num_a,2)+((2*num_a)*num_b)),
    priority3: num_b === 0 ? alert("Error! Number b can't be 0!") : Math.pow(num_b, 2)
};
alert((formula_for_sum_numbers.priority1 - formula_for_sum_numbers.priority2)
    / formula_for_sum_numbers.priority3);

