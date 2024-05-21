function calculateScore() {
    const form = document.getElementById('quizForm');
    const formData = new FormData(form);
    let score = 0;

    for (const value of formData.values()) {
        score += parseInt(value);
    }

    let resultText;
    if (score >= 71) {
        resultText = "Anda memiliki predikat: Sangat Baik";
    } else if (score >= 31) {
        resultText = "Anda memiliki predikat: Cukup";
    } else {
        resultText = "Anda memiliki predikat: Kurang";
    }

    document.getElementById('result').textContent = `Total Skor: ${score}. ${resultText}`;
}
