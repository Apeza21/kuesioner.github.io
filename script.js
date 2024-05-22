document.getElementById('kuisionerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let score = 0;
    const totalQuestions = 2;

    const question1 = parseInt(document.getElementById('question1').value);
    const question2 = parseInt(document.getElementById('question2').value);

    if (!isNaN(question1)) score += question1;
    if (!isNaN(question2)) score += question2;

    const maxScore = totalQuestions * 3;
    const percentage = (score / maxScore) * 100;

    const scoreBar = document.getElementById('scoreBar');
    scoreBar.innerHTML = `<div style="width: ${percentage}%"></div>`;

    const scorePercentage = document.getElementById('scorePercentage');
    scorePercentage.textContent = `Skor Anda: ${percentage.toFixed(2)}%`;

    const result = document.getElementById('result');
    result.style.display = 'block';
});
