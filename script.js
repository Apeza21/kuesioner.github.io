function calculateResults() {
    const form = document.getElementById('questionnaireForm');
    const resultsDiv = document.getElementById('results');

    let totalQuestions = 3;
    let yesAnswers = 0;

    const formData = new FormData(form);
    formData.forEach((value, key) => {
        if (value === 'yes') {
            yesAnswers++;
        }
    });

    let percentage = (yesAnswers / totalQuestions) * 100;
    let message = '';

    if (percentage === 100) {
        message = 'Semua respon Anda positif! Terima kasih atas dukungan Anda!';
    } else if (percentage >= 66.67) {
        message = 'Sebagian besar respon Anda positif. Terima kasih atas masukan Anda!';
    } else if (percentage >= 33.33) {
        message = 'Sebagian besar respon Anda negatif. Kami akan berusaha lebih baik lagi!';
    } else {
        message = 'Semua respon Anda negatif. Kami mohon maaf dan akan melakukan perbaikan!';
    }

    resultsDiv.innerHTML = `<p>${message}</p>`;
}
