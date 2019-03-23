var api = "http://104.236.45.110:3000/";
// var api = "http://192.168.43.132:3000/"
var burl = "sid.com";
var score = 100;
var ctest = 0;
// var posturl = "http://192.168.43.132:3000/"
chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  document.getElementById("title").innerHTML = tabs[0].title;
  burl = tabs[0].url;
  burl = String(burl);
});
setTimeout(function() {
  document.getElementById("test1p").innerHTML = "Broken Authentication";

  fetch(api + "password", {
    method: "POST",
    body: JSON.stringify({ url: burl })
  })
    .then(response => response.json())
    .then(res => {
      document.getElementById("test1l").style.visibility = "hidden";
      ctest = ctest + 1;
      if (res.results.vulnerable == true) {
        score -= 20;
        document.getElementById("test1i").src = "./images/hand.svg";
      } else document.getElementById("test1i").src = "./images/green.svg";

      document.getElementById("test1i").style.visibility = "visible";
    });

  document.getElementById("test2p").innerHTML = "Sensitive Data Exposure";

  fetch(api + "data_expose", {
    method: "POST",
    body: JSON.stringify({ url: burl })
  })
    .then(response => response.json())
    .then(res => {
      document.getElementById("test2l").style.visibility = "hidden";
      ctest = ctest + 1;
      if (res.results.vulnerable == true) {
        score -= 20;

        document.getElementById("test2i").src = "./images/hand.svg";
      } else document.getElementById("test2i").src = "./images/green.svg";

      document.getElementById("test2i").style.visibility = "visible";
    });

  document.getElementById("test3p").innerHTML =
    "Security Misconfiguration <br>";

  fetch(api + "nmap", {
    method: "POST",
    body: JSON.stringify({ url: burl })
  })
    .then(response => response.json())
    .then(res => {
      document.getElementById("test3l").style.visibility = "hidden";

      document.getElementById("test3p").innerHTML += String(
        Object.keys(res.tcp)
      );
      document.getElementById("test3p").innerHTML += " - open ports ";
      ctest = ctest + 1;
      if (String(Object.keys(res.tcp))) {
      }

      document.getElementById("test3i").src = "./images/hand.svg";

      document.getElementById("test3i").style.visibility = "visible";
    });

  // }

  document.getElementById("test4p").innerHTML = "SQL Injection ";

  fetch(api + "sql_injection", {
    method: "POST",
    body: JSON.stringify({ url: burl })
  })
    .then(response => response.json())
    .then(res => {
      document.getElementById("test4l").style.visibility = "hidden";

      ctest = ctest + 1;
      if (res.result.vulnerable == true) {
        score -= 21;

        document.getElementById("test4i").src = "./images/hand.svg";
      } else document.getElementById("test4i").src = "./images/green.svg";

      document.getElementById("test4i").style.visibility = "visible";
    });

  document.getElementById("test5p").innerHTML = "XSS  Security  ";

  fetch(api + "xss?url=" + burl, {
    method: "Get"
  })
    .then(response => response.json())
    .then(res => {
      document.getElementById("test5l").style.visibility = "hidden";

      ctest = ctest + 1;
      if (res.result.vulnerable == true) {
        score -= 21;

        document.getElementById("test5i").src = "./images/hand.svg";
      } else document.getElementById("test5i").src = "./images/green.svg";

      document.getElementById("test5i").style.visibility = "visible";
    });

  document.getElementById("test6p").innerHTML = "Broken Access  ";

  fetch(api + "broken_access", {
    method: "POST",
    body: JSON.stringify({ url: burl })
  })
    .then(response => response.json())
    .then(res => {
      document.getElementById("test6l").style.visibility = "hidden";

      ctest = ctest + 1;
      if (res.results.vulnerable == true) {
        score -= 18;

        document.getElementById("test6i").src = "./images/hand.svg";
        res.message.map(e => {
          document.getElementById("test6p").innerHTML += "<br> " + e;
        });
      } else document.getElementById("test6i").src = "./images/green.svg";

      document.getElementById("test6i").style.visibility = "visible";
    });
}, 0);
var gl = this;
var scoredisplay = 0;
document.getElementById("test0p").innerHTML = "Website Score is  ";
setInterval(function() {
  if (this.ctest >= 6) {
    if (scoredisplay == 0) {
      document.getElementById("test0l").style.visibility = "hidden";

      scoredisplay = 1;
      document.getElementById("test0p").innerHTML += score + "%";
    }
  }
}, 500);
