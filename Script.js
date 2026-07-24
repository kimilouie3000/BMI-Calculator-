// Function to calculate BMI
function calculateBMI() {

    // Get the user's weight
    let weight = parseFloat(document.getElementById("weight").value);

    // Get the user's height
    let height = parseFloat(document.getElementById("height").value);

    // Check if the inputs are valid
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {

        alert("Please enter a valid weight and height.");

        return;
    }

    // Convert height from centimeters to meters
    let heightMeters = height / 100;

    // Calculate BMI
    let bmi = weight / (heightMeters * heightMeters);

    // Variable for BMI Category
    let category = "";

    // Determine BMI Category
    if (bmi < 18.5) {

        category = "UNDERWEIGHT";

    }
    else if (bmi >= 18.5 && bmi <= 24.9) {

        category = "NORMAL WEIGHT";

    }
    else if (bmi >= 25 && bmi <= 29.9) {

        category = "OVERWEIGHT";

    }
    else {

        category = "OBESE";

    }

    // Display BMI Result
    document.getElementById("bmiValue").innerHTML = bmi.toFixed(2);

    // Display BMI Category
    document.getElementById("bmiCategory").innerHTML = category;

}
