const router = require("express").Router();
const Celebrity = require("../models/Celebrity");

router.get('/celebrities', (req, res) => {
  // get all the celebrities from the database -> find() returns all the documents
  Celebrity.find().then(celebritiesFromDB => {
    console.log(celebritiesFromDB);
    // render a celebrity view to display them
    // If there's an error, call the route's next function and return the error.
    res.render('celebrities/index', { celebritiesList: celebritiesFromDB })
  }).catch(err => {
    console.log(err);
    //next();
  })
})

router.post('/celebrities', (req, res) => {
  console.log(req.body);
  const name = req.body.name;
  const occupation = req.body.occupation;
  const catchPhrase = req.body.catchPhrase;
  // const { name, occupation, catchPhrase } = req.body; 
  console.log('this is the celebrity field: ', name);
  // console.log(name, occupation, catchPhrase);
  Celebrity.create({
    name: name,
    occupation: occupation,
    catchPhrase: catchPhrase
  })
    .then(celebrity => {
      console.log('this celebrity was just created: ', celebrity);
      res.redirect(`/celebrities/${celebrity._id}`)
      // res.render('celebrityDetails', { celebrityDetails: celebrity });
    })
})


router.get('/celebrities/:id', (req, res) => {
  const celebrityId = req.params.id;
  // get the celebrity with this id
  Celebrity.findById(celebrityId)
    .then(celebrity => {
      console.log(celebrity);
      // render a celebrity details view in show.hbs
      res.render('celebrities/show', { celebrityDetails: celebrity });
    })
    .catch(err => {
      console.log(err);
    // next()
    })
})

router.get('/celebrities/new', (req, res) => {
  Name.find()
    .then(celebritiesFromDB => {
      res.render('celebrityForm', { celebrities: celebritiesFromDB });
    })
    .catch(err => {
      console.log(err);
    })
})






module.exports = router;

