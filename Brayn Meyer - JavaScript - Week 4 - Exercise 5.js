// TODO: Create a multiline string using template literals
let name = "Brayn"
let greeting = `Hello my name is ${name}.
I like things as well.`
console.log(greeting)
// TODO: Create a function that uses template literals for HTML generation
function html_generation(user_name, user_age, user_state){
    const html = `
        <div class="user-card">
            <h2>${user_name}</h2>
            <p>Age: ${user_age}</p>
            <p>City: ${user_state}</p>
        </div>
`;
}
// TODO: Convert regular functions to arrow functions
function add(x, y){
    return x + y
} 
let arrow_add = (x, y) => x + y;
function subtract(x, y){
    return x - y
} 
let arrow_subtract = (x, y) => x + y;
function multiply(x, y){
    return x * y
} 
let arrow_multiply = (x, y) => x * y;
// TODO: Use arrow functions with array methods
let array_slice = (a, num) => a.slice(0, num)
let array_length = (a) => a.length
let array_toString = (a) => a.toString()
function array_function(a, num){
    console.log(array_slice(a, num))
    console.log(array_length(a))
    console.log(array_toString(a))
}
array_function([0,9,8,7,6,5], 5)