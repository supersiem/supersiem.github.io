window.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded");
    load()
});
function submit_form() {
    // eerst de waarden van de inputs krijgen
    // naam
    var naam = document.getElementById("tile_name").value;
    // link
    var link = document.getElementById("tile_link").value;
    // icon
    var icon_data = "fa-"+document.getElementById("fa_icon_selector").value;
    var icon_type = "fa-"+document.getElementById("fa_icon_type_selector").value;
    new_tile(naam,link,icon_data,icon_type);
    window.location.href = "main.html"
}
function A_remove() {
    // eerst de waarden van de inputs krijgen
    // naam
    var naam = document.getElementById("remove_tile_name").value;
    data = get_JSON();
    if(data.naam.includes(naam)) {
        line = data.naam.lastIndexOf();
        data.naam.splice(line,1)
        data.link.splice(line,1)
        data.icon.icondata.splice(line,1)
        data.icon.icontype.splice(line,1)
    }
    localStorage.setItem("main",JSON.stringify(data))
    window.location.href = "main.html"
}
function B_remove() {
    // eerst de waarden van de inputs krijgen
    var line = document.getElementById("remove_tile_num").value - 1;
    data = get_JSON();

    data.naam.splice(line,1)
    data.link.splice(line,1)
    data.icon.icondata.splice(line,1)
    data.icon.icontype.splice(line,1)
    localStorage.setItem("main",JSON.stringify(data))
    window.location.href = "main.html"
}
function verwijder(){
    backup = localStorage.getItem("main")
    localStorage.removeItem("main")
    p = document.getElementById("data_dump")
    p.innerText = backup
}
function load(){
    backup = localStorage.getItem("main")
    p = document.getElementById("data_dump")
    p.innerText = backup
}
function restor(){
    var line = document.getElementById("data_in").value
    localStorage.setItem("main",line)
    p = document.getElementById("data_dump")
    p.innerText = line
}
// from main.js
function new_tile(text,url,icondata, icontype) {
    //note the icon is using font awsom 
    
    data = get_JSON();
    data.naam.push(text);
    data.icon.icondata.push(icondata);
    data.icon.icontype.push(icontype);
    data.type.push("0");
    data.link.push(url);
    localStorage.setItem("main",JSON.stringify(data));

}
function get_JSON(){
    data = JSON.parse(localStorage.getItem("main"));
    return data;
}

function submit_wigit() {
    // eerst de waarden van de inputs krijgen
    // naam
    var link = document.getElementById("tile_link").value;
    // icon
    new_tile(link);
    window.location.href = "main.html"
}
function new_wigit(url) {
    //note the icon is using font awsom 
    
    data = get_JSON();
    data.naam.push("1");
    data.icon.icondata.push("1");
    data.icon.icontype.push("1");
    data.type.push("1");
    data.link.push(url);
    localStorage.setItem("main",JSON.stringify(data));

}