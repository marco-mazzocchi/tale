# Introduzione

Questa applicazione permette di creare un libro game che gira su browser senza bisogno di tecnologia server.
L'utente visualizza una pagina per volta ed effettua delle scelte che possono diramarsi in diverse storie a seconda delle decisioni prese.
Le scelte fatte dall'utente inoltre possono assegnare dei punti e/o essere protette da password se si desidera sottoporre l'utente a delle prove esterne all'applicazione prima che prosegua.

# Teconologia

Questa applicazione è basata unicamente su tecnologia browser. Non esiste un server o un database i dati salvati (avanzamento della storia e punteggi) sono memroizzati nel [LocalStorage](https://developer.mozilla.org/it/docs/Web/API/Window/localStorage) del browser e sono valide quindi solo in quel preciso browser solo fino a che non viene svoutata la cache.
Per ricominciare da capo (perdendo tutti i dati salvati) è possibile premere sul tasto di reset in alto a destra nella barra dell'applicazione inserendo la password salvata nel file `pages.js` nella variabile `globalPassword`.

# Requisiti

L'applicazione è sviluppata in Javascript con la libreria [React](https://it.reactjs.org/) e impachettata con [Create React App](https://create-react-app.dev/docs/getting-started) per velocizzarne lo sviluppo e il rilascio.
Per poter modificare il contenuto dell'appliczione è necessario installare sul proprio computer [NodeJS](https://nodejs.org/it/).
Assieme a NodeJS verrà automaticamente installato `npm`, un sistema utilizzato per installare le librerie necessarie al progetto e per lanciare dei comandi automatizzati.

Una volta installato NodeJS si dovrebbe essere ing grado quindi di accedere ad un terminale (PowerShell su Windows o il terminale per MacOS e Linux) nel quale lanciare i comandi necessari per lo sviluppo e il rilascio.

# Installazione dell'applicazione

Posizione il contenuto del progetto in una cartella a piacere sul propri computer.
Aprire il terminale e raggiungere la cartella dell'applicazione.
Eseguire il seguente comando per installare le dipendenze necessarie:

```bash
npm install
```

# Sviluppo dell'applicazione

Accedere al progetto da terminale e lanciare il seguente comando.

```bash
npm start
```

Il comando apre una pagina del browser e resta in ascolto delle modifiche ai file. Ogni volta che si modifica un file la pagina del browser viene modificata automaticamente.
Quando si terminano le modifiche si può interrompere il comando premendo `ctrl+c`.

# Struttura dei file

Nella cartella `src` ci sono i file sorgenti che definiscono il funzionamento dell'applicazione.
Il file `pages.js`contiene le istruzioni per costruire la storia mostrate dal template nel file `Page.jsx`.
Il file `End.jsx` è il template per la pagina finale in cui di default sono calcolati i punteggi.

# Modificare la storia

Nel file `pages.js` è descritta una lista (Array incluso da parentesi quadre) di pagine che verranno visualizzate dall'utente. Ogni pagina è un oggetto javascript racchiuso da parentesi graffe e separato dagli altri oggetti da una virgola.
Ogni oggetto rappresentante una pagina deve e/o può avere queste proprietà:

-  **id**: una stringa univoca che rappresenta brevemente la pagina;
-  **title**: (facoltativo) Il titolo che apparirà all'utente in pagina
-  **text**: Il testo che descrive la storia in quella pagina (accetta anche formattazione HTML)
-  **choices**: Una lista (Array []) di oggetti che rappresentano le possibili scelte dell'utente (vedi sotto)

Le scelte sono oggetti che devono e/o possono avere queste proprietà:

-  **label**: Il testo che vedrà l'utente sul tasto
-  **goTo**: l'id della pagina a cui porterà questa scelta
-  **score**: Una lista (Array []) di oggetti che rappresentano il punteggio che verrà sommato al click sulla scelta (vedi variabile `score`)
-  **password**: una stringa a piacere o la variabile `globalPassword` se si vuole un'unica password salvata nell'omonima variabile

L'id "end" è riservato alla pagina finale che mostra un template differente dalle altre pagine per permettere il conteggio dei punti.

# Rilascio dell'applicazione

L'applicazione è solo client e può quindi essere eseguita da qualunque browser. Per condividerla tramite internet è sufficiente caricare su un provider qualunque il contenuto della cartella "build" creato con il seguente comando:

```bash
npm run build
```

La pagina `index.html` sarà il punto di partenza per aprire l'applicazione.
