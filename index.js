$("#form").submit(function (e) {
    e.preventDefault()
    
    var query = $("#search").val()
    
    var API_KEY = 'd8e5af2b153e1105fda032f5be5ad55976ac358c7594fde6a780888c29d23329'
    
    var url = 'https://serpapi.com/search.json?engine=google&q=' + query + '&api_key='+ API_KEY
    console.log(url)
    
    $.get(url,function(data){
        console.log(data)
    })
})
