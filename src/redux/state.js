
let state={
    profilePage:{
        posts: [
         {id:1, message: 'Hy my name is Davit', likesCount: 0}, 
         {id:2, message: 'OOO I am very happy', likesCount: 10}
        ]
    },
    dialogsPage:{
        dialogs: [ 
         {name:'Davit', id:1},
         {name:'Ashot', id:2},
         {name:'Edvin', id:3}
        ],
        messages: [
         {id:1, message: 'Hi'},
         {id:2, message: 'Hello'},
         {id:3, message: 'Yo'} 
        ]
    },
    sidebarPage:{
        friends:[
         {friendName: 'Hayk'},
         {friendName: 'Vrej'},
         {friendName: 'Gev'}
        ]
    }
}

export default state;

  

