window.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded");

    setup()
    make_tiles()
    //duplicateAndModify("https://www.example.com", "ytyfyfyftyf","fa-cloud");
    //duplicateAndModify("https://www.example.com", "hallo","fa-thumbs-up");
    remove_the_placeholder();
});
function make_tiles() {
    data = get_JSON();
    console.log("loading tiles");
    for (let i = 0; i < data.naam.length; i++) {
        console.log("loading "+data.naam[i])
        duplicateAndModify(data.link[i],data.naam[i],data.icon.icondata[i],data.icon.icontype[i])
    }
    remove_the_placeholder();

}
function duplicateAndModify(link, text, icondata, icontype) {
    console.log(link);

    // Get the original tile
    var originalTile = document.getElementById('tile');

    // Clone the original tile, including its children
    var clonedTile = originalTile.cloneNode(true);
    clonedTile.id = link
    // Change the URL and text of the cloned tile
    clonedTile.href = link;
    clonedTile.querySelector('p').innerText = text;
    const Ielement = clonedTile.querySelector('i');
    Ielement.classList.remove("fa-thumbs-down");
    Ielement.classList.remove("fa-solid");
    Ielement.classList.add(icondata);
    Ielement.classList.add(icontype);

    // Append the cloned tile to the container
    document.getElementById('container').appendChild(clonedTile);
}
function remove_the_placeholder() {
    var originalTile = document.getElementById('tile');
    originalTile.remove();
}
function new_tile(text,url,icondata, icontype) {
    //note the icon is using font awsom 
    data = get_JSON();
    data.naam.push(text);
    data.icon.icondata.push(icondata);
    data.icon.icontype.push(icontype);
    data.link.push(url);
    localStorage.setItem("main",JSON.stringify(data));

}
function get_JSON(){
    data = JSON.parse(localStorage.getItem("main"));
    return data;
}
function setup() {
    // set the base json
    if(localStorage.length === 0) {localStorage.setItem("main",'{"gebruiker":{"naam":"NAAM"},"naam":["google"],"link":["https://google.com"],"icon":{"icondata":["fa-thumbs-up"],"icontype":["fa-solid"]}}' );}}
