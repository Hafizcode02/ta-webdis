// function to handle success
function success() {
    var db = JSON.parse(this.responseText); //parse the string to JSON
    var confirmedStatsIndonesia = document.getElementById("confirmed-stats-indonesia");
    confirmedStatsIndonesia.textContent = numberFormat(db.update.total.jumlah_positif);
    var confirmedTreatIndonesia = document.getElementById("confirmed-treat-indonesia");
    confirmedTreatIndonesia.textContent = numberFormat(db.update.total.jumlah_dirawat)
    var confirmedRecoverIndonesia = document.getElementById("confirmed-recover-indonesia");
    confirmedRecoverIndonesia.textContent = numberFormat(db.update.total.jumlah_sembuh);
    var confirmedDieIndonesia = document.getElementById("confirmed-die-indonesia");
    confirmedDieIndonesia.textContent = numberFormat(db.update.total.jumlah_meninggal);
}

// function to handle error
function error(err) {
    console.log('Request Failed', err); //error details will be in the "err" object
}

function numberFormat(num) {
    var num_parts = num.toString().split(",");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return num_parts.join(",");
}

var xhr = new XMLHttpRequest(); //invoke a new instance of the XMLHttpRequest
xhr.onload = success; // call success function if request is successful
xhr.onerror = error;  // call error function if request failed
xhr.open('GET', 'https://data.covid19.go.id/public/api/update.json'); // open a GET request
xhr.send(); // send the request to the server.