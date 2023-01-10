const database = require('./database')


async function listarDados() {

    var studios = await database.select().table('Studios').then( data =>{
        console.log(data)
       
     }).catch( err =>{console.log(err) })  
     
    
}


function insertStudio(name, gameId){
    if(isNaN(name) == true && isNaN(gameId) == false){

        database.insert({ name: name, game_id: gameId }).into('studios').then( data =>{

            console.log('dados inseridos com sucesso')
    
         }).catch( err => { console.log(err)})

    }else{
        console.log(' Tipo de parâmetro incorreto. Set um valor string para name, e inteiro para gameIds')
    }    

}

//listarDados()

//insertStudio('Blizzard',1)

// join com knex
 async function buscaJoin(){
    var games = await database.select(["games.name", "studios.name as studio"]).table('studios').innerJoin('games', 'studios.game_id', 'games.id').then( data=>{
        console.log("passei aq")
        return data
        
    }).catch( err=>{ console.log(err)})

        games.forEach(game=>{
        console.log(game)
    })
 }

 buscaJoin()
