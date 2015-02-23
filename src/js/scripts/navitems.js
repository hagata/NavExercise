var getReq = new XMLHttpRequest();

// getReq.onreadystatechange = function(){
// 	getReq.open('GET','../../api/nav.json',true);
// 	getReq.send();
// 	console.log(getReq.responseText);
// };

getReq.open("GET", '/api/nav.json', true);
getReq.send();

getReq.onreadystatechange = function() {
    if (getReq.readyState == 4 && getReq.status == 200) {
        var myArr = JSON.parse(getReq.responseText);
        myFunction(myArr);
    }
}

function myFunction(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<a href="' + arr[i].url + '">' + 
        arr[i].display + '</a><br>';
    }
    document.getElementById("devList").innerHTML = out;
}