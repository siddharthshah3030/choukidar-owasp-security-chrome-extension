// var link ;
// // var data ;
var api = "http://104.236.45.110:3000/";
// var api = "http://192.168.43.132:3000/"
var burl ="sid.com";
var score  = 100;
var ctest  = 0;
// var posturl = "http://192.168.43.132:3000/"
chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
  document.getElementById("title").innerHTML =  tabs[0].title; 
burl = tabs[0].url
burl = String(burl)

// burl = "nodejsbootcamp.herokuapp.com/users/register"
// alert(bu rl)
  // link = tabs[0].url;     //url
  // tabs[0].title;   //title
  //  data = {url: url};
//   document.getElementById("title").innerHTML =  tabs[0].url; 
//   // test(1,"password","broken authentication",link)
//   // document.getElementById("title").innerHTML =link.substr(8);
//   var newlink = link;
//   newlink = newlink.substr(8).split("/")[0]
//   console.log(newlink)
//   test("codeutsava.in")
//   // test(2,"nmap"," Security Misconfiguration",newlink)
//   // test(3,"data_expose","data expose",link)
//   // test(4,"password","password check",link)
});
setTimeout(function() {

  document.getElementById("test1p").innerHTML = "Broken Authentication"

  // alert(burl)
fetch(api +"password", {
method: "POST", 
body: JSON.stringify({url: burl 
})
}).then(response => response.json()).then(res => {
// alert(JSON.stringify(res))
    document.getElementById("test1l").style.visibility = "hidden"
    // alert(String(res.results.vulnerable  ))
    ctest = ctest + 1
if(res.results.vulnerable==true){
score-=20
document.getElementById("test1i").src = "./hand.svg"
}
else   document.getElementById("test1i").src = "./green.svg"

// else   
// document.getElementById("test1i").src = "./poker.png"

document.getElementById("test1i").style.visibility = "visible"

// alert(res.toSource())
// alert(stringify(res))

})
// alert(burl)

document.getElementById("tessdst2p").innerHTML = "Sensitive Data Exposure"

fetch(api +"data_expose", {
method: "POST", 
body: JSON.stringify({url:burl
})
}).then(response => response.json()).then(res => {
// alert(JSON.stringify(res))
    document.getElementById("test2l").style.visibility = "hidden"
    ctest = ctest + 1
if(res.results.vulnerable==true){
score -=20

  document.getElementById("test2i").src = "./hand.svg"
}
else   document.getElementById("test2i").src = "./green.svg"

// else 
// document.getElementById("test2i").src = "./poker.png"

document.getElementById("test2i").style.visibility = "visible"

// alert(res.toSource())
// alert(stringify(res))

})



document.getElementById("test3p").innerHTML = "Security Misconfiguration <br>"

fetch(api +"nmap", {
method: "POST", 
body: JSON.stringify({url:burl
})
}).then(response => response.json()).then(res => {
// alert(JSON.stringify(res))
    document.getElementById("test3l").style.visibility = "hidden"
    // alert(String(res ))
// if(res.tcp.80)
document.getElementById("test3p").innerHTML += String(Object.keys(res.tcp));
document.getElementById("test3p").innerHTML += " - open ports "
ctest = ctest + 1
if(String(Object.keys(res.tcp))){

  // score -=11

} 
// document.getElementById("test3i").src = "./hand.svg"
// else
   document.getElementById("test3i").src = "./hand.svg"

// else 
// document.getElementById("test2i").src = "./poker.png"

document.getElementById("test3i").style.visibility = "visible"

// alert(res.toSource())
// alert(stringify(res))

})

// }

document.getElementById("test4p").innerHTML = "SQL Injection "

fetch(api +"sql_injection", {
method: "POST", 
body: JSON.stringify({url:burl
})
}).then(response => response.json()).then(res => {
// alert(JSON.stringify(res))

    document.getElementById("test4l").style.visibility = "hidden"
    // alert(String(res ))
// if(res.tcp.80)
ctest = ctest + 1
if(res.result.vulnerable==true){
  score -=21


  document.getElementById("test4i").src = "./hand.svg"
}
else   document.getElementById("test4i").src = "./green.svg"

// else 
// document.getElementById("test2i").src = "./poker.png"

document.getElementById("test4i").style.visibility = "visible"

// alert(res.toSource())
// alert(stringify(res))

})

document.getElementById("test5p").innerHTML = "XSS  Security  "

fetch(api +"xss?url="+burl, {
method: "Get", 
// body: JSON.stringify({url:burl})
}).then(response => response.json()).then(res => {
// alert(JSON.stringify(res))
    document.getElementById("test5l").style.visibility = "hidden"
    // alert(String(res ))
// if(res.tcp.80)
ctest = ctest + 1
if(res.result.vulnerable==true){
  score -=21


  document.getElementById("test5i").src = "./hand.svg"
}
else   document.getElementById("test5i").src = "./green.svg"

// else 
// document.getElementById("test2i").src = "./poker.png"

document.getElementById("test5i").style.visibility = "visible"

// alert(res.toSource())
// alert(stringify(res))

})

document.getElementById("test6p").innerHTML = "Broken Access  "

fetch(api +"broken_access", {
method: "POST", 
body: JSON.stringify({url:burl})
}).then(response => response.json()).then(res => {
// alert(JSON.stringify(res))
    document.getElementById("test6l").style.visibility = "hidden"
    // alert(String(res ))
// if(res.tcp.80)
// alert(String(res.results.vulnerable))
ctest = ctest + 1
if(res.results.vulnerable==true)
{
  score -=18


  document.getElementById("test6i").src = "./hand.svg"
res.message.map((e)=>{
  document.getElementById("test6p").innerHTML += "<br> " + e

})
}
else   document.getElementById("test6i").src = "./green.svg"

// else 
// document.getElementById("test2i").src = "./poker.png"

document.getElementById("test6i").style.visibility = "visible"

// alert(res.toSource())
// alert(stringify(res))

})


}, 0);
var gl = this
var scoredisplay = 0;
document.getElementById("test0p").innerHTML = "Website Score is  "
setInterval(function(){
if(this.ctest >= 6){
  if(scoredisplay == 0){
    document.getElementById("test0l").style.visibility = "hidden"

    scoredisplay = 1;
    // var x = 5.0364342423;
    // print(score/51.toFixed(2));
    document.getElementById("test0p").innerHTML += score + "%"
  }
  // alert(this.ctest)
  
}  
// alert("Hello"); 

}, 500);

// function test(i,slash,m,str){
//   document.getElementById("test"+i+"p").innerHTML = m
//   postData(posturl+slash, {url : str})
//   .then(data => {
//     // alert(data)

//     alert(JSON.stringify(data));

//     document.getElementById("test"+i+"l").style.visibility = "hidden"
//     if(data.vulnerable)
//     document.getElementById("test"+i+"i").src = "./hand.svg"
//     else   document.getElementById("test"+i+"i").src = "./green.svg"
//     document.getElementById("test"+i+"i").style.visibility = "visible"

//     // console.log(JSON.strin gify(data)) // JSON-string from `response.json()` call
//   })
// alert(String(window.location.href))
// burl = "http://nodejsbootcamp.herokuapp.com/users/register"

// function postData(url = ``, data = {}) {
// // Default options are marked with *
//   return fetch(url, {
//       method: "POST", // *GET, POST, PUT, DELETE, etc.
//       mode: "no-cors", // no-cors, cors, *same-origin
//       cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//       credentials: "omit", // include, *same-origin, omit
//       headers: {

//           "Content-Type": "application/json",
//           "Access-Control-Allow-Headers": "*"  

//           // "Content-Type": "application/x-www-form-urlencoded",
//       },
//       redirect: "follow", // manual, *follow, error
//       referrer: "no-referrer", // no-referrer, *client
//       body: JSON.stringify(data), // body data type must match "Content-Type" header
//   })
//   .then(response => {
//     alert(JSON.stringify(response))
//     document.getElementById("title").innerHTML =  response.results.vulnerable; 

//     response.json()
//     // alert(JSON.stringify(response))
//   }).then( r => {

//     // alert(stringify(r))
//   })
//   .catch(e => e.message); // parses response to JSON
// }




// // alert(str)
// fetch("http://192.168.43.132:3000/nmap", {
// method: "POST", 
// body: JSON.stringify({url:"http://nodejsbootcamp.herokuapp.com/users/register"})
// }).then(response => response.json()).then(res => {
// if(res)
// document.getElementById("title").innerHTML =   JSON.stringify(res); 
// // alert(res.toSource())
// else document.getElementById("title").innerHTML =  "m"; 
// // alert(stringify(res))

// })