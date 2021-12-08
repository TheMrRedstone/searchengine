$("#form").submit(function (e) {
    e.preventDefault()
    
    var query = $("#search").val()
    
    var API_KEY = 'd8e5af2b153e1105fda032f5be5ad55976ac358c7594fde6a780888c29d23329'
    
    var url = 'https://serpapi.com/search.json?engine=google&q=' + query + '&api_key='+ API_KEY
    
    $.get(url,function(data){
        var fs = require("fs");
        console.log("Going to write into existing file");

        fs.writeFile('Main.json', data, function(err) {
            if (err) {
                return console.error(err);
            }
            console.log("Data written successfully!");
            console.log("Let's read newly written data");
        });
            fetch('Main.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
        function appendData(data) {
            var mainContainer = document.getElementById("fechedData");
            for (var i = 0; i < data.length; i++) {
                var div = document.createElement("div");
                div.innerHTML = data[i]
                mainContainer.appendChild(div);
            }
        }
    });
});
