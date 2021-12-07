$("#form").submit(function (e) {
    e.preventDefault()
    
    var query = $("#search").val()
    
    var API_KEY = '69da118144f72c8a5dad7b4028bf161940fd8b1a59efc5bab1ec88943791e79a'
    
    var url = 'https://serpapi.com/search.json?engine=google&q=' + query + '&api_key='+ API_KEY
    console.log(url)
    
    $.get(url,function(data){
        console.log(data)
    })
})
