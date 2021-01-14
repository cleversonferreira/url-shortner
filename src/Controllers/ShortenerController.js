const Shortener  = require('../models/Shortener');
const Random     = require("../helpers/random");
const URLTool    = require("../helpers/urlCheck");


module.exports = {
    
    // Create
    create: async (req, res) => {
        try{

            //get url
            const url  = req.body.url;

            if(!URLTool.check(url)){
                return res.status(400).send({
                    error: 'Invalid URL'
                });
            }
    
            //generate code
            let rand = Random.rand(10)
    
            //create roles
            let obj = {
                url: url,
                shortcode: rand
            };
    
            //save on database
            let shortObj = await Shortener.create(obj);

            //create new url
            let shortUrl = req.get('host') + '/' + shortObj.shortcode
            
            return res.send({ newUrl: shortUrl });
    
        } catch (err) {
            return res.status(400).send({
                error: 'Error on create shortcode.',
                message: err.message
            });
        }
    },

    find: async (req, res) => {
        try{
            let shorcode = req.params.shortcode
            let sc = { 'shortcode': new Object(shorcode) };

            const shortObj = await Shortener.findOne(sc);

            //check if obj exists
            if(shortObj.url){
                //check date expiration
                const today      = new Date()
                const expiration = new Date(shortObj.expirationDate)

                if(expiration > today)
                    //redirect to new valid url
                    res.redirect(shortObj.url)

                //return error
                return res.send("<h1>Shortcode Expirado</h1>")
            }

        } catch (err) {
            return res.send("<h1>Shortcode Inválido</h1>")
        }
    }

}