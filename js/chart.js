async function createChart() {
    const chartData = await fetchGoogleSheetData();

    const chart = LightweightCharts.createChart(document.getElementById('chart'), {
        width: document.body.clientWidth,
        height: 500,
    });

    const lineSeries = chart.addLineSeries();
    lineSeries.setData(chartData);
}

createChart();
