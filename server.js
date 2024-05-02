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
const desserts = require('./models/desserts.js')
const salads = require('./models/salads.js')

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

// ------------ GET edit page desserts-----------
app.get('/desserts/:id/edit', (req, res) => {
    const dessert = desserts[req.params.id];
    let id = parseInt(req.params.id)
    res.render('desserts/edit', { dessert, id })
})

//-------------- GET edit page salads-------------
app.get('/salads/:id/edit', (req, res) => {
    const fruit = salads[req.params.id];
    let id = parseInt(req.params.id)
    res.render('salads/edit', { salad, id })
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

//------------GET delete page desserts-------------
app.get('/desserts/:id/delete', (req, res) => {
    const dessert = desserts[req.params.id];
    let id = parseInt(req.params.id);
    res.render('desserts/delete', { dessert, id })
})

//-------------GET delete page salads------------
app.get('/salads/:id/delete', (req, res) => {
    const salad = salads[req.params.id];
    let id = parseInt(req.params.id);
    res.render('salads/delete', { salad, id })
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

//---------Desserts route----------
app.get('/desserts', (req, res) => {
    res.render('desserts/index.ejs', {allDesserts: desserts})
})

//put this above your show.ejs file
app.get('/desserts/new', (req, res) => {
    res.render('desserts/new.ejs')
})

app.get('/desserts/:indexOfDessertsArray', (req, res) => {
    let idx = parseInt(req.params.indexOfDessertsArray);
    if (idx >= desserts.length) {
        res.render('404.ejs');
    } else {
        res.render('desserts/show.ejs', {dessert: desserts[idx], id: idx});
    }
})

//---------salads route----------
app.get('/salads', (req, res) => {
    res.render('salads/index.ejs', {allSalads: salads})
})

//put this above your show.ejs file
app.get('/salads/new', (req, res) => {
    res.render('salads/new.ejs')
})

app.get('/salads/:indexOfSaladsArray', (req, res) => {
    let idx = parseInt(req.params.indexOfSaladsArray);
    if (idx >= salads.length) {
        res.render('404.ejs');
    } else {
        res.render('salads/show.ejs', {salad: salads[idx], id: idx});
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

//-----------post new Desserts -------------
// create
app.post('/desserts', (req, res) => {
    console.log(req.body)
    if (req.body.readyToEat === 'on') { // if checked, req.body.readyToEat is set to 'on'
      req.body.readyToEat = true
    } else { // if not checked, req.body.readyToEat is undefined
      req.body.readyToEat = false
    }
    desserts.push(req.body)
    res.redirect('/desserts')
  })

//-----------post new salads-------------
// create
app.post('/salads', (req, res) => {
    console.log(req.body)
    if (req.body.readyToEat === 'on') { // if checked, req.body.readyToEat is set to 'on'
      req.body.readyToEat = true
    } else { // if not checked, req.body.readyToEat is undefined
      req.body.readyToEat = false
    }
    salads.push(req.body)
    res.redirect('/salads')
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

//------------put update Dessert -------------
app.put('/desserts/:id', (req, res) => {
    console.log('------ UPDATE FRUIT ----------\n', req.body)
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    desserts[parseInt(req.params.id)] = req.body;
    res.redirect('/desserts')
})

//------------put update salad -------------
app.put('/salads/:id', (req, res) => {
    console.log('------ UPDATE Salad ----------\n', req.body)
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    salads[parseInt(req.params.id)] = req.body;
    res.redirect('/salads')
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

//----------delete delete dessert------------
app.delete('/desserts/:id', (req, res) => {
    desserts.splice(parseInt(req.params.id), 1);
    res.redirect('/desserts');
});

//----------delete delete salad------------
app.delete('/salads/:id', (req, res) => {
    salads.splice(parseInt(req.params.id), 1);
    res.redirect('/salads');
});

// =========== LISTEN FOR SERVER ===========
app.listen(3000, () => {
    console.log("Server is running on PORT ", PORT)
})

