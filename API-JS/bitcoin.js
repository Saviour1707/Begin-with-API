const url = "https://api.coindesk.com/v1/bpi/currentprice.json";
async function getrate(){

    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    const t= data.time.updated;
    document.getElementById('btc-value-usd').innerHTML = data.bpi.USD.rate;
    document.getElementById('btc-value-eur').innerHTML = data.bpi.EUR.rate;
    document.getElementById('updated-on').innerHTML = t;
    
    
}
getrate();