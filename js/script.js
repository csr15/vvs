function viewMore(index) {
  const cards = document.querySelectorAll(".cards .card-hover");
  cards[index].style.transform = "translate(-50%, -50%) scale(1)";
}

function closeViewMore(index) {
  const cards = document.querySelectorAll(".cards .card-hover");
  cards[index].style.transform = "translate(-50%, -50%) scale(0)";
}

console.log('%cDeveloped By', 'color: #2922e9; font-size: 20px');
console.log('%cRagul CS', 'background: #8eefda; color: #2922e9; font-size: 32px');
console.log('%cragulcs15@gmail.com', 'color: #2922e9; font-size: 20px');
