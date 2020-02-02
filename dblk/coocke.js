document.querySelector("#logout").onclick = function(){
    let c = document.cookie;
    console.log(c)
    var d = new Date();
    d.setTime(d.getTime() - (60*1000));
    var expires = `expires = ${d.toUTCString()}`;
    document.cookie = `${c}; expires=${expires}; path=/`;
    location.reload();
}