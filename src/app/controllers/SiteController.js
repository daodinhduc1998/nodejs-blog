class SiteController {
    //GET /
    index(req, res) {
        res.render('home');
    }

    //[GET] details /search
    search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteController();