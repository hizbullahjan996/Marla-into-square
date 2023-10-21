document.getElementById("converter-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const marla = parseFloat(document.getElementById("marla").value);
    if (!isNaN(marla)) {
        const squareFeet = marla * 272.25; // 1 Marla = 272.25 square feet
        document.getElementById("square-feet").textContent = `${marla} Marla = ${squareFeet} Square Feet`;
        document.getElementById("result").classList.remove("hidden");
    }
});
