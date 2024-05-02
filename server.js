const express = require("express")
const app = express()
const Typed = require("typed.js")
/* console.log(Typed) */
const PORT = process.env.PORT || 3000
const methodOverride = require('method-override')

// =========== DATA ============
const fruits = require('./models/fruits.js')
const meats = require('./models/meats.js')
const veggies = require('./models/veggies.js')
const recipes = require('./models/recipes.js')
const recipesAfrican = require('./models/recipes.js')
const recipesAsian = require('./models/recipes.js')
const recipesCa = require('./models/recipes.js')
const recipesEU = require('./models/recipes.js')
const recipesNA = require('./models/recipes.js')
const recipesSA = require('./models/recipes.js')
const cuisines = require("./models/cuisines.js")
const recipesArr = require('./models/recipes.js')

// =========== MIDDLEWARE ===========
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.use('/', express.static('public'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// add middle for PUT and DELETE methods


// =========== ROUTES ============
//---------fruits route----------
app.get('/fruits', (req, res) => {
    res.render('fruits/index.ejs', {allFruits: fruits})
})

//put this above your show.ejs file
app.get('/fruits/new', (req, res) => {
    res.render('fruits/new.ejs')
})

app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    let idx = parseInt(req.params.indexOfFruitsArray);
    if (idx >= fruits.length) {
        res.render('404.ejs');
    } else {
        res.render('fruits/show.ejs', {fruit: fruits[idx], id: idx});
    }
})

//============ EDIT ================
//-------------- GET edit page fruits-------------
app.get('/fruits/:id/edit', (req, res) => {
    const fruit = fruits[req.params.id];
    let id = parseInt(req.params.id)
    res.render('fruits/edit', { fruit, id })
})

//------------- GET edit page meats---------------
app.get('/meats/:id/edit', (req, res) => {
    const meat = meats[req.params.id];
    let id = parseInt(req.params.id)
    res.render('meats/edit', { meat, id })
})

//-------------- GET edit page veggies-------------
app.get('/veggies/:id/edit', (req, res) => {
    const veggie = veggies[req.params.id];
    let id = parseInt(req.params.id)
    res.render('veggies/edit', { veggie, id })
})

//============ DELETE ==============
//-------------GET delete page fruits------------
app.get('/fruits/:id/delete', (req, res) => {
    const fruit = fruits[req.params.id];
    let id = parseInt(req.params.id);
    res.render('fruits/delete', { fruit, id })
})

//-------------GET delete page meats-------------
app.get('/meats/:id/delete', (req, res) => {
    const meat = meats[req.params.id];
    let id = parseInt(req.params.id);
    res.render('meats/delete', { meat, id })
})

//------------GET delete page veggies---------------
app.get('/veggies/:id/delete', (req, res) => {
    const veggie = veggies[req.params.id];
    let id = parseInt(req.params.id);
    res.render('veggies/delete', { veggie, id })
})

//---------meats route----------
app.get('/meats', (req, res) => {
    res.render('meats/index.ejs', {allMeats: meats})
})

app.get('/meats/new', (req, res) => {
    res.render('meats/new.ejs')
})

app.get('/meats/:indexOfMeatsArray', (req, res) => {
    let idx = parseInt(req.params.indexOfMeatsArray);
    if (idx >= meats.length) {
        res.render('404.ejs');
    } else {
        res.render('meats/show.ejs', {meat: meats[idx], id: idx});
    }
})

//----------veggies route------------
app.get('/veggies', (req, res) => {
    //console.log(Typed);
    res.render('veggies/index.ejs', {allVeggies: veggies, Typed: Typed})
    //res.send('Veggies')
})

app.get('/veggies/new', (req, res) => {
    res.render('veggies/new.ejs')
})

app.get('/veggies/:indexOfVeggiesArray', (req, res) => {
    let idx = parseInt(req.params.indexOfVeggiesArray);
    if (idx >= veggies.length) {
        res.render('404.ejs');
    } else {
        res.render('veggies/show.ejs', {veggie: veggies[idx], id: idx});
    }
})

//----------recipes route-------------
app.get('/recipes', (req, res) => {
    res.render('recipes/index.ejs', {allRecipes: recipes, Typed: Typed})
})

app.get('/recipes/:indexOfRecipesArray', (req, res) => {
    let idx = parseInt(req.params.indexOfRecipesArray);
    if (idx >= recipes.length) {
        res.render('404.ejs');
    } else {
        res.render('recipes/show.ejs', {recipe: recipes[idx]});
    }
})

//----------world cuisines route-------------
app.get('/cuisines', (req, res) => {
    res.render('cuisines/index.ejs', {allCuisines: cuisines})
})

app.get('/cuisines/:indexOfCuisinesArray', (req, res) => {
    let idx = parseInt(req.params.indexOfCuisinesArray);
    if (idx >= cuisines.length) {
        res.render('404.ejs');
    } else {
        res.render('cuisines/show.ejs', {cuisine: cuisines[idx], index: idx});
    }
})

app.get('cuisines/:indexOfCuisinesArray/regionRecipes', (req, res) => {
    if (idx >= cuisines.length) {
        res.render('404.ejs');
    } else {
        res.render('cuisines/details.ejs', {regionRecipes: recipesArr[idx]})
    }
})


//----------contact us route------------
app.get('/contact', (req, res) => {
    res.render('contact-us/index.ejs')
})

// ============= POST =============
//-----------post new fruits-------------
// create
app.post('/fruits', (req, res) => {
    console.log(req.body)
    if (req.body.readyToEat === 'on') { // if checked, req.body.readyToEat is set to 'on'
      req.body.readyToEat = true
    } else { // if not checked, req.body.readyToEat is undefined
      req.body.readyToEat = false
    }
    fruits.push(req.body)
    res.redirect('/fruits')
  })

//----------POST new meats--------------
app.post('/meats', (req, res) => {
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    meats.push(req.body)
    res.redirect('/meats')
})

//---------POST new veggies------------
app.post('/veggies', (req, res) => {
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    veggies.push(req.body)
    res.redirect('/veggies')
})

//============ PUT ==============
//------------put update fruit -------------
app.put('/fruits/:id', (req, res) => {
    console.log('------ UPDATE FRUIT ----------\n', req.body)
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    fruits[parseInt(req.params.id)] = req.body;
    res.redirect('/fruits')
})

//------------PUT update meat--------------
app.put('/meats/:id', (req, res) => {
    console.log('------ UPDATE MEAT ----------\n', req.body)
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    meats[parseInt(req.params.id)] = req.body;
    res.redirect('/meats')
})

//------------PUT update veggie--------------
app.put('/veggies/:id', (req, res) => {
    console.log('------ UPDATE VEGGIE ----------\n', req.body)
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    veggies[parseInt(req.params.id)] = req.body;
    res.redirect('/veggies')
})

//============== DELETE ============
//----------delete delete fruit------------
app.delete('/fruits/:id', (req, res) => {
    fruits.splice(parseInt(req.params.id), 1);
    res.redirect('/fruits');
});

//----------delete meats-------------
app.delete('/meats/:id', (req, res) => {
    meats.splice(parseInt(req.params.id), 1);
    res.redirect('/meats');
});

//----------delete veggies-------------
app.delete('/veggies/:id', (req, res) => {
    veggies.splice(parseInt(req.params.id), 1);
    res.redirect('/veggies');
});

// =========== LISTEN FOR SERVER ===========
app.listen(3000, () => {
    console.log("Server is running on PORT ", PORT)
})

