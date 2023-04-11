function displayIPInfo(data) {
  var ipinfo = document.getElementById("ipinfo");
  ipinfo.innerHTML = "IP: " + data.ip + "<br>"
                   + "Hostname: " + data.hostname + "<br>"
                   + "City: " + data.city + "<br>"
                   + "Region: " + data.region + "<br>"
                   + "Country: " + data.country + "<br>"
                   + "Postal code: " + data.postal + "<br>"
                   + "Latitude: " + data.loc.split(",")[0] + "<br>"
                   + "Longitude: " + data.loc.split(",")[1] + "<br>";
}

function loadIPInfo() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var data = JSON.parse(xhr.responseText);
      displayIPInfo(data);
    }
  };
  xhr.open("GET", "https://ipinfo.io/json", true);
  xhr.send();
}

document.addEventListener("DOMContentLoaded", function() {
  loadIPInfo();
});

