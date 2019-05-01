function init(){
    var oListGroupItem = document.getElementsByClassName('list-group-item');
    console.log(oListGroupItem);
    var len = oListGroupItem.length;
    for(var i = 0 ; i < len ; i ++){
        (function(n){
            oListGroupItem[n].onclick = function(){
                for(var j = 0 ; j < len ; j ++){
                    oListGroupItem[j].className = 'list-group-item';
                }
                oListGroupItem[n].className = 'list-group-item active';
            }
        }(i))
    }
}

init();