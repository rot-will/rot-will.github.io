(function(window, document) {
function change_style(isenc){
    if (isenc==true)
        var parentElement=document.getElementById("hexo-blog-encrypt").childNodes[0];
    else
        var parentElement = document.querySelector("[class='markdown-body']");

    var pTags = parentElement.querySelectorAll(":scope>p");
    for(var i=0;i<pTags.length;i++){

        var child_es=pTags[i].querySelectorAll("img");
        if (child_es.length==0){
            pTags[i].classList.add('salient');
        }
    }
}

function loadImage(){
    for (const each of document.querySelectorAll('img[lazyload]')) {
        Fluid.utils.waitElementVisible(each, function() {
          each.removeAttribute('srcset');
          each.removeAttribute('lazyload');
        }, CONFIG.lazyload.offset_factor);
      }
}

const hdeElement=document.getElementById('hexo-blog-encrypt');
if (hdeElement==null)
    change_style();
else{
    window.addEventListener('hexo-blog-decrypt',(
        function(){
            change_style(true);
            loadImage();
            }));
}
})(window,document)

