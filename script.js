
// var getPokemon = document.getElementById("lookUp").value;
// var pokemon = getPokemon.toLowerCase()

function searchPokemon(){
  var getPokemon = document.getElementById("lookUp").value;
  var pokemon = getPokemon.toLowerCase()
    var url = "https://pokeapi.co/api/v2/pokemon/" + pokemon
    $.ajax({
        url: url,
        method: "GET",

    }).then(function(data){
        // console.log(data.moves[0].move.name)
        document.getElementById("name").textContent = data.name
        document.getElementById("pokeType").innerHTML = "Type: " + data.types[0].type.name
        document.getElementById("pokemon-id").innerHTML = "ID#: " +  data.id
        document.getElementById("abilities-1").innerHTML="Ability1 : " + data.abilities[0].ability.name
        document.getElementById("abilities-2").innerHTML="Ability2 : " + data.abilities[1].ability.name
        document.getElementById("move-1").innerHTML = "Attack: " + data.moves[0].move.name
        document.getElementById("move-2").innerHTML = "Attack: " + data.moves[1].move.name
        document.getElementById("move-3").innerHTML = "Attack: " + data.moves[2].move.name
        document.getElementById("move-4").innerHTML = "Attack: " + data.moves[3].move.name

        // var i;
        // var text;
        // var attacks = data.moves
        // for (i = 0; i < attacks.length; i++) {
        //   text += attacks[i].move.name;
         
        // }
        //  console.log(text)
        //  console.log(data.moves)
    })

  }


// function capitalizeFirstLetter(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }

// console.log(capitalizeFirstLetter('foo')); // Foos
function getAllData(){
  document.getElementById("pokemonCard").style.display = "block";
  searchPokemon();
  generatePic();
}


function generatePic() {
    var pokemon = document.getElementById("lookUp").value;
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=ZdwozdWihaA2rjq5resVi5w7wvyqEK6H" + "&tag=pokemon%" + pokemon + "&rating=pg-13";
  
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
    console.log( response.data.images.original.url);
    document.getElementById("myImg").src = response.data.images.original.url

    $("#myBtn").click(function(){
    var pokeImg = $("#lookUp").attr("src", response.data.images.original.url);
    // var pokeImg = response.data.images.original.url
    document.getElementById("myImg").innerHTML = pokeImg
    console.log()

  
    });
})


};


