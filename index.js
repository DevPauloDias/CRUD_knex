const database = require('./database')



dados = {
      name: 'Dragon ball',
      preco: 30

    }
       
    


// Insert  ------------------

function insertGame(name, price){

    database.insert({name: name , preco: price}).into('games').then(data =>{
        listarDados()

    }).catch( err =>{console.log('dados não inseridos' + err) })

}



/*
// nested queries
    database.insert(dados).into('games').then( () =>{

        database.select().table('games').then( data =>{

            console.log(data)
        }).catch( err =>{
            console.log(err)
        })
        
    }).catch( err =>{
        console.log('dados não inseridos' + err)
    })*/



// WHERE ----------------------------------------------------------


async function listarDados() {

    var games = await database.select().table('games').then( data =>{
        console.log(data)
       
     }).catch( err =>{console.log(err) })  
     
    
}



// delete

function deleteGame(){
     database.where({ id: 3}).delete().table('games').then(data=>{

        listarDados()  

    }).catch(err =>{ console.log(err) })

}
       

// update -----------

 function updateGame(id){

    database.where({id: id}).update({name: "NeedForSpeed"}).table('games').then(data =>{
        console.log(data)
    }).catch(err =>{
        console.log(err)
    })

 }

 //updateGame(4)
 //listarDados()
 //insertGame('Naruto Shippudden', 45)

 
 
       

  






