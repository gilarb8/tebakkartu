// Array of card emojis
const cardEmojis = [
  '🂡', '🂢', '🂣', '🂤', '🂥', '🂦', '🂧', '🂨', '🂩', '🂪', '🂫', '🂭', '🂮',
  '🂱', '🂲', '🂳', '🂴', '🂵',
]

// Mengambil elemen-elemen yang diperlukan dari DOM
const cardEmojiElement = document.getElementById('card-emoji');
const btnBigger = document.getElementById('btn-bigger');
const btnSmaller = document.getElementById('btn-smaller');
const resultTextElement = document.getElementById('result-text');
const btnPlayAgain = document.getElementById('btn-play-again');

// Inisialisasi variabel global
let currentCardEmoji;
let nextCardEmoji;

// Menyembunyikan tombol-tombol dan hasil awal permainan
btnPlayAgain.style.display = 'none';
resultTextElement.style.display = 'none';

// Fungsi untuk mengacak emoji kartu
function shuffleCardEmoji() {
  const emojis = [...cardEmojis]; // Membuat salinan baru dari array emoji kartu
  emojis.sort(() => Math.random() - 0.5); // Mengacak urutan emoji kartu
  return emojis;
}

// Fungsi untuk menampilkan kartu berikutnya
function showNextCard() {
  currentCardEmoji = nextCardEmoji;
  cardEmojiElement.textContent = currentCardEmoji;

  // Mengacak emoji kartu untuk kartu berikutnya
  const shuffledEmojis = shuffleCardEmoji();
  nextCardEmoji = shuffledEmojis[0];
}

// Fungsi untuk memulai permainan baru
function startGame() {
  // Mengacak emoji kartu untuk kartu awal
  const shuffledEmojis = shuffleCardEmoji();
  currentCardEmoji = shuffledEmojis[0];
  cardEmojiElement.textContent = currentCardEmoji;

  // Mengacak emoji kartu untuk kartu berikutnya
  nextCardEmoji = shuffledEmojis[1];

  // Menampilkan tombol-tombol dan menyembunyikan hasil permainan
  btnBigger.style.display = 'inline-block';
  btnSmaller.style.display = 'inline-block';
  resultTextElement.style.display = 'none';
  btnPlayAgain.style.display = 'none';
}

// Fungsi untuk mengakhiri permainan
function endGame() {
  // Menyembunyikan tombol-tombol dan menampilkan hasil permainan
  btnBigger.style.display = 'none';
  btnSmaller.style.display = 'none';
  resultTextElement.style.display = 'block';
  btnPlayAgain.style.display = 'inline-block';
}

// Fungsi untuk mengevaluasi jawaban pengguna
function evaluateAnswer(answer) {
  if (
    (answer === 'bigger' && nextCardEmoji > currentCardEmoji) ||
    (answer === 'smaller' && nextCardEmoji < currentCardEmoji)
  ) {
    resultTextElement.textContent = 'Anda Benar!';
  } else {
    resultTextElement.textContent = 'Anda Salah!';
  }
  endGame();
}

// Event listener untuk tombol "Lebih Besar"
btnBigger.addEventListener('click', () => {
  evaluateAnswer('bigger');
});

// Event listener untuk tombol "Lebih Kecil"
btnSmaller.addEventListener('click', () => {
  evaluateAnswer('smaller');
});

// Event listener untuk tombol "Main Lagi"
btnPlayAgain.addEventListener('click', () => {
  startGame();
});

// Memulai permainan ketika halaman dimuat
startGame();
