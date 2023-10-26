<!DOCTYPE html>
<html>
<head>
    <title>Number Guessing Game</title>
</head>
<body>
    <h1>Number Guessing Game</h1>
    <p>Guess a number between 1 and 100.</p>
    <input type="text" id="guess" placeholder="Enter your guess">
    <button onclick="checkGuess()">Submit Guess</button>
    <p id="message"></p>

    <script>
        // Generate a random number between 1 and 100
        const targetNumber = Math.floor(Math.random() * 100) + 1;
        let attempts = 0;

        function checkGuess() {
            const guess = parseInt(document.getElementById("guess").value);
            attempts++;

            if (isNaN(guess)) {
                document.getElementById("message").innerHTML = "Please enter a valid number.";
            } else if (guess === targetNumber) {
                document.getElementById("message").innerHTML = `Congratulations! You guessed the number ${targetNumber} in ${attempts} attempts.`;
            } else if (guess < targetNumber) {
                document.getElementById("message").innerHTML = "Try a higher number.";
            } else {
                document.getElementById("message").innerHTML = "Try a lower number.";
            }
        }
    </script>
</body>
</html>
