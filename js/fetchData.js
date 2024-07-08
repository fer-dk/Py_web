async function fetchGoogleSheetData() {
    const response = await fetch('https://spreadsheets.google.com/feeds/list/2PACX-1vSCnyQM_VImmumm7EMurnxVDNRiTfK1PrdjFckrtLyWA4gqvIihfSBl_C5ftIYVbw/od6/public/values?alt=json');
    const data = await response.json();
    return data.feed.entry.map(entry => ({
        time: entry['gsx$comunicación']['$t'], // Ajusta 'gsx$time' al nombre de tu columna
        value: parseFloat(entry['gsx$enviosvalidos']['$t']) // Ajusta 'gsx$value' al nombre de tu columna
    }));
}
