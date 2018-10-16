const inputs = document.querySelectorAll('input');
const send = document.getElementById('button_submit');

const patterns = {
    age: /^\d{2}$/,
    phone: /^\d{11}$/,
    name: /^[a-zA-Z ]{5,50}$/,
}

function validate(field, regex) {
    if(regex.test(field.value)) {
        field.className = 'valid';
        field.style.backgroundColor = 'rgba(192, 236, 163, 0.33)';
    } else {
        field.className = 'invalid';
        field.style.backgroundColor = 'rgba(255, 142, 73, 0.33)';
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        validate(e.target, patterns[e.target.attributes.name.value]);
    })
})