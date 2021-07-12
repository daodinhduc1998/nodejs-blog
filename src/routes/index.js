const newsRouter = require('./news');

function route(app) {
    app.get('/', (req, res) => {
        res.render('home');
    })

    app.use('/news', newsRouter);


    app.get('/search', (req, res) => {
        //console.log(req.query)
        res.render('search');
    })
    app.post('/search', (req, res) => {
        console.log(req.body)
        res.send('POST');
    })
}


module.exports = route;