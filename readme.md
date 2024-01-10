# Train Calculator 2.0

## Traccia

#### Esercizio di oggi:

```plaintext
Calcolo del prezzo del biglietto del treno
cartella/repo: js-biglietto-treno-form
```

#### Descrizione:

```plaintext
Scrivere un programma che chieda all'utente:
- Il numero di chilometri da percorrere
- Età del passeggero

Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
```

#### MILESTONE 1:

```plaintext
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch'essa da scrivere in console.
```

#### MILESTONE 2:

```plaintext
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l'utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale (cioè il biglietto) andranno quindi stampati in pagina. Il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo.
```

#### BONUS:

```plaintext
Visualizzare il biglietto solo dopo che l'utente ha cliccato sul bottone.
```

## Pseudocode

#### MAILSTONE 1:

- Richiedo età e la assegno ad una costante
- Richiedo km di percorrenza e la assegno ad una costante
- Aggiungo condizione per la verifica del dato km di percorrenza

  - SE corretto procedo

    - Assegno il prezzo al km ad una costante
    - Assegno 0 ad una variabile per lo sconto
    - Calcolo il subtotale (km \* prezzo/km) e lo assegno ad una costante
    - Aggiungo condizione per la verifica dell'età
      - Se minorenne
        - setto lo sconto al 20
      - Se over 65
        - setto lo sconto al 40
    - Calcolo il prezzo finale sottraendo lo sconto dal subtotale e lo assegno ad una costante

    - Stampo il risultato

  - ALTRIMENTI
    - Stampo messaggio d'errore

#### MAILSTONE 2:
