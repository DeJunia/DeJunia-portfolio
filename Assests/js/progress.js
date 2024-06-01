document.addEventListener("DOMContentLoaded", () => {

const progressBars = [
  { id: 'progress1', percentage: 90 },
  { id: 'progress2', percentage: 85 },
  { id: 'progress3', percentage: 30 }
];

progressBars.forEach(bar => {
  const progressBar = document.getElementById(bar.id);
  const progressText = progressBar.querySelector('.progress-text');
  const progressCircle = progressBar.querySelector('.circle-progress');

  const radius = progressCircle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;
  
  progressCircle.style.strokeDasharray = `${circumference}`;
  progressCircle.style.strokeDashoffset = `${circumference}`;
  
  const offset = circumference - (bar.percentage / 100) * circumference;
  progressCircle.style.strokeDashoffset = offset;

  progressText.textContent = `${bar.percentage}%`;
});



});

function updateProgressBars() {

let widths = [95, 92, 86, 59, 80, 80, 90, 69, 100, 35, 90, 70, 85, 60];

for (let i = 0; i < widths.length; i++) {
  let prgs = document.getElementById('prg-' + (i + 1));
  prgs.style.width = widths[i] + '%';
}
}

updateProgressBars();