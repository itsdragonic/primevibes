// Example primeVibes function
function primeVibes(n) {
  n = parseInt(n, 10);
  if (isNaN(n) || n < 2) return "Integers only!";

  // Check if prime
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return `${n} is not prime.`;
  }
  return `${n} is prime!`;
}

// Wire up button
document.getElementById("goButton").addEventListener("click", () => {
  const input = document.getElementById("numberInput").value;
  const result = primeVibes(input);
  document.getElementById("outputBox").textContent = result;
});