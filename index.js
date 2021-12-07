$("#form").submit(function (e) {
    e.preventDefault();
    
    var query = $("#search").val();
    
    var AI_KEY = '86d405d218ff05f29c075da984f5ca37'
    
    var url = `http://api.serpstack.com/search?access_key=${API_KEY}&type=web&query=${query}`
    
    $.get(url,function(data){
        console.log(data);
    });
});
