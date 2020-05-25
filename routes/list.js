var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/list', function(req, res,next) {
    res.send('respond with a resource');
});

router.get('/new', function (req, res, next) {
    res.render('index', {title: 'Add User Form'});
});

module.exports = router;
