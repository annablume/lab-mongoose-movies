const mongoose = require('mongoose');
const Celebrity = require('./models/Celebrity');

mongoose.connect('mongodb://localhost/lab-mongoose-movies', {
  userNewUrlParser: true
});

const celebrity = [
  {
    name: "Earl Grey",
    occupation: "Actor",
    catchPhrase: "Don't talk to me in the morning.",
    
  },
  {
    name: "Earl Grey",
    occupation: "Actor",
    catchPhrase: "Don't talk to me in the morning.",
    
  },
  {
    name: "Dar Jeeling",
    occupation: "Singer",
    catchPhrase: "Pick me up.",
    
  },
  {
    name: "White Water",
    occupation: "ActorSinger",
    catchPhrase: "Be water my friend.",
    
  },
  {
    name: "Soul Black",
    occupation: "Actor",
    catchPhrase: "Wake me up.",
    
  },
  {
    name: "Early Ginger",
    occupation: "Comedian",
    catchPhrase: "The great reset.",
    
  },
  
];

Celebrity.insertMany(celebrity)
  .then(celebrities => {
    console.log(`Success! Added ${celebrities.length} celebrities to the database.`);
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
  });
