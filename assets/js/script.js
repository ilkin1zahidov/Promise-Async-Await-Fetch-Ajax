let tableBody = document.querySelector(".table_body");
let tableHead = document.querySelector(".table_head")
let btn = document.querySelector("get_button")


$(".get_button").click(function(){

      getAlbums();
    });
  

async function getAlbums(){

    
    let albums =  await fetch("https://jsonplaceholder.typicode.com/albums");

    let result = await albums.json();
    let elem = ""
    result.forEach(album => {
        tableBody.innerHTML += `<tr>
        <td> ${album.userId}<td/>
        <td> ${album.id}<td/>
        <td> ${album.title}<td/>`
        
        
 
        
    });

    
    tableHead.innerHTML += `<tr>
    <th> UserId<th/>
    <th> Id<th/>
    <th> Title<th/>`
    
    table.innerHTML = elem;
}



