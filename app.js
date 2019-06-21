document.querySelector("form").addEventListener("submit", function(evt) {
    evt.preventDefault();
});

var pesquisa = document.querySelector('#pesquisa');
var tipo = document.querySelector('#tipo');
var botao = document.querySelector('#botao');

botao.addEventListener("click", function(){
    console.log(pesquisa);
fetch('http://www.omdbapi.com/?s='+ pesquisa.value.replace(" ", "+") + '&type='+ tipo.value + '&apikey=6ec86a0')
        .then(function(resposta) {
            return resposta.json();
        })
        .then(function(json){
            console.log(json);
            document.querySelector("main").innerHTML = '';
            for(filme of json.Search) {

                if(filme.Poster=="N/A"){

                    document.querySelector("main").innerHTML += 
                    `<p>${filme.Title} - ${filme.Year}</p>`;

                }else{

                    document.querySelector("main").innerHTML += 
                    `<p>${filme.Title} - ${filme.Year}</p> 
                    <div>
                        <img src=${filme.Poster}>
                    </div>`;

                };

            }   
        
        });
})




