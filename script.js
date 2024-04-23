let player1ChoiceValue = '';
let player2ChoiceValue = '';

function playerChoice(player, choice) {
    const playerChoiceDiv = document.getElementById(`${player}Choice`);
    const choiceText = `Pemain ${player.slice(-1)} memilih ${choice}.`;
    playerChoiceDiv.innerText = choiceText;

    // Tambahkan gambar ke dalam div pemilihan
    const choiceImage = document.createElement('img');
    choiceImage.src = `${choice}.png`; // Pastikan gambar tersedia dengan nama yang benar
    choiceImage.alt = choice;
    choiceImage.title = choiceText;
    playerChoiceDiv.appendChild(choiceImage);

    if (player === 'player1') {
        player1ChoiceValue = choice;
    } else {
        player2ChoiceValue = choice;
    }
    checkResult();
}

function checkResult() {
    if (player1ChoiceValue !== '' && player2ChoiceValue !== '') {
        let result = '';

        if (player1ChoiceValue === player2ChoiceValue) {
            result = 'Seri!';
        } else if (
            (player1ChoiceValue === 'batu' && player2ChoiceValue === 'gunting') ||
            (player1ChoiceValue === 'kertas' && player2ChoiceValue === 'batu') ||
            (player1ChoiceValue === 'gunting' && player2ChoiceValue === 'kertas')
        ) {
            result = 'Pemain 1 Menang!';
        } else {
            result = 'Pemain 2 Menang!';
        }

        // Tampilkan hasil dengan mengganti gambar resultImage
        const resultImage = document.getElementById('resultImage');
        resultImage.src = `${result.toLowerCase()}.png`; // Pastikan gambar hasil tersedia dengan nama yang benar
        resultImage.alt = result;
        resultImage.title = result;

        // Tampilkan tombol Ambil Hadiah
        const ambilHadiahButton = document.getElementById('ambilHadiah');
        ambilHadiahButton.style.display = 'block';
    }
}

function ambilHadiah() {
    alert('Selamat! Anda telah memenangkan hadiah!');
}


function ambilHadiah() {
    alert('Selamat! Anda telah memenangkan hadiah!');
}
