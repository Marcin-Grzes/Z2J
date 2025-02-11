// Pobrać wszystkie przyciski z HTML
const buttons = document.querySelectorAll('.btn');
const messages = document.querySelector('p');
// Konwersja NodeList przycisków na tablicę dla łatwiejszej manipulacji
const buttonsArray = Array.from(buttons);

// Stworzyć tablicę reprezentującą stan planszy (pusta = '', 'X' dla gracza, 'O' dla komputera)
// W niej będą zapisywane poszczególne ruchy.
let board = ['', '', '', '', '', '', '', '', ''];

// Określenie czyja jest tura (true = gracz, false = komputer)
let isPlayerTurn = true;

// Symbole dla graczy
const PLAYER_SYMBOL = 'X';
const COMPUTER_SYMBOL = 'O';

// Flaga określająca czy gra się zakończyła
let isGameOver = false;

// Wszystkie możliwe kombinacje wygrywające
const WINNING_COMBINATIONS = [
    // Poziome
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Pionowe
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Przekątne
    [0, 4, 8],
    [2, 4, 6]
];



// Nasłuchiwanie na kliknięcie użytkownika. Przy kliknięciu jest wywoływana
// funkcja obsługująca to, co się dzieje przez kliknięcie (handlePlayerMove).
buttonsArray.forEach((button, index) => {
    button.addEventListener('click', () => {
    if(board[index] === '' && isPlayerTurn && !isGameOver)
    {PlayerMove(index)}})
})

// Funkcja obsługująca to, co się dzieje przez kliknięcie gracza
const PlayerMove = function (index) {

    // Aktualizacja planszy - do tablicy przypisujemy symbol gracza w miejscu
    // odpowiadającym na planszy poprzez index przypisujemy symbol gracza
    board[index] = PLAYER_SYMBOL;

    //Na planszy w przycisku button dodajemy klasę 'X' która jest ostylowana w CSS
    buttonsArray[index].textContent = PLAYER_SYMBOL;
    buttonsArray[index].classList.add('X');

    //Koniec tury gracza, zmiana na turę komputera.
    isPlayerTurn = false;

    // Opóźnienie wywołanie ruchu komputera
    if (!checkGameStatus()) {
        setTimeout(ComputerMove, 500);
    }
}

// Funkcja obsługująca ruch komputera
const ComputerMove = function () {

    // Sprawdzenie, jakie są wolne pola na planszy
    // map mapuje pola i wolne pola są jako indeksy tych pul, a zajęte jako null
    // filter - odfiltrowuje null z tablicy, w efekcie zostaje tablica z indeksami wolnych pól
    let availableMoves = board
        .map((cell, i) => cell === '' ? i : null)
        .filter(i => i !== null);

    // If sprawdza czy są wolne pola, czy to nie jest tura gracza i gra nie jest zakończona
    // Metoda random losuje cyfrę (index) z tablicy indexów wolnych pól.
    // Umieszenie symbolu 'O' w miejsce wylosowanego indexy na tablicy board oraz w HTML.
    if (availableMoves.length > 0 && !isPlayerTurn && !isGameOver){
        let randomIndex = availableMoves[Math
            .floor(Math
                .random() * availableMoves.length)];
        board[randomIndex] = COMPUTER_SYMBOL;
        buttonsArray[randomIndex].textContent = COMPUTER_SYMBOL;
        buttonsArray[randomIndex].classList.add('O');
        isPlayerTurn = true;

        checkGameStatus();
    }
}

/*Ta funkcja sprawdza, czy podany symbol (X lub O) utworzył wygrywającą kombinację.
Warunkiem metody some jest metoda every, która sprawdza, czy cała kombinacja spełnia
warunek, że wszystkie pola są X lub O
Działa ona w następujący sposób:
-WINNING_COMBINATIONS zawiera wszystkie możliwe kombinacje wygrywające (np. [0,1,2], [3,4,5] itd.)
-Metoda some() sprawdza, czy przynajmniej jedna z tych kombinacji spełnia warunek
-Dla każdej kombinacji używamy metody every(),
która sprawdza czy wszystkie pola w tej kombinacji zawierają ten sam symbol*/
const checkWin = function (symbol) {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => board[index] === symbol);
    })
}

// Funkcja sprawdzająca czy nastąpił remis
const checkDraw = function () {
    return board.every(cell => cell !== '');
}

// Funkcja sprawdzająca stan gry

const checkGameStatus = function () {
    if(checkWin(PLAYER_SYMBOL)) {
        isGameOver = true;
        setTimeout(() => {
            alert('Wygrałeś!');
            messages.innerText = 'Wygrał użytkownik';
            showRestartButton();
        },100);
        return true;
    }
    if (checkWin(COMPUTER_SYMBOL)) {
        isGameOver = true;
        setTimeout(() => {
            alert('Komputer wygrał!');
            messages.textContent = 'Wygrał matrix';
            showRestartButton();
        },100);
    }
    if (checkDraw()) {
        isGameOver = true;
        setTimeout(() => {
            alert('Remis!');
            messages.textContent = 'Remis';
            showRestartButton();
        }, 100);
        return true;
    } return false
}

// Tworzenie przycisku reset

const resetButton = document.createElement('button');
resetButton.textContent = 'Restartuj grę';
resetButton.classList.add('reset-button');
document.body.appendChild(resetButton);

// Funkcja pokazująca przycisk reset
const showRestartButton = () => {
    resetButton.style.display = 'block';
}


const resetGame = function () {
    // Resetowanie stanu planszy
    board = ['', '', '', '', '', '', '', '', ''];

    // Resetowanie wyglądu przycisków
    buttonsArray.forEach(button => {
        button.textContent = '';
        button.classList.remove('X', 'O');
    });

    // Resetowanie stanu gry
    isGameOver = false;
    isPlayerTurn = true;

    // Ukrywanie przycisku reset
    resetButton.style.display = 'none';

    // Ukrycie napisu
    messages.innerText = '';
}

// Nasłuchiwanie na naciśnięcie przycisku button
resetButton.addEventListener('click', resetGame);


resetGame()