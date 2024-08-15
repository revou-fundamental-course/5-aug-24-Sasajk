let button = document.getElementById('btn');

button.addEventListener('click', () => {
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('output');
    let height_status = false, weight_status = false;

    if (isNaN(height) || height <= 0) {
        document.getElementById('height_error').innerHTML = 'Please provide a valid height';
    } else {
        document.getElementById('height_error').innerHTML = '';
        height_status = true;
    }

    if (isNaN(weight) || weight <= 0) {
        document.getElementById('weight_error').innerHTML = 'Please provide a valid weight';
    } else {
        document.getElementById('weight_error').innerHTML = '';
        weight_status = true;
    }

    if (height_status && weight_status) {
        const heightInMeters = height / 100; // Convert height to meters
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

        if (bmi < 18.6) {
            result.innerHTML = 'Under weight : ' + bmi;
        } else if (bmi >= 18.6 && bmi < 24.9) {
            result.innerHTML = 'Normal : ' + bmi;
        } else {
            result.innerHTML = 'Over weight : ' + bmi;
        }
    } else {
        alert('The form has errors');
        result.innerHTML = '';
    }
});