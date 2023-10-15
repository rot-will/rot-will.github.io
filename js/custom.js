(function(window, document) {
function change_style(){
    var parentElement = document.querySelector("[class='markdown-body']");
    var pTags = parentElement.querySelectorAll(":scope>p");
    for(var i=0;i<pTags.length;i++){

        console.log(pTags[i]);
        var child_es=pTags[i].querySelectorAll("img");
        console.log(child_es);
        if (child_es.length==0){
            pTags[i].classList.add('salient');
        }
    }
}
change_style();
})(window,document)
