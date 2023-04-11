var fruit = require('../models/fruit');
// List of all Costumes
exports.fruit_list = async function(req, res) {
    try{
    thefruit = await fruit.find();
    res.send(thefruit);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// for a specific Costume.
exports.fruit_detail = function(req, res) {
res.send('NOT IMPLEMENTED: fruit detail: ' + req.params.id);
};
exports.fruit_create_post = async function(req, res) {
    console.log(req.body)
    let document = new fruit();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.Name = req.body.Name;
    document.Color = req.body.Color;
    document.Price = req.body.Price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
// Handle Costume delete form on DELETE.
exports.fruit_delete = function(req, res) {
res.send('NOT IMPLEMENTED: fruit delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.fruit_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: fruit update PUT' + req.params.id);
};



    exports.fruit_view_all_Page = async function(req, res) {
        try{
        thefruit = await fruit.find();
        res.render('fruit', { title: 'fruit Search Results', results: thefruit });
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
        }
    