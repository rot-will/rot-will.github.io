'use strict';

function Check_encrypt(viewkey,url){
    console.log(url);
    key=localStorage.getItem(url);
    if (key==page.viewkey){
        return 1;
    }
    mainElement.addEventListener('keydown', async (event) => {
        if (event.isComposing || event.keyCode === 13) {
            Set_password(url);
            key=localStorage.getItem(url);
            if (key==viewkey){
                return 1;
            }
            //windows.location.replace(window.location.protocol+"://"+window.location.host+window.location.pathname+"?")
        }
    });
}
function Set_password(url){
    var key=document.getElementById("node_key");
    localStorage.setItem(url,key.value);
    //windows.location.replace(window.location.protocol+"://"+window.location.host+window.location.pathname+"?");
}