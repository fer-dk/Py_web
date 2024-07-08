async function fetchGoogleSheetData() {
    const response = await fetch('https://spreadsheets.google.com/feeds/list/2PACX-1vT8UDyPBVKBBgsWdtSzqLttg4GF7ZmKFUe09meq_d6sbxJGhWDyDNZ54MV8Kmr8Vg/od6/public/values?alt=json');
    const data = await response.json();
    return data.feed.entry.map(entry => ({
        time: entry['gsx$Comunicación']['$t'], // Ajusta 'gsx$Comunicación' al nombre de tu columna
        value: parseFloat(entry['gsx$Envios validos']['$t']) // Ajusta 'gsx$Envios validos' al nombre de tu columna
    }));
}
