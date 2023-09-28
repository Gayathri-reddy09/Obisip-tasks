function updateTime() {
    const currentTimeElement = document.getElementById("currentTime");
    const now = new Date();
    const hours = now.getHours().toString().padStart(1, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const currentTimeString = `${hours}:${minutes}:${seconds}`;
    currentTimeElement.textContent = currentTimeString;
}

document.addEventListener("DOMContentLoaded", function() {
    updateTime();
    setInterval(updateTime, 1000); // Update the time every second

    const temperatureInput = document.getElementById("temperatureInput");
    const unitSelector = document.getElementById("unitSelector");
    const convertButton = document.getElementById("convertButton");
    const convertedTemperatureSpan = document.getElementById("convertedTemperature");
    const convertedUnitSpan = document.getElementById("convertedUnit");
    const currentTimeSpan = document.getElementById("currentTime");

    function convertTemperature() {
        const inputTemperature = parseFloat(temperatureInput.value);
        const selectedUnit = unitSelector.value;
        let convertedTemperature;
        let convertedUnit;

        if (isNaN(inputTemperature)) {
            alert("Please enter a valid number for temperature.");
            return;
        }

        if (selectedUnit === "celsius") {
            convertedTemperature = (inputTemperature - 32) * (5/9);
            convertedUnit = "Celsius";
        } else if (selectedUnit === "fahrenheit") {
            convertedTemperature = (inputTemperature * 9/5) + 32;
            convertedUnit = "Fahrenheit";
        } else if (selectedUnit === "kelvin") {
            convertedTemperature = inputTemperature + 273.15;
            convertedUnit = "Kelvin";
        }

        convertedTemperatureSpan.textContent = convertedTemperature.toFixed(1);
        convertedUnitSpan.textContent = convertedUnit;

        // Update the current time
        updateTime();
    }

    convertButton.addEventListener("click", convertTemperature);
});
