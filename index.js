$("#form").submit(function (e) {
    e.preventDefault()
    
    var query = $("#search").val()
    
    var API_KEY = '86d405d218ff05f29c075da984f5ca37'
    
    var url = 'https://api.serpstack.com/search?access_key='+ API_KEY + "&type=web&query=" + query
    console.log(url)
    
    $.get(url,function(data){
        console.log(data)
    })
})
