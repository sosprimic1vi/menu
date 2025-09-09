<script>
// 1. Definiamo lo stile (CSS) per il contenitore, i link e i separatori
const stiliCSS = `
<style>
  /* Il contenitore che occuperà tutta la larghezza e allineerà il testo a destra */
  .contenitore-link {
    width: 100%;
    text-align: right; /* La proprietà chiave per l'allineamento */
    font-family: Arial, sans-serif;
    padding: 15px;
    border: 1px dashed #ccc; /* Aggiungo un bordo per farti vedere i limiti del contenitore */
  }

  /* Stile per ogni singolo link */
  .contenitore-link a {
    text-decoration: none; /* Rimuove la sottolineatura */
    color: #007BFF; /* Un colore blu per i link */
    font-weight: bold;
    margin: 0 5px; /* Un po' di spazio attorno a ogni link */
  }

  /* Questo è il selettore magico:
     Aggiunge un trattino PRIMA di ogni link (a) che è immediatamente preceduto da un altro link (a + a) */
  .contenitore-link a + a::before {
    content: "-";
    margin: 0 10px; /* Spazio a destra e sinistra del trattino */
    color: #555; /* Colore del separatore */
  }
</style>
`;

// 2. Definiamo la struttura HTML dei nostri link
const strutturaHTML = `
<div class="contenitore-link">
  <a href="https://sites.google.com/ic1vicenza.edu.it/sos">SOS</a>
  <a href="https://sites.google.com/ic1vicenza.edu.it/sos-normativa/home-page">Normativa</a>
  <a href="https://sites.google.com/ic1vicenza.edu.it/sos-didattica/home-page">Didattica</a>
  <a href="https://sites.google.com/ic1vicenza.edu.it/sos-community/home-page">Comunità</a>
</div>
`;

// 3. Lo script scrive sia lo stile che la struttura HTML direttamente nella pagina
document.write(stiliCSS + strutturaHTML);
</script>
