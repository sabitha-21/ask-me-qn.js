
document.getElementById('accept-button').addEventListener('click', function() {
    const question = document.getElementById('question-input').value;
    alert(`You accepted: ${question}`);
});

document.getElementById('decline-button').addEventListener('click', function() {
    const question = document.getElementById('question-input').value;
    alert(`You declined: ${question}`);
});
