# Train Calculator 2.0

## Traccia

#### Esercizio di oggi:

```
Calcolo del prezzo del biglietto del treno
cartella/repo: js-biglietto-treno-form
```

#### Descrizione:

```
Scrivere un programma che chieda all'utente:
- Il numero di chilometri da percorrere
- Età del passeggero

Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
```

#### MILESTONE 1:

```
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch'essa da scrivere in console.
```

#### MILESTONE 2:

```
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l'utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale (cioè il biglietto) andranno quindi stampati in pagina. Il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo.
```

#### BONUS:

```
Visualizzare il biglietto solo dopo che l'utente ha cliccato sul bottone.
```

## Pseudocode

#### MAILSTONE 1:

- Recupero i seguenti elementi e li assegno ad una costante:

  - input km da percorrere
  - select età
  - code risultato
  - bottone form

- Al click del bottone eseguo:

  - Recupero valore input da input da percorrere e la assegno ad una costante
  - Recupero valore input da select età e la assegno ad una costante
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
      - Stampo messaggio d'errore in innertext code risultato

#### MAILSTONE 2 + Bonus:

- Recupero i seguenti elementi aggiuntivi e li assegno ad una costante:

  - blocco biglietto
  - elemento testo subtotale
  - elemento sottotesto subtotale
  - elemento label sconto
  - elemento testo sconto
  - elemento testo nome cliente
  - elemento testo nome biglietto
  - elemento testo posto assegnato
  - elemento testo codice biglietto

- Setto il display del blocco biglietto su none
- Setto il display dell' elemento label sconto su none
- Setto il display dell' elemento testo sconto su none

- All'interno di condizione per la verifica del dato km di percorrenza > SE corretto
  - Setto il display del blocco biglietto su "vuoto"
  - Dichiaro e inizializzo una variabile per il nome del biglietto
  - All'interno di condizione per la verifica dell'età > SE minorenne
    - Setto il display dell' elemento label sconto su "vuoto"
    - Setto il display dell' elemento testo sconto su "vuoto"
    - Setto l'innertext dell' elemento label sconto con il nome dello sconto
    - Setto l'innertext dell' elemento testo sconto con il valore dello sconto
    - Setto la variabile nome biglietto su ridotto
  - All'interno di condizione per la verifica dell'età > SE over65
    - Setto il display dell' elemento label sconto su "vuoto"
    - Setto il display dell' elemento testo sconto su "vuoto"
    - Setto l'innertext dell' elemento label sconto con il nome dello sconto
    - Setto l'innertext dell' elemento testo sconto con il valore dello sconto
    - Setto la variabile nome biglietto su over65
  - Setto l'innertext dell'elemento testo nome cliente con la variabile del nome del cliente
  - Setto l'innertext dell'elemento testo nome biglietto con la variabile del nome del biglietto
  - Setto l'innertext dell'elemento testo posto assegnato randomicamente
  - Setto l'innertext dell'elemento testo codice biglietto randomicamente
