var express = require('express');
const fruit_controlers= require('../controllers/fruit');
var router = express.Router();

const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }

/* GET home page. */
router.get('/', fruit_controlers.fruit_view_all_Page );
module.exports = router;

/* GET detail costume page */
router.get('/detail', fruit_controlers.fruit_view_one_Page);

/* GET create costume page */
router.get('/create', fruit_controlers.fruit_create_Page);

/* GET create update page */
router.get('/update', fruit_controlers.fruit_update_Page);
/* GET delete costume page */
router.get('/delete', fruit_controlers.fruit_delete_Page);

router.get('/update', fruit_controlers.fruit_update_Page);

router.get('/update', secured,fruit_controlers.fruit_update_Page);

module.exports = router;