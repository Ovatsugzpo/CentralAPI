class Home {
    application(req, res){
        res.status(200).send({application: 'OK'})
    }
}

module.exports = new Home